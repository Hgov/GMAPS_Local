'use strict';
var Google = Google || {};
const gmapsApiKey = 'AIzaSyA-zujqGhYm-F7Im4zNm4WUdQ8M-SjJ9UI';
const appointmentStatus = {
    visited: 0,
    unvisited: 1,
    allvisit: 2
};
let filterDivShowHide = true;


Google.MapObject = (function () {
    var GMaps = {
        initMap: function (users = [], cities = [], counties = [], accounts = [], appointments = [], settingsGoogle = [], systemuserSettings = [], markerIcon = {}) {
            /**Global Variables */

            let infowindowCities = [];
            let infowindowCounties = [];
            let circleCities = [];
            let circleCounties = [];
            let markerAccounts = [];
            let cityFilter = [];
            let countyFilter = [];
            let userFilter = [];
            let accountFilter = [];
            let appointmentFilter = [];

            var appointmentStatusInput = null;
            let startDate = new Date('1980-01-01T00:00:00.000Z');
            let endDate = new Date();
            let geocoder;
            let responseDiv;
            let response;

            let latLng = { lat: 0, lng: 0 };

            /**Global Variables End */

            /** constructure */
            displayMapHide();
            let map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: latLng.lat, lng: latLng.lng },//33.93911,67.70995
                zoom: 6.5,
                panControl: false,
                mapTypeControl: true,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                rotateControl: false,
                gestureHandling: "greedy",
                zoomControl: true,
            });
            const versionInfo = document.getElementById("version-info");
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(versionInfo);
            /**constructure end */

            /* installation Start*/

            /**
 * Creates a new Map Label
 * @constructor
 * @extends google.maps.OverlayView
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 */
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


            /** @inheritDoc */
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

            /**
             * Draws the label to the canvas 2d context.
             * @private
             */
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
                    // Bring actual text top in line with desired latitude.
                    // Cheaper than calculating height of text.
                    style.marginTop = '-0.8em';
                }
            };

            /**
             * @inheritDoc
             */
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

            /**
             * Gets the appropriate margin-left for the canvas.
             * @private
             * @param {number} textWidth  the width of the text, in pixels.
             * @return {number} the margin-left, in pixels.
             */
            MapLabel.prototype.getMarginLeft_ = function (textWidth) {
                switch (this.get('align')) {
                    case 'left':
                        return 0;
                    case 'right':
                        return -textWidth;
                }
                return textWidth / -2;
            };

            /**
             * @inheritDoc
             */
            MapLabel.prototype.draw = function () {
                var projection = this.getProjection();

                if (!projection) {
                    // The map projection is not ready yet so do nothing
                    return;
                }

                if (!this.canvas_) {
                    // onAdd has not been called yet.
                    return;
                }

                var latLng = /** @type {google.maps.LatLng} */ (this.get('position'));
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

            /**
             * Get the visibility of the label.
             * @private
             * @return {string} blank string if visible, 'hidden' if invisible.
             */
            MapLabel.prototype.getVisible_ = function () {
                var minZoom = /** @type number */(this.get('minZoom'));
                var maxZoom = /** @type number */(this.get('maxZoom'));

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

            /**
             * @inheritDoc
             */
            MapLabel.prototype.onRemove = function () {
                var canvas = this.canvas_;
                if (canvas && canvas.parentNode) {
                    canvas.parentNode.removeChild(canvas);
                }
            };
            MapLabel.prototype['onRemove'] = MapLabel.prototype.onRemove;

            Promise.all([CreateCircleCities(cities), CreateResponseDiv()]).then(values => {
                setTimeout(() => {
                    if (systemuserSettings[0].country.length != 0) {
                        var validationLat = systemuserSettings[0].country[0].center.lat;
                        var validationLng = systemuserSettings[0].country[0].center.lng;
                        if (validationLat != null && validationLng != null) {
                            map.setCenter(systemuserSettings[0].country[0].center);
                            map.setZoom(6.5);
                        } else {
                            map.setZoom(2);
                        }
                    } else {
                        map.setZoom(3);
                        map.setCenter(latLng);
                    }

                    displayMapShow();
                }, 1000);
            }).finally(() => {
                InfoWindowOpenCities();
            });
            /* installation End*/

            /* Methods Start*/

            map.addListener("click", (e) => {
                ResponseDivHide();
            });          

            map.addListener('zoom_changed', function () {
                let zoom = parseInt(map.getZoom());
                if (zoom <= 9) {
                    if (circleCities.length == 0) {
                        CreateCircleCities(cities);
                    }
                    RemoveCirclesCounties(circleCounties);
                    RemoveInfoWindowsCounties();
                    RemoveMarkersAccount();
                    ResponseDivHide();
                } else {
                    RemoveCirclesCities(circleCities);
                }
                if (zoom >= 10 && zoom <= 12) {
                    RemoveCirclesCities(circleCities);
                    RemoveInfoWindowsCities();
                    if (circleCounties.length == 0) {
                        CreateCircleCounties(counties);
                    }

                }
                if (zoom >= 13) {
                    RemoveCirclesCounties(circleCounties);
                    RemoveInfoWindowsCounties();
                    if (markerAccounts.length == 0) {
                        FilterAccountsByCityId();
                        FilterAccountsByCountyId();
                        FilterAccountsByUserIdWithCityId();
                        FilterAccountsByAppointmentStatus();
                        CreateMarkerAccounts();
                    }
                } else {
                    RemoveMarkersAccount();
                }

            });

            function displayMapShow() {
                document.getElementById('map').style.opacity = 1;
            }

            function displayMapHide() {
                document.getElementById('map').style.opacity = 0;
            }

            function ResponseDivShow() {
                responseDiv.style.display = "block";
            }

            function ResponseDivHide() {
                responseDiv.style.display = "none";
            }

            function CreateResponseDiv() {
                response = document.createElement("pre");
                response.id = "response";
                response.innerText = "";
                responseDiv = document.createElement("div");
                responseDiv.id = "response-container";
                responseDiv.appendChild(response);
                map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(responseDiv);
            }

            function MarkerSettings(id, title, appointment, user_fullname, phone, position, map) {
                const icon = {
                    url: markerIcon[settingsGoogle[0].markericoncode],
                };
                let markerSettings = {};
                //markerSettings.animation: google.maps.Animation.DROP,
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

            function CircleSettings(filteredCount, position, radiusEditable) {
                var radius = 20000;
                if (radiusEditable) {
                    radius = parseInt(filteredCount).toString().length;
                    if (radius == 1) {
                        radius = radius * 3000;
                    }
                    if (radius == 2) {
                        radius = radius * 1250;
                    }
                    if (radius == 3) {
                        radius = radius * 1000;
                    }
                    if (radius == 4) {
                        radius = radius * 900;
                    }
                }
                let fillColor = settingsGoogle[0].defaultcirclecolorcode;
                settingsGoogle[0].colorsettings.forEach(element => {
                    if (filteredCount >= element.min && filteredCount <= element.maks) {
                        fillColor = element.colorcode;
                    }
                });

                let circlesettings = {};
                // colors
                circlesettings.strokeColor = '#000';
                circlesettings.strokeOpacity = .2;
                circlesettings.strokeWeight = 3;
                circlesettings.fillColor = fillColor;
                circlesettings.fillOpacity = 0.7;
                // position
                circlesettings.map = map;
                circlesettings.center = position;
                circlesettings.radius = radius;
                // settings
                circlesettings.draggable = false;
                circlesettings.editable = false;
                circlesettings.clickable = true;

                return circlesettings;
            }

            function CreateCircleCities(cities) {
                var citiesLoading = () => {
                    RemoveCirclesCities(circleCities);
                    cities = FilterCities();
                    var counter = 0;
                    var mapLabel;
                    cities.forEach(function (value, i) {
                        var accountsCountSingle = FilteredCountCityAccounts(value.id);
                        if (accountsCountSingle == 0)
                            return;
                        circleCities.push(new google.maps.Circle(CircleSettings(accountsCountSingle, value.center, false)));

                        mapLabel = new MapLabel({
                            text: accountsCountSingle,
                            position: new google.maps.LatLng(value.center),
                            map: map,
                            fontSize: 20,
                            align: 'center',
                            zIndex: 0
                        });
                        mapLabel.set('position', new google.maps.LatLng(value.center));
                        circleCities[counter].bindTo('map', mapLabel);
                        circleCities[counter].bindTo('position', mapLabel);
                        circleCities[counter].setDraggable(true);

                        // if (infowindowCities.length != cities.length) {
                        //     infowindowCities.push(new google.maps.InfoWindow({
                        //         content: '<strong style="margin-right:10px;margin-top:15px;font-size:20px">' + accountsCountSingle + '</strong>'
                        //     }));
                        //     infowindowCities[counter].setPosition(circleCities[counter].center);

                        //     google.maps.event.addListener(infowindowCities[counter], 'domready', function () {
                        //         $('.gm-style-iw-d').attr('style', 'overflow: hidden;white-space: nowrap;');
                        //         $(".gm-style-iw-tc").css("display", "none");
                        //     });
                        // }

                        circleCities[counter].addListener('click', function (mapsMouseEvent) {
                            var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                            map.setCenter(position);
                            map.setZoom(10);

                        });
                        counter++;
                    });



                }
                return Promise.resolve(citiesLoading()).finally(() => {
                        InfoWindowOpenCities();
                });
            }

            function CreateCircleCounties(counties) {

                var countiesLoading = () => {
                    RemoveCirclesCounties(circleCounties);
                    counties = FilterCounties();
                    let counter = 0;
                    var mapLabelC;
                    counties.forEach(function (value, i) {
                        var accountsCountSingle = FilteredCountCountiesAccounts(value.id);
                        if (accountsCountSingle == 0)
                            return;
                        circleCounties.push(new google.maps.Circle(CircleSettings(accountsCountSingle, value.center, true)));
                        circleCounties[counter].addListener('click', function (mapsMouseEvent) {
                            var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                            map.setCenter(position);
                            map.setZoom(13);
                        });
                        mapLabelC = new MapLabel({
                            text: accountsCountSingle,
                            position: new google.maps.LatLng(value.center),
                            map: map,
                            fontSize: 20,
                            align: 'center',
                            zIndex: 0
                        });
                        mapLabelC.set('position', new google.maps.LatLng(value.center));
                        circleCounties[counter].bindTo('map', mapLabelC);
                        circleCounties[counter].bindTo('position', mapLabelC);
                        circleCounties[counter].setDraggable(true);
                        // if (infowindowCounties.length != counties.length) {
                        //     infowindowCounties.push(new google.maps.InfoWindow({
                        //         content: '<strong style="margin-right:10px;margin-top:15px;font-size:20px">' + accountsCountSingle + '</strong>'
                        //     }));
                        //     infowindowCounties[counter].setPosition(circleCounties[counter].center);
                        // }
                        // google.maps.event.addListener(infowindowCounties[counter], 'domready', function () {
                        //     $('.gm-style-iw-d').attr('style', 'overflow: hidden;white-space: nowrap;');
                        //     $(".gm-style-iw-tc").css("display", "none");
                        // });
                        counter++;
                    });
                }
                return Promise.resolve(countiesLoading()).finally(() => {
                        InfoWindowOpenCounties();
                });
            }

            function CreateMarkerAccounts() {
                RemoveMarkersAccount();
                ResponseDivHide();
                for (let i = 0; i < accountFilter.length; i++) {
                    var userFullName = FindUserById(accountFilter[i].user_id).text;
                    var appointment = FindAppointmentByAccountId(accountFilter[i].id);
                    var marker = new google.maps.Marker(MarkerSettings(accountFilter[i].id, accountFilter[i].name, appointment, userFullName, accountFilter[i].phone, accountFilter[i].position, map));
                    markerAccounts.push(marker);

                    markerAccounts[i].addListener('click', function (mapsMouseEvent) {
                        var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                        map.setCenter(position);
                        map.setZoom(16);

                        RemoveMarkersAccount();
                        ResponseDivHide();
                        CreateMarkerAccounts();
                        Geocode({ location: position }, markerAccounts[i]);
                    });
                }


            }

            function RemoveMarkersAccount() {
                SetMapOnAllMarkersCity(null);
                markerAccounts = [];
            }

            function RemoveCirclesCities(circleCities) {
                circleCities.forEach(element => {
                    element.setMap(null);
                });
                circleCities.splice(0, circleCities.length);
            }

            function RemoveCirclesCounties(circleCounties) {
                circleCounties.forEach(element => {
                    element.setMap(null);
                });
                circleCounties.splice(0, circleCounties.length);
            }

            function RemoveInfoWindowsCities() {
                infowindowCities.forEach(element => {
                    element.setMap(null);
                });
                infowindowCities.splice(0, infowindowCities.length);
            }

            function RemoveInfoWindowsCounties() {
                infowindowCounties.forEach(element => {
                    element.setMap(null);
                });
                infowindowCounties.splice(0, infowindowCounties.length);
            }

            function HideInfoWindowsCities() {
                infowindowCities.forEach(element => {
                    element.setMap(null);
                });
            }

            function HideInfoWindowsCounties() {
                infowindowCounties.forEach(element => {
                    element.setMap(null);
                });
            }

            function FindUserById(id) {
                let desiredUser = {};
                Object.keys(users).forEach((index) => {
                    if (users[index].id == id.toString())
                        desiredUser = users[index];

                });
                return desiredUser;
            }

            function FindAppointmentByAccountId(account_id) {
                let desiredAppointment = [];
                Object.keys(appointments).forEach((index) => {
                    if (appointments[index].account_id == account_id.toString())
                        desiredAppointment.push(appointments[index]);

                });
                return desiredAppointment;
            }

            function FilterCities() {
                RemoveMarkersAccount();
                if (cityFilter.length == 0)
                    return cities;
                else
                    return cityFilter;
            }

            function FilterCounties() {
                RemoveMarkersAccount();
                if (countyFilter.length == 0)
                    return counties;
                else
                    return countyFilter;
            }

            function FilterAccountsByCityId() {
                accountFilter = [];
                var citiesAssigment = FilterCities();
                accounts.map(b => {
                    citiesAssigment.forEach(c => {
                        if (c.id == b.city_id) {
                            return accountFilter.push(b);
                        }
                    });
                });
            }

            function FilterAccountsByCountyId() {
                var tempAccountFilter = [];
                var countiesAssigment = FilterCounties();
                accountFilter.map(cf => {
                    countiesAssigment.forEach(ra => {
                        if (ra.id == cf.county_id) {
                            return tempAccountFilter.push(cf);
                        }
                    });
                });
                accountFilter = tempAccountFilter;
            }

            function FilterAccountsByUserIdWithCityId() {
                RemoveMarkersAccount();
                let desiredAccounts = [];
                if (userFilter.length == 0)
                    return accountFilter;

                accountFilter.forEach(com => {
                    userFilter.forEach(use => {
                        if (cityFilter.length == 0 && com.user_id == use.id) {
                            desiredAccounts.push(com);
                        } else {
                            cityFilter.forEach(cf => {
                                if (com.user_id == use.id && com.city_id == cf.id) {
                                    desiredAccounts.push(com);
                                }
                            });
                        }


                    });
                });
                accountFilter = desiredAccounts;
            }

            function FilteredCountCountiesAccounts(countyid) {
                if (userFilter.length == 0)
                    userFilter = users;
                if (accountFilter.length == 0)
                    accountFilter = accounts;
                FilterAccountsByAppointmentStatus();
                if (appointmentFilter.length != 0)
                    accountFilter = appointmentFilter;

                var ctr = 0;
                var userFind;
                accountFilter.filter(cf => cf.county_id == countyid).forEach(cf => {
                    userFind = userFilter.find(uf => uf.id == cf.user_id);
                    if (userFind != null)
                        ctr++;
                });
                return ctr;
            }

            function FilteredCountCityAccounts(cityid) {
                if (userFilter.length == 0)
                    userFilter = users;
                if (accountFilter.length == 0)
                    accountFilter = accounts;
                FilterAccountsByAppointmentStatus();
                if (appointmentFilter.length != 0)
                    accountFilter = appointmentFilter;

                var ctr = 0;
                var userFind;
                accountFilter.filter(cf => cf.city_id == cityid).forEach(cf => {
                    userFind = userFilter.find(uf => uf.id == cf.user_id);
                    if (userFind != null)
                        ctr++;
                });

                return ctr;
            }

            function FilterAccountsByAppointmentStatus() {
                appointmentFilter = [];
                if (appointmentStatus.visited == appointmentStatusInput) {
                    accountFilter.forEach(cf => {
                        var appointmentFind = appointments.find(v => v.account_id === cf.id && (new Date(v.meeting_date_start) >= startDate && new Date(v.meeting_date_end) <= endDate));
                        if (appointmentFind != null) {
                            appointmentFilter.push(cf);
                        }
                    });
                    accountFilter = appointmentFilter;
                    return appointmentFilter;
                }
                if (appointmentStatus.unvisited == appointmentStatusInput) {
                    accountFilter.forEach(cf => {
                        var appointmentFind = appointments.find(v => v.account_id === cf.id && (new Date(v.meeting_date_start) >= startDate && new Date(v.meeting_date_end) <= endDate));
                        if (appointmentFind == null) {
                            appointmentFilter.push(cf);
                        }
                    });
                    accountFilter = appointmentFilter;
                    return appointmentFilter;
                }
                return appointmentFilter = accounts;
            }

            function Geocode(request, markerAccounts) {
                geocoder = new google.maps.Geocoder();
                geocoder
                    .geocode(request)
                    .then((result) => {
                        const { results } = result;
                        map.setCenter(results[0].geometry.location);
                        // marker.setPosition(results[0].geometry.location);
                        // marker.setMap(map);
                        //$('#destination-input').val(results[0].formatted_address);
                        ResponseDivShow();
                        var appointmentTbody = '';
                        var appointmentThead = '';
                        var appointmentRow = '';

                        markerAccounts.appointment.forEach(element => {
                            appointmentRow += '<tr>' +
                                '<td>' + element.number + '</td>' +
                                '<td>' + element.meeting_date_start + '</td>' +
                                '<td>' + element.meeting_date_end + '</td>' +
                                '<td><button type="button" class="btn btn-primary" id="btnDetailAppointment" data-id="' + element.id + '" onClick="Google.MapObject.btnDetailAppointment(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">' +
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

                        var html = '<div class="container-fluid">' +
                            '<center><span><button type="button" onclick="Google.MapObject.btnCloseResponseDiv(this)" class="btn btn-secondary" style="width:60px">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">' +
                            '<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>' +
                            '</svg>' +
                            '</button><span></center>' +
                            '<div class="row">' +

                            '<div class="card col-md-9" style="margin:5px;max-width:100%">' +
                            '<div class="card-body">' +
                            '<p class="card-text">' +
                            '<div class="row"><div class="col-12 text-wrap" style="font-size:16px;"><strong>Account_id:</strong> ' + markerAccounts.id + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap" style="font-size:16px;"><strong>Title:</strong> ' + markerAccounts.title + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap" style="font-size:16px;"><strong>Address:</strong> ' + results[0].formatted_address + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap" style="font-size:16px;"><strong>Phone:</strong> ' + markerAccounts.phone + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap" style="font-size:16px;"><strong>Sales Representative:</strong> ' + markerAccounts.user_fullname + '</div></div>' +
                            '</p>' +
                            '</div>' +
                            '</div>' +

                            '<div class="card col-md-2 border-0" style="margin:5px;">' +
                            '<div class="card-body">' +
                            '<div class="row"><input type="button" id="btnAccountInfo" style="margin:2px;" class="btn btn-primary card-link col-md-12 btn-sm" data-id="' + markerAccounts.id + '" onClick="Google.MapObject.btnAccountInfo(this)" value="Account Info"></div>' +
                            '<div class="row"><input type="button" id="btnAddAppointment" style="margin:2px;" class="btn btn-primary card-link col-md-12 btn-sm" data-id="' + markerAccounts.id + '" data-name="' + markerAccounts.title + '" onClick="Google.MapObject.btnAddAppointment(this)" value="Add Appointment"></div>' +
                            '<div class="row"><input type="button" id="btnCreateRoute" style="margin:2px;" class="btn btn-primary card-link col-md-12 btn-sm" data-destination="' + results[0].formatted_address + '" onClick="Google.MapObject.btnCreateRoute(this)" value="Create Route"></div>' +
                            '<div class="row"><input type="button" id="btnAppointmentDetails" style="margin:2px;" class="btn btn-primary card-link col-md-12 btn-sm"  data-bs-toggle="modal" data-bs-target="#AppointmentsModal" value="Appointment Details"></div>' +
                            '</div>' +
                            '</div>' +

                            '<div/>';

                        response.innerHTML = html;
                        if (markerAccounts.appointment.length != 0)
                            document.getElementById("btnAppointmentDetails").style.display = 'block';
                        else
                            document.getElementById("btnAppointmentDetails").style.display = 'none';
                        return results;
                    })
                    .catch((e) => {
                        alert("Geocode was not successful for the following reason: " + e);
                    });
            }

            function InfoWindowOpenCities() {
                let zoom = parseInt(map.getZoom());
                var iw = () => {
                    if (zoom <= 9) {
                        map.gestureHandling = "none";
                        infowindowCities.forEach(element => {
                            element.open(map);
                            map.setCenter(null);
                        });
                    }
                }
                return Promise.resolve(iw()).finally(() => {

                    if (zoom <= 9) {
                        map.gestureHandling = "greedy";
                    }
                });
            }

            function InfoWindowOpenCounties() {
                let zoom = parseInt(map.getZoom());

                var iw = () => {
                    if (zoom >= 10 && zoom <= 12) {
                        map.gestureHandling = "none";
                        infowindowCounties.forEach(element => {
                            element.open(map);
                            map.setCenter(null);
                        });
                    }
                }
                return Promise.resolve(iw()).finally(() => {
                    let zoom = parseInt(map.getZoom());
                    if (zoom >= 10 && zoom <= 12) {
                        map.gestureHandling = "greedy";
                    }
                });
            }

            function SetMapOnAllMarkersCity(map) {
                for (var i = 0; i < markerAccounts.length; i++) {
                    markerAccounts[i].setMap(map);
                }
            }

            function SetSelectCountyDataByCityId(cityFilter) {
                countyFilter = [];
                cityFilter.forEach(cf => {
                    counties.forEach(r => {
                        if (cf.id == r.city_id) {
                            countyFilter.push(r);
                        }
                    });
                });
                $('#js-filter-multiple-county').empty();
                $('#js-filter-multiple-county').select2({
                    placeholder: "Select a county",
                    allowClear: true,
                    data: countyFilter
                });
            }

            $('#js-filter-multiple-city').select2({
                placeholder: "Select a city",
                allowClear: true,
                data: cities
            });

            $('#js-filter-multiple-county').select2({
                placeholder: "Select a county",
            });

            $('#js-filter-multiple-user').select2({
                placeholder: "Select a user",
                allowClear: true,
                data: users
            });

            $('#js-filter-single-appointment').select2({
                placeholder: "Select a appointment status",
                allowClear: true
            });

            $("#js-filter-multiple-city").on("select2:select select2:unselect", function (e) {
                cityFilter = [];
                cityFilter = $('#js-filter-multiple-city').select2('data');
                SetSelectCountyDataByCityId(cityFilter);
                FilterAccountsByAppointmentStatus();
                RemoveInfoWindowsCities();
                RemoveInfoWindowsCounties();
                CreateCircleCities(cities);
                CreateCircleCounties(counties);
                RemoveMarkersAccount();
                ResponseDivHide();
                InfoWindowOpenCities();
                InfoWindowOpenCounties();
                map.setZoom(map.getZoom());
            })

            $("#js-filter-multiple-county").on("select2:select select2:unselect", function (e) {
                countyFilter = [];
                countyFilter = $('#js-filter-multiple-county').select2('data');
                FilterAccountsByAppointmentStatus();
                RemoveInfoWindowsCities();
                RemoveInfoWindowsCounties();
                CreateCircleCities(cities);
                CreateCircleCounties(counties);
                RemoveMarkersAccount();
                ResponseDivHide();
                InfoWindowOpenCities();
                InfoWindowOpenCounties();
                map.setZoom(map.getZoom());
            })

            $("#js-filter-multiple-user").on("select2:select select2:unselect", function (e) {
                userFilter = [];
                userFilter = $('#js-filter-multiple-user').select2('data');
                FilterAccountsByAppointmentStatus();
                RemoveInfoWindowsCities();
                RemoveInfoWindowsCounties();
                CreateCircleCities(cities);
                CreateCircleCounties(counties);
                RemoveMarkersAccount();
                ResponseDivHide();
                InfoWindowOpenCities();
                InfoWindowOpenCounties();
                map.setZoom(map.getZoom());
            })

            $("#js-filter-single-appointment").on("select2:select ", function (e) {
                var data = e.params.data;
                appointmentStatusInput = data.id;
                if (appointmentStatus.allvisit == appointmentStatusInput) {
                    $(".dtappointment").attr("disabled", 'disabled');
                    startDate = new Date('1980-01-01T00:00:00.000Z');
                    endDate = new Date();
                    $('#dtappointmentstart').val(null);
                    $('#dtappointmentend').val(null);
                } else {
                    $(".dtappointment").removeAttr('disabled');
                }
                FilterAccountsByAppointmentStatus();
                RemoveInfoWindowsCities();
                RemoveInfoWindowsCounties();
                CreateCircleCities(cities);
                CreateCircleCounties(counties);
                RemoveMarkersAccount();
                ResponseDivHide();
                InfoWindowOpenCities();
                map.setZoom(map.getZoom());
                return;
            })

            $('.dtappointment').on("change", function (e) {
                startDate = new Date($('#dtappointmentstart').val());
                endDate = new Date($('#dtappointmentend').val());
                if (isNaN(startDate))
                    startDate = new Date('1980-01-01T00:00:00.000Z');
                if (isNaN(endDate)) {
                    endDate = new Date();
                }
                if (startDate > endDate && !isNaN(startDate) && !isNaN(endDate)) {
                    alert(`start date cannot be greater than end date `);
                    $('#dtappointmentend').val('')
                    return;
                }
                return;
            })

            $('#dtappointmentstart').on("change", function (e) {
                FilterAccountsByCityId();
                FilterAccountsByCountyId();
                FilterAccountsByUserIdWithCityId();
                FilterAccountsByAppointmentStatus();
                RemoveInfoWindowsCities();
                RemoveInfoWindowsCounties();
                CreateCircleCities(cities);
                CreateCircleCounties(counties);
                RemoveMarkersAccount();
                ResponseDivHide();
                InfoWindowOpenCities();
                map.setZoom(map.getZoom());
                return;
            })

            $('#dtappointmentend').on("change", function (e) {
                FilterAccountsByCityId();
                FilterAccountsByCountyId();
                FilterAccountsByUserIdWithCityId();
                FilterAccountsByAppointmentStatus();
                RemoveInfoWindowsCities();
                RemoveInfoWindowsCounties();
                CreateCircleCities(cities);
                CreateCircleCounties(counties);
                RemoveMarkersAccount();
                ResponseDivHide();
                InfoWindowOpenCities();
                map.setZoom(map.getZoom());
                return;
            })

        },

        btnCloseResponseDiv: function (e) {
            document.getElementById("response-container").style.display = 'none';
        },

        btnAccountInfo: function (e) {
            Rms.Xrm.OpenRecordForm("account", $(e).data("id"), null, true);
        },

        btnAddAppointment: function (e) {
            var parameters = {};
            parameters["uzm_accountid"] = $(e).data("id");
            parameters["uzm_accountidname"] = $(e).data("name");
            Rms.Xrm.OpenCreateForm("appointment", parameters, true);

        },

        btnDetailAppointment: function (e) {
            Rms.Xrm.OpenRecordForm("appointment", $(e).data("id"), null, true);
        },

        btnCreateRoute: function (e) {
            var destination = $(e).data("destination");
            var url = "https://www.google.com/maps/dir/?api=1&destination=" + destination + "&travelmode=driving";
            window.open(url, '_blank');
        },

        FilterShowHide: function () {
            this.FilterDivResponse();
            if (filterDivShowHide) {
                filterDivShowHide = false;
            } else {
                filterDivShowHide = true;
            }

        },

        GoogleSettingsRedirect: function () {
            console.log(Rms.Xrm.GetClientUrl());
            var url = Rms.Xrm.GetClientUrl() + "/main.aspx?pagetype=entitylist&etn=rms_googlesettings";
            Rms.Xrm.OpenUrl(url, 800, 600);
        },

        FilterDivResponse: function () {
            if (filterDivShowHide) {
                $('.filter-items').css("display", "block");
            } else {
                $('.filter-items').css("display", "none");
            }
        },

        /**address to latlng */
        AddressToLatLng: function (address) {
            var url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=' + address + '&inputtype=textquery&radius=10000&key=' + gmapsApiKey;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    //console.log(xhttp.responseText);
                    return xhttp.responseText;
                }
            };
            xhttp.open("GET", url, false);
            xhttp.send();
        }
    }

    return GMaps;
})(window)
