'use strict';
var Google = Google || {};
const appointmentStatus = {
    visited: 0,
    unvisited: 1,
    allvisit: 2
};
let filterDivShowHide = false;


Google.MapObject = (function () {
    var userList = [], cityList = [], countyList = [], branchList = [], appointmentList = [], googleSettings = [], systemUserSettings = [], markerIcons = {};

    let cityInfoWindows = [];
    let countyInfoWindows = [];
    let cityCircles = [];
    let countyCircles = [];
    let branchMarkers = [];
    let filteredCities = [];
    let filteredCounties = [];
    let filteredUsers = [];
    let filteredBranches = [];

    let IsSelectedItemsBranches = [];
    var appointmentStatusInput = null;
    let startDate = new Date('1980-01-01T00:00:00.000Z');
    let endDate = new Date();
    endDate.setHours(23, 59, 59, 999);
    let geocoder;
    let branchDetailsContainer;
    let branchDetailsContentElement;

    let latLng = { lat: 39.9334, lng: 32.8597 };
    let map = null;
    let mapLabelCities = [];
    let mapLabelCounties = [];
    var GMaps = {
        initMap: function (_users = [], _cities = [], _counties = [], _branches = [], _appointments = [], _settingsGoogle = [], _systemuserSettings = [], _markerIcon = {}) {
            userList = _users;
            cityList = _cities;
            countyList = _counties;
            branchList = _branches;
            appointmentList = _appointments;
            googleSettings = _settingsGoogle;
            systemUserSettings = _systemuserSettings;
            markerIcons = _markerIcon;

            map = new google.maps.Map(document.getElementById('map'), {
                center: latLng,
                panControl: false,
                mapTypeControl: true,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                rotateControl: false,
                gestureHandling: "greedy",
                zoomControl: true,
            });

            const settingsElement = document.getElementById('settingsContainer');
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(settingsElement);
            const filterElement = document.getElementById('filterContainer');
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(filterElement);
            const versionDiv = document.createElement("div");
            versionDiv.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            versionDiv.style.padding = "5px";
            versionDiv.style.margin = "10px";
            versionDiv.style.borderRadius = "5px";
            versionDiv.style.fontSize = "12px";
            versionDiv.innerText = "V1.2.1";
            map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(versionDiv);

            function MapLabel(opt_options) {
                this.set('fontFamily', 'sans-serif');
                this.set('fontSize', 12);
                this.set('fontColor', '#000000');
                this.set('strokeWeight', 2);
                this.set('strokeColor', '#000000');
                this.set('align', 'center');
                this.set('zIndex', 1);
                this.setValues(opt_options);
            }

            MapLabel.prototype = new google.maps.OverlayView;
            window['MapLabel'] = MapLabel;

            MapLabel.prototype.changed = function (prop) {
                switch (prop) {
                    case 'fontFamily':
                    case 'fontSize':
                    case 'fontColor':
                    case 'strokeWeight':
                    case 'strokeColor':
                    case 'align':
                    case 'text':
                        return this.drawCanvas_();
                    case 'maxZoom':
                    case 'minZoom':
                    case 'position':
                        return this.draw();
                }
            };

            MapLabel.prototype.drawCanvas_ = function () {
                var canvas = this.canvas_;
                if (!canvas) return;
                var style = canvas.style;
                style.zIndex = 0;

                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = this.get('strokeColor');
                ctx.fillStyle = this.get('fontColor');
                ctx.font = this.get('fontSize') + 'px ' + this.get('fontFamily');

                var strokeWeight = Number(this.get('strokeWeight'));
                var text = this.get('text');
                if (text) {
                    if (strokeWeight) {
                        ctx.lineWidth = strokeWeight;
                        ctx.strokeText(text, strokeWeight, strokeWeight);
                    }
                    ctx.fillText(text, strokeWeight, strokeWeight);
                    var textMeasure = ctx.measureText(text);
                    var textWidth = textMeasure.width + strokeWeight;
                    style.marginLeft = this.getMarginLeft_(textWidth) + 'px';
                    style.marginTop = '-0.8em';
                }
            };

            MapLabel.prototype.onAdd = function () {
                var canvas = this.canvas_ = document.createElement('canvas');
                var style = canvas.style;
                style.position = 'absolute';
                var ctx = canvas.getContext('2d');
                ctx.lineJoin = 'round';
                ctx.textBaseline = 'top';
                this.drawCanvas_();
                var panes = this.getPanes();
                if (panes) {
                    panes.mapPane.appendChild(canvas);
                }
            };

            MapLabel.prototype['onAdd'] = MapLabel.prototype.onAdd;

            MapLabel.prototype.getMarginLeft_ = function (textWidth) {
                switch (this.get('align')) {
                    case 'left':
                        return 0;
                    case 'right':
                        return -textWidth;
                }
                return textWidth / -2;
            };

            MapLabel.prototype.draw = function () {
                var projection = this.getProjection();
                if (!projection) {
                    return;
                }
                if (!this.canvas_) {
                    return;
                }
                var latLng = this.get('position');
                if (!latLng) {
                    return;
                }
                var pos = projection.fromLatLngToDivPixel(latLng);
                var style = this.canvas_.style;
                style['top'] = pos.y + 'px';
                style['left'] = pos.x + 'px';
                style['visibility'] = this.getVisible_();
            };

            MapLabel.prototype['draw'] = MapLabel.prototype.draw;

            MapLabel.prototype.getVisible_ = function () {
                var minZoom = this.get('minZoom');
                var maxZoom = this.get('maxZoom');
                if (minZoom === undefined && maxZoom === undefined) {
                    return '';
                }
                var map = this.getMap();
                if (!map) {
                    return '';
                }
                var mapZoom = map.getZoom();
                if (mapZoom < minZoom || mapZoom > maxZoom) {
                    return 'hidden';
                }
                return '';
            };

            MapLabel.prototype.onRemove = function () {
                var canvas = this.canvas_;
                if (canvas && canvas.parentNode) {
                    canvas.parentNode.removeChild(canvas);
                }
            };

            MapLabel.prototype['onRemove'] = MapLabel.prototype.onRemove;

            Promise.all([createCityCircles(cityList), createBranchDetailsContainer()]).then(values => {
                setTimeout(() => {
                    if (systemUserSettings[0]?.country?.length != 0) {
                        var validationLat = systemUserSettings[0]?.country[0]?.center?.lat;
                        var validationLng = systemUserSettings[0]?.country[0]?.center?.lng;
                        if (validationLat != null && validationLng != null) {
                            map.setCenter(systemUserSettings[0]?.country[0]?.center);
                            map.setZoom(6);
                        } else {
                            map.setZoom(2);
                        }
                    } else {
                        map.setZoom(3);
                        map.setCenter(latLng);
                    }
                }, 1000);
            });

            map.addListener("click", (e) => {
                hideBranchDetailsPanel();
            });

            map.addListener('zoom_changed', function () {
                let zoom = parseInt(map.getZoom());
                mapLabelCities.forEach(mapLabelCity => {
                    mapLabelCity.set('fontSize', zoom * 3);
                });
                mapLabelCounties.forEach(mapLabelCounty => {
                    mapLabelCounty.set('fontSize', zoom * 3);
                });
                if (IsSelectedItemsBranches.length > 0) {
                    clearBranchMarkers();
                    if (branchMarkers.length === 0) {
                        generateBranchMarkers();
                    }
                } else {
                    if (zoom < 8.5) {
                        if (cityCircles.length === 0) {
                            createCityCircles(cityList);
                        }
                        removeCountyCircles(countyCircles);
                        removeCountyInfoWindows();
                        clearBranchMarkers();
                        hideBranchDetailsPanel();
                    } else {
                        removeCityCircles(cityCircles);
                        removeCityInfoWindows();
                    }
                    if (zoom >= 8.5 && zoom < 12) {
                        if (countyCircles.length === 0) {
                            createCountyCircles(countyList);
                        }
                        removeCityCircles(cityCircles);
                        removeCityInfoWindows();
                    }
                    if (zoom >= 12 || (countyList.length === 0 && zoom >= 8.5 && zoom < 12)) {
                        removeCountyCircles(countyCircles);
                        removeCountyInfoWindows();
                        if (branchMarkers.length === 0) {
                            filterAllBranches();
                            generateBranchMarkers();
                        }
                    } else {
                        clearBranchMarkers();
                    }
                }
            });

            function displayBranchDetails() {
                branchDetailsContainer.style.display = "block";
            }

            function hideBranchDetailsPanel() {
                branchDetailsContainer.style.display = "none";
            }

            function createBranchDetailsContainer() {
                branchDetailsContentElement = document.createElement("pre");
                branchDetailsContentElement.id = "branchDetailsContentElement";
                branchDetailsContentElement.innerText = "";
                branchDetailsContainer = document.createElement("div");
                branchDetailsContainer.id = "branchDetailsContentElement-container";
                branchDetailsContainer.style.padding = "10px";
                branchDetailsContainer.style.backgroundColor = "rgba(255, 255, 255, 0)";
                branchDetailsContainer.style.borderRadius = "10px";
                branchDetailsContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                branchDetailsContainer.appendChild(branchDetailsContentElement);
                map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(branchDetailsContainer);
            }

            function getCityCircleSettings(branchesCountSingle, position, radiusEditable, radiusSize) {
                if (radiusEditable) {
                    let branchesCountCharacter = parseInt(branchesCountSingle).toString().length;
                    if (branchesCountCharacter == 2) {
                        radiusSize += 20000;
                    }
                    if (branchesCountCharacter == 3) {
                        radiusSize += 30000;
                    }
                    if (branchesCountCharacter == 4) {
                        radiusSize += 40000;
                    }
                }
                let fillColor = googleSettings[0].defaultcirclecolorcode;
                googleSettings[0].colorsettings.forEach(element => {
                    if (branchesCountSingle >= element.min && branchesCountSingle <= element.maks) {
                        fillColor = element.colorcode;
                    }
                });
                let circlesettings = {};
                circlesettings.strokeColor = '#000';
                circlesettings.strokeOpacity = .2;
                circlesettings.strokeWeight = 0;
                circlesettings.fillColor = fillColor;
                circlesettings.fillOpacity = 0.4;
                circlesettings.map = map;
                circlesettings.center = position;
                circlesettings.radius = radiusSize;
                circlesettings.draggable = false;
                circlesettings.editable = false;
                circlesettings.clickable = true;
                return circlesettings;
            }

            function getCountyCircleSettings(branchesCountSingle, position, radiusEditable, radiusSize) {
                if (radiusEditable) {
                    let branchesCountCharacter = parseInt(branchesCountSingle).toString().length;
                    if (branchesCountCharacter == 2) {
                        radiusSize += 1000;
                    }
                    if (branchesCountCharacter == 3) {
                        radiusSize += 2000;
                    }
                    if (branchesCountCharacter == 4) {
                        radiusSize += 3000;
                    }
                }
                let fillColor = googleSettings[0].defaultcirclecolorcode;
                googleSettings[0].colorsettings.forEach(element => {
                    if (branchesCountSingle >= element.min && branchesCountSingle <= element.maks) {
                        fillColor = element.colorcode;
                    }
                });
                let circlesettings = {};
                circlesettings.strokeColor = '#000';
                circlesettings.strokeOpacity = .2;
                circlesettings.strokeWeight = 0;
                circlesettings.fillColor = fillColor;
                circlesettings.fillOpacity = 0.4;
                circlesettings.map = map;
                circlesettings.center = position;
                circlesettings.radius = radiusSize;
                circlesettings.draggable = false;
                circlesettings.editable = false;
                circlesettings.clickable = true;
                return circlesettings;
            }

            function createCityCircles(cityList) {
                const citiesLoading = () => {
                    removeCityCircles(cityCircles);
                    cityList = getFilteredCities();
                    let counter = 0;
                    let mapLabelCity = null;
                    cityList.forEach(function (value, i) {
                        let branchesCountSingle = countBranchesByCity(value.id);
                        if (branchesCountSingle == 0)
                            return;
                        let cityRadiusSize = parseInt(googleSettings[0].cityradiussize);
                        cityCircles.push(new google.maps.Circle(getCityCircleSettings(branchesCountSingle, value.center, true, cityRadiusSize)));
                        mapLabelCity = new MapLabel({
                            text: branchesCountSingle,
                            position: new google.maps.LatLng(value.center),
                            map: map,
                            fontSize: 25,
                            align: 'center',
                            zIndex: 0
                        });
                        mapLabelCity.set('position', new google.maps.LatLng(value.center));
                        cityCircles[counter].bindTo('map', mapLabelCity);
                        cityCircles[counter].bindTo('position', mapLabelCity);
                        cityCircles[counter].setDraggable(false);
                        cityCircles[counter].addListener('click', function (mapsMouseEvent) {
                            var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                            map.setCenter(position);
                            map.setZoom(8.5);
                        });
                        mapLabelCities.push(mapLabelCity);
                        counter++;
                    });
                };
                return Promise.resolve(citiesLoading());
            }

            function createCountyCircles(countyList) {
                const countiesLoading = () => {
                    removeCountyCircles(countyCircles);
                    countyList = getFilteredCounties();
                    let counter = 0;
                    let mapLabelCounty = null;
                    countyList.forEach(function (value, i) {
                        let branchesCountSingle = countBranchesByCounty(value.id);
                        if (branchesCountSingle == 0)
                            return;
                        let countyRadiusSize = parseInt(googleSettings[0].countyradiussize);
                        countyCircles.push(new google.maps.Circle(getCountyCircleSettings(branchesCountSingle, value.center, true, countyRadiusSize)));
                        countyCircles[counter].addListener('click', function (mapsMouseEvent) {
                            var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                            map.setCenter(position);
                            map.setZoom(12);
                        });
                        mapLabelCounty = new MapLabel({
                            text: branchesCountSingle,
                            position: new google.maps.LatLng(value.center),
                            map: map,
                            fontSize: 20,
                            align: 'center',
                            zIndex: 0
                        });
                        mapLabelCounty.set('position', new google.maps.LatLng(value.center));
                        countyCircles[counter].bindTo('map', mapLabelCounty);
                        countyCircles[counter].bindTo('position', mapLabelCounty);
                        countyCircles[counter].setDraggable(false);
                        mapLabelCounties.push(mapLabelCounty);
                        counter++;
                    });
                };
                return Promise.resolve(countiesLoading());
            }

            function generateMarkerSettings(entityname, id, title, appointment, user_fullname, phone, position, map) {
                const icon = {
                    url: markerIcons[googleSettings[0].markericoncode],
                };
                let markerSettings = {};
                markerSettings.entityname = entityname;
                markerSettings.title = title;
                markerSettings.id = id;
                markerSettings.appointment = appointment;
                markerSettings.user_fullname = user_fullname;
                markerSettings.phone = phone;
                markerSettings.position = position;
                markerSettings.map = map;
                markerSettings.icon = icon;
                return markerSettings;
            }

            function generateBranchMarkers() {
                clearBranchMarkers();
                hideBranchDetailsPanel();
                if (IsSelectedItemsBranches.length > 0) {
                    filteredBranches = IsSelectedItemsBranches;
                } else {
                    filteredBranches = getFilteredBranches(branchList);
                }
                for (let i = 0; i < filteredBranches.length; i++) {
                    var userFullName = '';

                    if (filteredBranches[i].user_id != "00000000-0000-0000-0000-000000000000") {
                        userFullName += findUserById(filteredBranches[i].user_id)?.text, ", " || '';
                    }
                    if (filteredBranches[i].user_id1 != "00000000-0000-0000-0000-000000000000") {
                        userFullName += findUserById(filteredBranches[i].user_id1)?.text, ", " || '';
                    }
                    if (filteredBranches[i].user_id2 != "00000000-0000-0000-0000-000000000000") {
                        userFullName += findUserById(filteredBranches[i].user_id2)?.text, ", " || '';
                    }
                    if (filteredBranches[i].user_id3 != "00000000-0000-0000-0000-000000000000") {
                        userFullName += findUserById(filteredBranches[i].user_id3)?.text, ", " || '';
                    }
                    if (filteredBranches[i].user_id4 != "00000000-0000-0000-0000-000000000000") {
                        userFullName += findUserById(filteredBranches[i].user_id4)?.text, ", " || '';
                    }
                    if (filteredBranches[i].user_id5 != "00000000-0000-0000-0000-000000000000") {
                        userFullName += findUserById(filteredBranches[i].user_id5)?.text, ", " || '';
                    }
                    if (filteredBranches[i].user_id6 != "00000000-0000-0000-0000-000000000000") {
                        userFullName += findUserById(filteredBranches[i].user_id6)?.text || '';
                    }


                    var appointment = findAppointmentsByBranchId(filteredBranches[i].id);
                    if (branchMarkers.some(marker => marker.id === filteredBranches[i].id)) {
                        continue;
                    }
                    var marker = new google.maps.Marker(generateMarkerSettings(filteredBranches[i].entity_name, filteredBranches[i].id, filteredBranches[i].text, appointment, userFullName, filteredBranches[i].phone, filteredBranches[i].position, map));
                    marker.id = filteredBranches[i].id;
                    branchMarkers.push(marker);
                    branchMarkers[i].addListener('click', function (mapsMouseEvent) {
                        var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                        map.setCenter(position);
                        map.setZoom(16);
                        clearBranchMarkers();
                        hideBranchDetailsPanel();
                        generateBranchMarkers();
                        geocodeAndDisplayBranchDetails({ location: position }, branchMarkers[i]);
                    });
                }
            }

            function clearBranchMarkers() {
                assignMapToBranchMarkers(null);
                branchMarkers = [];
            }

            function removeCityCircles(cityCircles) {
                cityCircles.forEach(element => {
                    element.setMap(null);
                });
                cityCircles.splice(0, cityCircles.length);
            }

            function removeCountyCircles(countyCircles) {
                countyCircles.forEach(element => {
                    element.setMap(null);
                });
                countyCircles.splice(0, countyCircles.length);
            }

            function removeCityInfoWindows() {
                cityInfoWindows.forEach(element => {
                    element.setMap(null);
                });
                cityInfoWindows.splice(0, cityInfoWindows.length);
            }

            function removeCountyInfoWindows() {
                countyInfoWindows.forEach(element => {
                    element.setMap(null);
                });
                countyInfoWindows.splice(0, countyInfoWindows.length);
            }

            function findUserById(id) {
                return userList.find(user => user.id == id.toString()) || null;
            }

            function findAppointmentsByBranchId(branch_id) {
                if (!branch_id) {
                    return [];
                }
                const desiredAppointment = appointmentList.filter(appointment =>
                    appointment.branch_id.toString() === branch_id.toString()
                );
                return desiredAppointment;
            }

            function getFilteredCities() {
                return filteredCities.length === 0 ? cityList : filteredCities;
            }

            function getFilteredCounties() {
                return filteredCounties.length === 0 ? countyList : filteredCounties;
            }

            function getFilteredUsers() {
                return filteredUsers.length === 0 ? userList : filteredUsers;
            }

            function filterBranchesByCity() {
                const citiesAssigment = getFilteredCities();
                filteredBranches = branchList.filter(branch =>
                    citiesAssigment.some(city => city.id === branch.city_id)
                );
            }

            function filterBranchesByCounty() {
                const countiesAssigment = getFilteredCounties();
                filteredBranches = filteredBranches.filter(branch =>
                    countiesAssigment.some(county => county.id === branch.county_id)
                );
            }

            function filterBranchesByUser() {
                const usersAssigment = getFilteredUsers();
                filteredBranches = filteredBranches.filter(branch =>
                    usersAssigment.some(user => user.id === branch.user_id || user.id === branch.user_id1 || user.id === branch.user_id2 || user.id === branch.user_id3 || user.id === branch.user_id4 || user.id === branch.user_id5 || user.id === branch.user_id6)
                );
            }

            function filterBranchesByAppointmentStatus() {
                if (appointmentStatusInput == appointmentStatus.unvisited) {
                    filteredBranches = filteredBranches.filter(branch =>
                        appointmentList.some(appointment => {
                            let meetingStart = new Date(appointment.meeting_date_start);
                            let meetingEnd = new Date(appointment.meeting_date_end);
                            return appointment.branch_id === branch.id &&
                                meetingStart >= startDate &&
                                meetingEnd <= endDate;
                        })
                    );
                } else if (appointmentStatusInput == appointmentStatus.unvisited) {
                    filteredBranches = filteredBranches.filter(branch =>
                        !appointmentList.some(appointment => {
                            let meetingStart = new Date(appointment.meeting_date_start);
                            let meetingEnd = new Date(appointment.meeting_date_end);
                            return appointment.branch_id === branch.id &&
                                meetingStart >= startDate &&
                                meetingEnd <= endDate;
                        })
                    );
                } else {
                    filteredBranches = branchList;
                }
            }

            function filterAllBranches() {
                filteredBranches = [...branchList];
                filterBranchesByAppointmentStatus();
                filterBranchesByCity();
                filterBranchesByCounty();
                filterBranchesByUser();
            }

            function getFilteredBranches(branches) {
                let filtered = branches;
                if (appointmentStatusInput) {
                    if (appointmentStatusInput == appointmentStatus.visited) {
                        filtered = filtered.filter(branch =>
                            appointmentList.some(appointment => {
                                let meetingStart = new Date(appointment.meeting_date_start);
                                let meetingEnd = new Date(appointment.meeting_date_end);

                                return appointment.branch_id === branch.id
                                    && meetingStart >= startDate
                                    && meetingEnd <= endDate;
                            })
                        );
                    } else if (appointmentStatusInput == appointmentStatus.unvisited) {
                        filtered = filtered.filter(branch =>
                            !appointmentList.some(appointment => {
                                let meetingStart = new Date(appointment.meeting_date_start);
                                let meetingEnd = new Date(appointment.meeting_date_end);
                                return appointment.branch_id === branch.id
                                    && meetingStart >= startDate
                                    && meetingEnd <= endDate;
                            })
                        );
                    } else {
                        filtered = branchList;
                    }
                }
                if (filteredUsers.length > 0) {
                    filtered = filtered.filter(branch =>
                        filteredUsers.some(user => user.id === branch.user_id || user.id === branch.user_id1 || user.id === branch.user_id2 || user.id === branch.user_id3 || user.id === branch.user_id4 || user.id === branch.user_id5 || user.id === branch.user_id6)
                    );
                }
                if (filteredCounties.length > 0) {
                    filtered = filtered.filter(branch =>
                        filteredCounties.some(county => county.id === branch.county_id)
                    );
                }
                if (filteredCities.length > 0) {
                    filtered = filtered.filter(branch =>
                        filteredCities.some(city => city.id === branch.city_id)
                    );
                }
                return filtered;
            }

            function countBranchesByCounty(countyid) {
                const filtered = getFilteredBranches(branchList);
                return filtered.filter(branch => branch.county_id === countyid).length;
            }

            function countBranchesByCity(cityid) {
                const filtered = getFilteredBranches(branchList);
                return filtered.filter(branch => branch.city_id === cityid).length;
            }

            function geocodeAndDisplayBranchDetails(request, branchMarkers) {
                geocoder = new google.maps.Geocoder();
                geocoder.geocode(request)
                    .then((result) => {
                        const { results } = result;
                        map.setCenter(results[0].geometry.location);
                        displayBranchDetails();
                        var appointmentTbody = '';
                        var appointmentThead = '';
                        var appointmentRow = '';
                        branchMarkers.appointment.forEach(element => {
                            appointmentRow += '<tr>' +
                                '<td>' + element.number + '</td>' +
                                '<td>' + element.meeting_date_start + '</td>' +
                                '<td>' + element.meeting_date_end + '</td>' +
                                '<td><button type="button" class="btn btn-primary" id="DetailAppointment" data-id="' + element.id + '" onClick="Google.MapObject.DetailAppointment(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">' +
                                '<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>' +
                                '<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>' +
                                '</svg>' +
                                '</button></td>' +
                                '</tr>';
                        });
                        appointmentThead = '<thead>' +
                            '<tr>' +
                            '<th class="col-md-4">Appointment Number</th>' +
                            '<th class="col-md-4">Meeting Date Start</th>' +
                            '<th class="col-md-4">Meeting Date End</th>' +
                            '</tr>' +
                            '</thead>';
                        appointmentTbody = '<tbody>' + appointmentRow + '</tbody>';
                        $(".appointmentstablerow").empty();
                        $(".appointmentstablerow").append(appointmentThead);
                        $(".appointmentstablerow").append(appointmentTbody);
                        var html = '<div class="container-fluid p-2" style="max-width: 100%; background-color: rgba(255, 255, 255, 0.85); border-radius: 8px;">' +
                            '<div class="d-flex justify-content-center mb-2">' +
                            '<button type="button" onclick="Google.MapObject.ClosebranchDetailsDiv(this)" class="btn btn-secondary" style="width:35px; height:28px; padding: 0;">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">' +
                            '<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>' +
                            '</svg>' +
                            '</button>' +
                            '</div>' +
                            '<div class="card col-12 mx-1 mb-2" style="box-shadow: 0 3px 6px rgba(0,0,0,0.1); border-radius: 8px;">' +
                            '<div class="card-body p-3">' +
                            '<h6 class="card-title"><strong>Branch Information</strong></h6>' +
                            '<hr>' +
                            '<p class="card-text" style="font-size:15px;">' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Entity Name:</strong> ' + branchMarkers.entityname + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Entity ID:</strong> ' + branchMarkers.id + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Title:</strong> ' + branchMarkers.title + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Address:</strong> ' + results[0].formatted_address + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Phone:</strong> ' + branchMarkers.phone + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Sales Representative:</strong> ' + branchMarkers.user_fullname + '</div></div>' +
                            '</p>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card col-12 mx-1 mb-2" style="box-shadow: 0 3px 6px rgba(0,0,0,0.1); border-radius: 8px;">' +
                            '<div class="card-body p-2 d-flex flex-column justify-content-around">' +
                            '<div class="mb-2"><input type="button" id="btnBranchInfo" class="btn btn-primary w-100 btn-sm" data-id="' + branchMarkers.id + '" data-entityname="' + branchMarkers.entityname + '" onClick="Google.MapObject.branchInfo(this)" value="Info"></div>' +
                            '<div class="mb-2"><input type="button" id="btnOpenAppointmentPanel" class="btn btn-success w-100 btn-sm" data-id="' + branchMarkers.id + '"  data-entityname="' + branchMarkers.entityname + '" data-name="' + branchMarkers.title + '" onClick="Google.MapObject.openAppointmentPanel(this)" value="Add Appointment"></div>' +
                            '<div class="mb-2"><input type="button" id="CreateRoute" class="btn btn-warning w-100 btn-sm" data-destination="' + results[0].formatted_address + '" onClick="Google.MapObject.CreateRoute(this)" value="Route"></div>' +
                            '<div><input type="button" id="btnAppointmentDetails" class="btn btn-info w-100 btn-sm" data-bs-toggle="modal" data-bs-target="#AppointmentsModal" value="Details"></div>' +
                            '</div>' +
                            '</div>' +
                            '<div/>';
                        branchDetailsContentElement.innerHTML = html;
                        if (branchMarkers.appointment.length != 0)
                            document.getElementById("btnAppointmentDetails").style.display = 'block';
                        else
                            document.getElementById("btnAppointmentDetails").style.display = 'none';
                        return results;
                    })
                    .catch((e) => {
                        alert("geocodeAndDisplayBranchDetails was not successful for the following reason: " + e);
                    });
            }

            function assignMapToBranchMarkers(map) {
                for (var i = 0; i < branchMarkers.length; i++) {
                    branchMarkers[i].setMap(map);
                }
            }

            function setCountyDataByCityFilter(filteredCities) {
                filteredCounties = [];
                filteredCities.forEach(cf => {
                    countyList.forEach(r => {
                        if (cf.id == r.city_id) {
                            filteredCounties.push(r);
                        }
                    });
                });
                $('#js-filter-multiple-county').empty();
                $('#js-filter-multiple-county').select2({
                    placeholder: "Select a county",
                    allowClear: true,
                    data: filteredCounties
                });
            }

            $('#js-filter-multiple-branch').select2({
                placeholder: "Select a branch",
                allowClear: true,
                data: branchList
            });

            $('#js-filter-multiple-city').select2({
                placeholder: "Select a city",
                allowClear: true,
                data: cityList
            });

            $('#js-filter-multiple-county').select2({
                placeholder: "Select a county",
            });

            $('#js-filter-multiple-user').select2({
                placeholder: "Select a user",
                allowClear: true,
                data: userList
            });

            $('#js-filter-single-appointment').select2({
                placeholder: "Select a appointment status",
                allowClear: true
            });

            $("#js-filter-single-appointment").on("select2:clear", function () {
                $(this).val(appointmentStatus.allvisit).trigger("change");
            });


            $("#js-filter-multiple-branch").on("select2:select select2:unselect", function (e) {
                IsSelectedItemsBranches = $('#js-filter-multiple-branch').select2('data');
                removeCityInfoWindows();
                removeCountyInfoWindows();
                removeCityCircles(cityCircles);
                removeCountyCircles(countyCircles);
                clearBranchMarkers();
                if (IsSelectedItemsBranches.length > 0) {
                    $("#js-filter-multiple-city").prop("disabled", true).val(null).trigger("change");
                    $("#js-filter-multiple-county").prop("disabled", true).val(null).trigger("change");
                    $("#js-filter-multiple-user").prop("disabled", true).val(null).trigger("change");
                    $("#js-filter-single-appointment").prop("disabled", true).val(null).trigger("change");
                    generateBranchMarkers();
                } else {
                    $("#js-filter-multiple-city").prop("disabled", false);
                    $("#js-filter-multiple-county").prop("disabled", false);
                    $("#js-filter-multiple-user").prop("disabled", false);
                    $("#js-filter-single-appointment").prop("disabled", false);
                    createCityCircles(cityList);
                    createCountyCircles(countyList);
                }
                map.setZoom(map.getZoom());
            });

            $("#js-filter-multiple-city").on("select2:select select2:unselect", function (e) {
                filteredCities = $('#js-filter-multiple-city').select2('data');
                setCountyDataByCityFilter(filteredCities);
                removeCityInfoWindows();
                removeCountyInfoWindows();
                createCityCircles(cityList);
                createCountyCircles(countyList);
                clearBranchMarkers();
                hideBranchDetailsPanel();
                map.setZoom(map.getZoom());
            });

            $("#js-filter-multiple-county").on("select2:select select2:unselect", function (e) {
                filteredCounties = $('#js-filter-multiple-county').select2('data');
                removeCityInfoWindows();
                removeCountyInfoWindows();
                createCityCircles(cityList);
                createCountyCircles(countyList);
                clearBranchMarkers();
                hideBranchDetailsPanel();
                map.setZoom(map.getZoom());
            });

            $("#js-filter-multiple-user").on("select2:select select2:unselect", function (e) {
                filteredUsers = $('#js-filter-multiple-user').select2('data');
                removeCityInfoWindows();
                removeCountyInfoWindows();
                createCityCircles(cityList);
                createCountyCircles(countyList);
                clearBranchMarkers();
                hideBranchDetailsPanel();
                map.setZoom(map.getZoom());
            });

            $("#js-filter-single-appointment").on("select2:select ", function (e) {
                var data = e.params.data;
                appointmentStatusInput = data.id;

                if (appointmentStatus.allvisit == appointmentStatusInput) {
                    $(".dtappointment").attr("disabled", 'disabled');
                    startDate = new Date('1980-01-01T00:00:00.000Z');
                    endDate = new Date();
                    endDate.setHours(23, 59, 59, 999);
                    $('#dtappointmentstart').val(null);
                    $('#dtappointmentend').val(null);
                } else {
                    $(".dtappointment").removeAttr('disabled');
                }

                removeCityInfoWindows();
                removeCountyInfoWindows();
                createCityCircles(cityList);
                createCountyCircles(countyList);
                clearBranchMarkers();
                hideBranchDetailsPanel();

                filterAllBranches();
                generateBranchMarkers();

                map.setZoom(map.getZoom());
                return;
            });


            $('.dtappointment').on("change", function (e) {
                let userStart = $('#dtappointmentstart').val();
                let userEnd = $('#dtappointmentend').val();
                if (!userStart) {
                    startDate = new Date('1980-01-01T00:00:00Z');
                } else {
                    let temp = new Date(`${userStart}T00:00:00`);
                    startDate = isNaN(temp) ? new Date('1980-01-01T00:00:00Z') : temp;
                }

                if (!userEnd) {
                    let now = new Date();
                    now.setHours(23, 59, 59, 999);
                    endDate = now;
                } else {
                    let tempEnd = new Date(`${userEnd}T23:59:59`);
                    if (isNaN(tempEnd)) {
                        let now = new Date();
                        now.setHours(23, 59, 59, 999);
                        endDate = now;
                    } else {
                        endDate = tempEnd;
                    }
                }

                if (startDate > endDate && !isNaN(startDate) && !isNaN(endDate)) {
                    alert(`Start date cannot be greater than end date`);
                    $('#dtappointmentend').val('');
                    let now = new Date();
                    now.setHours(23, 59, 59, 999);
                    endDate = now;
                    return;
                }

                // Burada istersen getFilteredBranches gibi 
                // tekrar filtreleme fonksiyonunu çağırabilirsin
                // getFilteredBranches(...);
            });


            $('#dtappointmentstart').on("change", function (e) {
                filterAllBranches();
                removeCityInfoWindows();
                removeCountyInfoWindows();
                createCityCircles(cityList);
                createCountyCircles(countyList);
                clearBranchMarkers();
                hideBranchDetailsPanel();
                map.setZoom(map.getZoom());
                return;
            });

            $('#dtappointmentend').on("change", function (e) {
                filterAllBranches();
                removeCityInfoWindows();
                removeCountyInfoWindows();
                createCityCircles(cityList);
                createCountyCircles(countyList);
                clearBranchMarkers();
                hideBranchDetailsPanel();
                map.setZoom(map.getZoom());
                return;
            });

            $(document).on('click', '#addColorSetting', function () {
                const newIndex = $('#colorSettingsContainer').children().length;
                $('#colorSettingsContainer').append(GMaps.createColorSettingElement({ min: 0, maks: 0, colorcode: '#000000' }, newIndex));
            });

            $(document).on('click', '.remove-color-setting', function () {
                const settingId = $(this).closest('.color-setting-item').find('.colorsettingid').val();
                console.log('Kaldırılan color Setting ID:', settingId);
                $(this).closest('.color-setting-item').remove();
            });

            $(document).on('click', '#saveSettings', function () {
                googleSettings[0].id = $('#settingsid').val();
                googleSettings[0].cityradiussize = $('#cityRadiusSizeNumber').val();
                googleSettings[0].countyradiussize = $('#countyRadiusSizeNumber').val();
                googleSettings[0].defaultcirclecolorcode = $('#defaultcirclecolorcode').val();
                googleSettings[0].markericoncode = $('#markerIconSelect').val();
                googleSettings[0].colorsettings = [];
                $('#colorSettingsContainer .color-setting-item').each(function () {
                    const id = $(this).find('.colorsettingid').val();
                    const min = $(this).find('.min-input').val();
                    const maks = $(this).find('.max-input').val();
                    const text = min + " - " + maks;
                    const colorcode = $(this).find('.color-input').val();
                    googleSettings[0].colorsettings.push({ id, text, min, maks, colorcode });
                });
                
                $('#GoogleSettingsModal').modal('hide');
                removeCityInfoWindows();
                removeCountyInfoWindows();
                createCityCircles(cityList);
                createCountyCircles(countyList);
                clearBranchMarkers();
                hideBranchDetailsPanel();
                map.setZoom(map.getZoom());
            });
        },
        ClosebranchDetailsDiv: function (e) {
            document.getElementById("branchDetailsContentElement-container").style.display = 'none';
        },
        branchInfo: function (e) {
            window.open('branchdetail.html?branch_id=' + $(e).data("id"), '_blank');
        },
        openAppointmentPanel: function (e) {
            // Parametrelerden ID ve adı al
            var branchId = $(e).data("id");
            var branchName = $(e).data("name");

            // ID ve adı paneldeki ilgili alanlara yazdır
            $('#appointmentId').val(branchId);  // ID'yi input alanına ekle
            $('#appointmentTitle').val(branchName);  // Adı input alanına ekle

            $('#appointmentPanel').show();
            $('#mainContent').addClass('openPanel');
        },
        closeAppointmentPanel: function (e) {
            $('#appointmentPanel').hide();
            $('#mainContent').removeClass('openPanel');
        },
        saveAppointment: function (e) {
            // Burada randevu kaydetme işlemleri yapılır
            alert('Appointment saved successfully!');
            this.closeAppointmentPanel(); // İşlem sonrası paneli kapat
        },
        DetailAppointment: function (e) {
            // Tıklanan butondan ID'yi alıyoruz
            var appointmentId = $(e).data("id");
            // Kullanıcıyı appointment.html sayfasına yönlendiriyoruz, ID'yi query string olarak ekliyoruz
            window.open('appointment.html?id=' + appointmentId, '_blank');
        },
        CreateRoute: function (e) {
            var destination = $(e).data("destination");
            var url = "https://www.google.com/maps/dir/?api=1&destination=" + destination + "&travelmode=driving";
            window.open(url, '_blank');
        },
        ToggleFilterPanel: function () {
            const filterPanel = document.getElementById('filterContainer');
            if (!filterPanel.classList.contains('open')) {
                filterPanel.classList.add('open');
            } else {
                filterPanel.classList.remove('open');
            }
        },
        GoogleSettingsRedirect: function () {
            // Modal açılmadan önce mevcut googleSettings verilerini modal'a yükle
            $('#defaultcirclecolorcode').val(googleSettings[0].defaultcirclecolorcode);

            // Marker ikon seçeneklerini doldur
            const markerIconSelect = $('#markerIconSelect');
            markerIconSelect.empty();
            // Örnek olarak 1, 2, 3 değerleri kullanılıyor; senin marker ikonlarına göre düzenleyebilirsin
            for (let i = 1; i <= 5; i++) {
                markerIconSelect.append($('<option>', {
                    value: i,
                    text: `Marker Icon ${i}`
                }));
            }
            markerIconSelect.val(googleSettings[0].markericoncode);

            // Color Settings kısmını doldur
            const colorSettingsContainer = $('#colorSettingsContainer');
            colorSettingsContainer.empty();
            googleSettings[0].colorsettings.forEach((setting, index) => {
                colorSettingsContainer.append(this.createColorSettingElement(setting, index));
            });

            // Modal'ı aç
            $('#GoogleSettingsModal').modal('show');
        },
        createColorSettingElement: function (setting, index) {
            return `
        <div class="color-setting-item mb-2" data-index="${index}">
            <div class="row">
                <div class="col-4">
                    <input type="number" class="form-control min-input" value="${setting.min}" placeholder="Min">
                </div>
                <div class="col-4">
                    <input type="number" class="form-control max-input" value="${setting.maks}" placeholder="Max">
                </div>
                <div class="col-3">
                    <input type="color" class="form-control color-input" value="${setting.colorcode}">
                </div>
                <div class="col-1">
                    <button type="button" class="btn btn-danger remove-color-setting">X</button>
                </div>
            </div>
        </div>
        `;
        }
    }

    return GMaps;
})(window)
