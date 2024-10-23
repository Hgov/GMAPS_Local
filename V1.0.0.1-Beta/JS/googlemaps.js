'use strict';
var Google = Google || {};
const gmapsApiKey = 'AIzaSyA-zujqGhYm-F7Im4zNm4WUdQ8M-SjJ9UI';
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
    let geocoder;
    let branchDetailsContainer;
    let branchDetailsContentElement;

    let latLng = { lat: 39.9334, lng: 32.8597 };
    let map = null;
    var GMaps = {
        initMap: function (_users = [], _cities = [], _counties = [], _branches = [], _appointments = [], _settingsGoogle = [], _systemuserSettings = [], _markerIcon = {}) {
            /**Global Variables */
            userList = _users;
            cityList = _cities;
            countyList = _counties;
            branchList = _branches;
            appointmentList = _appointments;
            googleSettings = _settingsGoogle;
            systemUserSettings = _systemuserSettings;
            markerIcons = _markerIcon;
            /**Global Variables End */

            /** constructure */
            //displayMapHide();

            Google.MapLoader.initMap(39.9334, 32.8597); // Harita yüklemesini başlatıyor

            // `map` ve `latLng` değişkenlerine erişim
            map = Google.MapLoader.getMap();
            latLng = Google.MapLoader.getLatLng();
            const { AdvancedMarkerElement } = google.maps.importLibrary("marker");
            /**constructure end */

            /* installation Start*/

            /**
            * MapLabel, harita üzerinde etiket (label) oluşturmak için kullanılan bir yapıcı fonksiyondur.
            * Optik seçenekleri (opt_options) kabul eder ve başlangıç değerlerini ayarlar.
            * 
            * @param {object} opt_options - Harita etiketi için başlangıç seçenekleri.
            */
            function MapLabel(opt_options) {
                this.set('fontFamily', 'sans-serif'); // Yazı tipi ailesi
                this.set('fontSize', 12); // Yazı tipi boyutu
                this.set('fontColor', '#000000'); // Yazı tipi rengi
                this.set('strokeWeight', 2); // Çizgi kalınlığı
                this.set('strokeColor', '#000000'); // Çizgi rengi
                this.set('align', 'center'); // Hizalama
                this.set('zIndex', 1); // Z-index değeri

                this.setValues(opt_options); // Geçilen seçenekleri ayarlar
            }

            // MapLabel sınıfını google.maps.OverlayView sınıfından türetir
            MapLabel.prototype = new google.maps.OverlayView;

            window['MapLabel'] = MapLabel;

            /**
             * Harita etiketi üzerinde yapılan değişikliklere göre yeniden çizim yapar.
             * @param {string} prop - Değişen özellik adı.
             */
            MapLabel.prototype.changed = function (prop) {
                switch (prop) {
                    case 'fontFamily':
                    case 'fontSize':
                    case 'fontColor':
                    case 'strokeWeight':
                    case 'strokeColor':
                    case 'align':
                    case 'text':
                        return this.drawCanvas_(); // Bu özellikler değiştiğinde canvas yeniden çizilir
                    case 'maxZoom':
                    case 'minZoom':
                    case 'position':
                        return this.draw(); // Bu özellikler değiştiğinde etiket yeniden çizilir
                }
            };

            /**
             * Canvas üzerinde harita etiketini çizer.
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
                        ctx.strokeText(text, strokeWeight, strokeWeight); // Çizgiyle metni çizer
                    }

                    ctx.fillText(text, strokeWeight, strokeWeight); // Metni doldurarak çizer

                    var textMeasure = ctx.measureText(text);
                    var textWidth = textMeasure.width + strokeWeight;
                    style.marginLeft = this.getMarginLeft_(textWidth) + 'px'; // Metni ortalar
                    style.marginTop = '-0.8em'; // Metni üst kenara hizalar
                }
            };

            /**
             * Harita etiketi eklendiğinde çalışır, canvas elementini oluşturur ve paneye ekler.
             */
            MapLabel.prototype.onAdd = function () {
                var canvas = this.canvas_ = document.createElement('canvas');
                var style = canvas.style;
                style.position = 'absolute';

                var ctx = canvas.getContext('2d');
                ctx.lineJoin = 'round';
                ctx.textBaseline = 'top';

                this.drawCanvas_(); // Etiketi canvas üzerinde çizer

                var panes = this.getPanes();
                if (panes) {
                    panes.mapPane.appendChild(canvas); // Canvas'ı harita katmanına ekler
                }
            };

            MapLabel.prototype['onAdd'] = MapLabel.prototype.onAdd;

            /**
             * Metnin hizalamasına göre sol marjin (margin) değerini döner.
             * 
             * @param {number} textWidth - Metnin genişliği.
             * @return {number} - Sol marjin değeri.
             */
            MapLabel.prototype.getMarginLeft_ = function (textWidth) {
                switch (this.get('align')) {
                    case 'left':
                        return 0;
                    case 'right':
                        return -textWidth;
                }
                return textWidth / -2; // Ortalanmışsa genişliğin yarısını negatif olarak döner
            };

            /**
             * Harita etiketi için yeniden çizim yapar.
             */
            MapLabel.prototype.draw = function () {
                var projection = this.getProjection();

                if (!projection) {
                    // Harita projeksiyonu hazır değilse hiçbir şey yapma
                    return;
                }

                if (!this.canvas_) {
                    // onAdd henüz çağrılmamışsa hiçbir şey yapma
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

                style['visibility'] = this.getVisible_(); // Görünürlüğü ayarlar
            };

            MapLabel.prototype['draw'] = MapLabel.prototype.draw;

            /**
             * Etiketin görünürlüğünü kontrol eder. Min ve max zoom seviyelerine göre görünürlüğü belirler.
             * 
             * @return {string} - Etiketin görünür olup olmadığını belirten değer ('hidden' veya '').
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
                    return 'hidden'; // Zoom seviyesi dışında kaldığında gizler
                }
                return ''; // Aksi halde görünür yapar
            };

            /**
             * Harita etiketi kaldırıldığında canvas elementini DOM'dan çıkarır.
             */
            MapLabel.prototype.onRemove = function () {
                var canvas = this.canvas_;
                if (canvas && canvas.parentNode) {
                    canvas.parentNode.removeChild(canvas);
                }
            };

            MapLabel.prototype['onRemove'] = MapLabel.prototype.onRemove;

            /**
             * Harita üzerindeki şehir çemberlerini ve şube detaylarını oluşturur.
             * 
             * @return {Promise} - Şehir çemberlerinin ve şube detaylarının oluşturulmasını bekler.
             */
            Promise.all([createCityCircles(cityList), createBranchDetailsContainer()]).then(values => {
                setTimeout(() => {
                    if (systemUserSettings[0].country.length != 0) {
                        var validationLat = systemUserSettings[0].country[0].center.lat;
                        var validationLng = systemUserSettings[0].country[0].center.lng;
                        if (validationLat != null && validationLng != null) {
                            map.setCenter(systemUserSettings[0].country[0].center); // Ülke merkezi belirli bir konuma ayarlanır
                            map.setZoom(6.5);
                        } else {
                            map.setZoom(2); // Geçerli bir konum yoksa varsayılan zoom seviyesi
                        }
                    } else {
                        map.setZoom(3);
                        map.setCenter(latLng); // Varsayılan konuma ayarlar
                    }
                }, 1000);
            }).finally(() => {
                openCityInfoWindows(); // Şehir bilgi pencerelerini açar
            });

            /* installation End*/

            /* Methods Start*/

            map.addListener("click", (e) => {
                hideBranchDetailsPanel();
            });

            map.addListener('zoom_changed', function () {
                let zoom = parseInt(map.getZoom());

                // Eğer filtrelenmiş şubeler varsa, onların marker'larını harita üzerinde tut.
                if (IsSelectedItemsBranches.length > 0) {
                    clearBranchMarkers();
                    // Eğer marker'lar henüz eklenmemişse, filtrelenmiş şube marker'larını ekle.
                    if (branchMarkers.length === 0) {
                        generateBranchMarkers();
                    }
                } else {
                    // Eğer filtrelenmiş bir şube yoksa, şehir ve ilçe bazlı işaretçileri yönet.
                    // Zoom seviyesi 9 ve altına indiğinde:
                    if (zoom <= 9) {
                        // Şehir daireleri eklenmemişse, ekle.
                        if (cityCircles.length === 0) {
                            createCityCircles(cityList);
                        }

                        // İlçe dairelerini ve ilçe info windows'larını kaldır.
                        removeCountyCircles(countyCircles);
                        removeCountyInfoWindows();

                        // Şube marker'larını kaldır.
                        clearBranchMarkers();

                        // Şube detay panelini gizle.
                        hideBranchDetailsPanel();
                    } else {
                        // Zoom seviyesi 9'u geçtiğinde, şehir dairelerini kaldır.
                        removeCityCircles(cityCircles);
                        removeCityInfoWindows();
                    }

                    // Zoom seviyesi 10 ile 12 arasındaysa:
                    if (zoom >= 10 && zoom <= 12) {
                        // İlçe daireleri eklenmemişse, ekle.
                        if (countyCircles.length === 0) {
                            createCountyCircles(countyList);
                        }

                        // Şehir dairelerini ve şehir info windows'larını kaldır.
                        removeCityCircles(cityCircles);
                        removeCityInfoWindows();
                    }

                    // Zoom seviyesi 13 ve üstüne çıktığında:
                    if (zoom >= 13) {
                        // İlçe daireleri ve info windows'ları kaldır.
                        removeCountyCircles(countyCircles);
                        removeCountyInfoWindows();

                        // Şube marker'ları eklenmemişse, şubeleri marker olarak ekle.
                        if (branchMarkers.length === 0) {
                            filterAllBranches(); // Şubeleri filtrele
                            generateBranchMarkers(); // Marker'ları oluştur
                        }
                    } else {
                        // Eğer zoom seviyesi 13'ten küçükse, şube marker'larını kaldır.
                        clearBranchMarkers();
                    }
                }
            });

            /**
            * Şube detaylarını gösteren div'i ekranda görünür hale getirir.
            */
            function displayBranchDetails() {
                branchDetailsContainer.style.display = "block"; // branchDetailsContainer'i görünür yapar
            }

            /**
             * Şube detaylarını gösteren div'i ekranda gizler.
             */
            function hideBranchDetailsPanel() {
                branchDetailsContainer.style.display = "none"; // branchDetailsContainer'i gizler
            }

            /**
             * Şube detaylarını gösterecek olan div'i ve içeriğini oluşturur.
             * 
             * 1. branchDetailsContentElement adında bir <pre> elementi oluşturur ve içerik alanı olarak ayarlar.
             * 2. branchDetailsContainer adında bir <div> elementi oluşturur ve içerik alanını içine ekler.
             * 3. Oluşturulan div'i harita kontrolü olarak haritanın alt orta kısmına ekler.
             */
            function createBranchDetailsContainer() {
                branchDetailsContentElement = document.createElement("pre"); // Şube detayları için <pre> elementi oluşturur
                branchDetailsContentElement.id = "branchDetailsContentElement"; // Elemente bir id atar
                branchDetailsContentElement.innerText = ""; // İçeriği başlangıçta boş bırakır

                branchDetailsContainer = document.createElement("div"); // Şube detayları için ana <div> elementi oluşturur
                branchDetailsContainer.id = "branchDetailsContentElement-container"; // Elemente bir id atar
                branchDetailsContainer.style.padding = "10px"; // İçerik ile kenarlar arasında boşluk ekler
                branchDetailsContainer.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Arka planı biraz opak yapar
                branchDetailsContainer.style.borderRadius = "10px"; // Köşeleri yuvarlar
                branchDetailsContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Gölge ekler

                branchDetailsContainer.appendChild(branchDetailsContentElement); // İçeriği ana div'e ekler

                map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(branchDetailsContainer); // Ana div'i haritanın sol alt köşesine yerleştirir
            }

            /**
             * Haritada gösterilecek çemberler (circles) için ayarları döner.
             * 
             * @param {number} filteredCount - Çember içinde gösterilecek şube sayısı.
             * @param {object} position - Çemberin merkez pozisyonu.
             * @param {boolean} radiusEditable - Çemberin yarıçapının düzenlenebilir olup olmadığı.
             * @return {object} - Çember ayarlarını içeren bir nesne.
             */
            function getCircleSettings(filteredCount, position, radiusEditable) {
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
                let fillColor = googleSettings[0].defaultcirclecolorcode;
                googleSettings[0].colorsettings.forEach(element => {
                    if (filteredCount >= element.min && filteredCount <= element.maks) {
                        fillColor = element.colorcode;
                    }
                });

                let circlesettings = {};
                circlesettings.strokeColor = '#000';
                circlesettings.strokeOpacity = .2;
                circlesettings.strokeWeight = 3;
                circlesettings.fillColor = fillColor;
                circlesettings.fillOpacity = 0.7;
                circlesettings.map = map;
                circlesettings.center = position;
                circlesettings.radius = radius;
                circlesettings.draggable = false;
                circlesettings.editable = false;
                circlesettings.clickable = true;

                return circlesettings;
            }

            /**
             * Haritada şehirleri temsil eden çemberleri (circles) oluşturur.
             * 
             * @param {Array} cityList - Şehir bilgilerini içeren dizi.
             * @return {Promise} - Şehir çemberlerinin oluşturulma işlemi tamamlandığında çözülen bir promise döner.
             */
            function createCityCircles(cityList) {
                var citiesLoading = () => {
                    removeCityCircles(cityCircles);
                    cityList = getFilteredCities();
                    var counter = 0;
                    var mapLabel;
                    cityList.forEach(function (value, i) {
                        var branchesCountSingle = countBranchesByCity(value.id);
                        if (branchesCountSingle == 0)
                            return;
                        cityCircles.push(new google.maps.Circle(getCircleSettings(branchesCountSingle, value.center, false)));

                        mapLabel = new MapLabel({
                            text: branchesCountSingle,
                            position: new google.maps.LatLng(value.center),
                            map: map,
                            fontSize: 20,
                            align: 'center',
                            zIndex: 0
                        });
                        mapLabel.set('position', new google.maps.LatLng(value.center));
                        cityCircles[counter].bindTo('map', mapLabel);
                        cityCircles[counter].bindTo('position', mapLabel);
                        cityCircles[counter].setDraggable(false);
                        cityCircles[counter].addListener('click', function (mapsMouseEvent) {
                            var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                            map.setCenter(position);
                            map.setZoom(10);
                        });
                        counter++;
                    });
                }
                return Promise.resolve(citiesLoading()).finally(() => {
                    openCityInfoWindows();
                });
            }

            /**
             * Haritada ilçeleri temsil eden çemberleri (circles) oluşturur.
             * 
             * @param {Array} countyList - İlçe bilgilerini içeren dizi.
             * @return {Promise} - İlçe çemberlerinin oluşturulma işlemi tamamlandığında çözülen bir promise döner.
             */
            function createCountyCircles(countyList) {
                var countiesLoading = () => {
                    removeCountyCircles(countyCircles);
                    countyList = getFilteredCounties();
                    let counter = 0;
                    var mapLabelC;
                    countyList.forEach(function (value, i) {
                        var branchesCountSingle = countBranchesByCounty(value.id);
                        if (branchesCountSingle == 0)
                            return;
                        countyCircles.push(new google.maps.Circle(getCircleSettings(branchesCountSingle, value.center, true)));
                        countyCircles[counter].addListener('click', function (mapsMouseEvent) {
                            var position = new google.maps.LatLng(mapsMouseEvent.latLng);
                            map.setCenter(position);
                            map.setZoom(13);
                        });
                        mapLabelC = new MapLabel({
                            text: branchesCountSingle,
                            position: new google.maps.LatLng(value.center),
                            map: map,
                            fontSize: 20,
                            align: 'center',
                            zIndex: 0
                        });
                        mapLabelC.set('position', new google.maps.LatLng(value.center));
                        countyCircles[counter].bindTo('map', mapLabelC);
                        countyCircles[counter].bindTo('position', mapLabelC);
                        countyCircles[counter].setDraggable(false);
                        counter++;
                    });
                }
                return Promise.resolve(countiesLoading()).finally(() => {
                    openCountyInfoWindows();
                });
            }

            // /**
            // * AdvancedMarkerElement için ayarları döner.
            // * 
            // * @param {string} id - Marker'ın ID'si.
            // * @param {string} title - Marker'ın başlığı.
            // * @param {Array} appointment - Marker ile ilgili randevu bilgileri.
            // * @param {string} user_fullname - Marker ile ilişkili kullanıcının tam adı.
            // * @param {string} phone - Marker ile ilişkili telefon numarası.
            // * @param {object} position - Marker'ın harita üzerindeki pozisyonu.
            // * @param {object} map - Marker'ın ekleneceği harita nesnesi.
            // * @return {object} - AdvancedMarkerElement ayarlarını içeren bir nesne.
            // */
            // function getAdvancedMarkerSettings(id, title, appointment, user_fullname, phone, position, map) {
            //     // HTML içeriğini oluşturun
            //     const content = document.createElement('div');
            //     content.className = 'advanced-marker';
            //     content.innerHTML = `
            //                         <div><strong>${title}</strong></div>
            //                         <div>${user_fullname}</div>
            //                         <div>${phone}</div>
            //                     `;

            //     let markerSettings = {
            //         position: position,
            //         map: map,
            //         content: content, // AdvancedMarkerElement için HTML içeriği
            //         title: title
            //     };

            //     return markerSettings;
            // }

            // /**
            // * Haritada şubeleri temsil eden AdvancedMarkerElement işaretleyicilerini oluşturur.
            // */
            // function generateBranchMarkers() {
            //     clearBranchMarkers();
            //     hideBranchDetailsPanel();

            //     for (let i = 0; i < filteredBranches.length; i++) {
            //         var userFullName = findUserById(filteredBranches[i].user_id).text;
            //         var appointment = findAppointmentsByBranchId(filteredBranches[i].id);

            //         // AdvancedMarkerElement oluşturma
            //         const marker = new AdvancedMarkerElement(
            //             getAdvancedMarkerSettings(filteredBranches[i].id, filteredBranches[i].name, appointment, userFullName, filteredBranches[i].phone, filteredBranches[i].position, map)
            //         );

            //         branchMarkers.push(marker);

            //         // Marker tıklama olay dinleyicisi ekleme
            //         marker.addEventListener('click', function (mapsMouseEvent) {
            //             var position = mapsMouseEvent.latLng;
            //             map.setCenter(position);
            //             map.setZoom(16);

            //             clearBranchMarkers();
            //             hideBranchDetailsPanel();
            //             generateBranchMarkers();
            //             geocodeAndDisplayBranchDetails({ location: position }, branchMarkers[i]);
            //         });
            //     }
            // }

            /**
            * Marker (işaretleyici) için ayarları döner.
            * 
            * @param {string} id - Marker'ın ID'si.
            * @param {string} title - Marker'ın başlığı.
            * @param {Array} appointment - Marker ile ilgili randevu bilgileri.
            * @param {string} user_fullname - Marker ile ilişkili kullanıcının tam adı.
            * @param {string} phone - Marker ile ilişkili telefon numarası.
            * @param {object} position - Marker'ın harita üzerindeki pozisyonu.
            * @param {object} map - Marker'ın ekleneceği harita nesnesi.
            * @return {object} - Marker ayarlarını içeren bir nesne.
            */
            function generateMarkerSettings(id, title, appointment, user_fullname, phone, position, map) {
                const icon = {
                    url: markerIcons[googleSettings[0].markericoncode],
                };
                let markerSettings = {};
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

            /**
             * Haritada şubeleri temsil eden işaretleyicileri (markers) oluşturur.
             */
            function generateBranchMarkers() {
                clearBranchMarkers(); // Mevcut marker'ları temizler
                hideBranchDetailsPanel(); // Şube detay panelini gizler
                if (IsSelectedItemsBranches.length > 0) {
                    filteredBranches = IsSelectedItemsBranches;
                } else {
                    filteredBranches = getFilteredBranches(branchList);
                }

                for (let i = 0; i < filteredBranches.length; i++) {
                    var userFullName = findUserById(filteredBranches[i].user_id)?.text || 'Unknown User';
                    var appointment = findAppointmentsByBranchId(filteredBranches[i].id);

                    // Mevcut marker'ı kontrol et (aynı ID ile marker olup olmadığını kontrol et)
                    if (branchMarkers.some(marker => marker.id === filteredBranches[i].id)) {
                        // Eğer aynı ID'ye sahip bir marker zaten varsa, tekrar ekleme
                        continue;
                    }

                    // Marker oluşturma
                    var marker = new google.maps.Marker(generateMarkerSettings(filteredBranches[i].id, filteredBranches[i].text, appointment, userFullName, filteredBranches[i].phone, filteredBranches[i].position, map));
                    marker.id = filteredBranches[i].id; // Marker ID'si ekle
                    branchMarkers.push(marker);

                    // Marker tıklama olay dinleyicisi ekleme
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

            /**
             * Haritadaki tüm şube işaretleyicilerini (markers) kaldırır.
             */
            function clearBranchMarkers() {
                assignMapToBranchMarkers(null);
                branchMarkers = [];
            }

            /**
             * Haritadaki şehirleri temsil eden çemberleri (circles) kaldırır.
             * 
             * @param {Array} cityCircles - Şehir çemberlerini içeren dizi.
             */
            function removeCityCircles(cityCircles) {
                cityCircles.forEach(element => {
                    element.setMap(null);
                });
                cityCircles.splice(0, cityCircles.length);
            }

            /**
             * Haritadaki ilçeleri temsil eden çemberleri (circles) kaldırır.
             * 
             * @param {Array} countyCircles - İlçe çemberlerini içeren dizi.
             */
            function removeCountyCircles(countyCircles) {
                countyCircles.forEach(element => {
                    element.setMap(null);
                });
                countyCircles.splice(0, countyCircles.length);
            }

            /**
             * Haritadaki şehir bilgi pencerelerini (InfoWindows) kaldırır.
             */
            function removeCityInfoWindows() {
                cityInfoWindows.forEach(element => {
                    element.setMap(null);
                });
                cityInfoWindows.splice(0, cityInfoWindows.length);
            }

            /**
             * Haritadaki ilçe bilgi pencerelerini (InfoWindows) kaldırır.
             */
            function removeCountyInfoWindows() {
                countyInfoWindows.forEach(element => {
                    element.setMap(null);
                });
                countyInfoWindows.splice(0, countyInfoWindows.length);
            }

            /**
            * Verilen ID'ye göre kullanıcıyı bulur.
            * 
            * @param {string} id - Kullanıcı ID'si.
            * @return {object|null} - İlgili kullanıcıyı içeren nesne veya null.
            */
            function findUserById(id) {
                return userList.find(user => user.id == id.toString()) || null;
            }

            /**
            * Verilen şube ID'sine göre randevuları bulur.
            * 
            * @param {string} branch_id - Şube ID'si.
            * @return {Array} - İlgili şube için randevuları içeren bir dizi.
            */
            function findAppointmentsByBranchId(branch_id) {
                // Kontrol amaçlı log ekleyelim.
                if (!branch_id) {
                    return []; // Eğer geçersiz bir ID geldiyse, boş bir dizi döndür.
                }

                // Şube ID'sine uygun olan randevuları filtrele.
                const desiredAppointment = appointmentList.filter(appointment =>
                    appointment.branch_id.toString() === branch_id.toString()
                );
                return desiredAppointment; // Bulunan randevuların dizisi döndürülür.
            }

            /**
             * Şehirleri filtreler ve döner.
             * 
             * 1. Eğer `filteredCities` boşsa, tüm şehirleri (`cityList`) döner.
             * 2. Eğer `filteredCities` doluysa, sadece filtrelenmiş şehirleri döner.
             * 
             * @return {Array} - Filtrelenmiş şehirler veya tüm şehirler.
             */
            function getFilteredCities() {
                return filteredCities.length === 0 ? cityList : filteredCities;
            }

            /**
             * İlçeleri filtreler ve döner.
             * 
             * 1. Eğer `filteredCounties` boşsa, tüm ilçeleri (`countyList`) döner.
             * 2. Eğer `filteredCounties` doluysa, sadece filtrelenmiş ilçeleri döner.
             * 
             * @return {Array} - Filtrelenmiş ilçeler veya tüm ilçeler.
             */
            function getFilteredCounties() {
                return filteredCounties.length === 0 ? countyList : filteredCounties;
            }

            /**
             * Kullanıcıları filtreler ve döner.
             * 
             * @return {Array} - Filtrelenmiş kullanıcılar veya tüm kullanıcılar.
             */
            function getFilteredUsers() {
                return filteredUsers.length === 0 ? userList : filteredUsers;
            }

            /**
             * Şubeleri şehir bazında filtreler.
             */
            function filterBranchesByCity() {
                const citiesAssigment = getFilteredCities();
                filteredBranches = branchList.filter(branch =>
                    citiesAssigment.some(city => city.id === branch.city_id)
                );
            }

            /**
             * Şubeleri ilçe bazında filtreler.
             */
            function filterBranchesByCounty() {
                const countiesAssigment = getFilteredCounties();
                filteredBranches = filteredBranches.filter(branch =>
                    countiesAssigment.some(county => county.id === branch.county_id)
                );
            }

            /**
             * Şubeleri kullanıcı bazında filtreler.
             */
            function filterBranchesByUser() {
                const usersAssigment = getFilteredUsers();
                filteredBranches = filteredBranches.filter(branch =>
                    usersAssigment.some(user => user.id === branch.user_id)
                );
            }

            // filteredBranches listesindeki şubeleri, randevu durumuna (visited veya unvisited) göre filtreler.
            function filterBranchesByAppointmentStatus() {
                // Eğer ziyaret durumu visited olarak tanımlandıysa
                if (appointmentStatusInput == appointmentStatus.visited) {
                    filteredBranches = filteredBranches.filter(branch => appointmentList.some(appointment =>
                        appointment.branch_id === branch.id &&
                        new Date(appointment.meeting_date_start) >= startDate &&
                        new Date(appointment.meeting_date_end) <= endDate
                    ));
                }

                // Eğer ziyaret durumu unvisited olarak tanımlandıysa
                else if (appointmentStatusInput == appointmentStatus.unvisited) {
                    filteredBranches = filteredBranches.filter(branch => !appointmentList.some(appointment =>
                        appointment.branch_id === branch.id
                    ));
                } else {
                    // Eğer ziyaret durumu all olarak tanımlandıysa
                    filteredBranches = branchList;
                }
            }

            /**
             * Tüm filtreleme işlemlerini tek bir yerde uygular.
             */
            function filterAllBranches() {
                // İlk olarak şubeler listesini baştan yüklüyoruz.
                filteredBranches = [...branchList];
                //randevu durumuna göre filtreleme
                filterBranchesByAppointmentStatus();
                // Şehir ve ilçe bazında filtreleme
                filterBranchesByCity();
                filterBranchesByCounty();
                // Kullanıcıya göre filtreleme
                filterBranchesByUser();
            }

            /**
            * Kullanıcı, şehir, ilçe ve randevu durumlarına göre şubeleri filtreler.
            * Filtreler boşsa tüm listeyi döner.
            * 
            * @param {Array} branches - Şube listesi.
            * @return {Array} - Filtrelenmiş şube listesi.
            */
            function getFilteredBranches(branches) {
                let filtered = branches;

                if (appointmentStatusInput) {
                    // Eğer ziyaret durumu visited olarak tanımlandıysa
                    if (appointmentStatusInput == appointmentStatus.visited) {
                        filtered = filtered.filter(branch => appointmentList.some(appointment =>
                            appointment.branch_id === branch.id &&
                            new Date(appointment.meeting_date_start) >= startDate &&
                            new Date(appointment.meeting_date_end) <= endDate
                        ));
                    }

                    // Eğer ziyaret durumu unvisited olarak tanımlandıysa
                    else if (appointmentStatusInput == appointmentStatus.unvisited) {
                        filtered = filtered.filter(branch => !appointmentList.some(appointment =>
                            appointment.branch_id === branch.id
                        ));
                    } else {
                        // Eğer ziyaret durumu all olarak tanımlandıysa
                        filtered = branchList;
                    }

                }

                if (filteredUsers.length > 0) {
                    filtered = filtered.filter(branch =>
                        filteredUsers.some(user => user.id === branch.user_id)
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

            /**
             * Belirtilen bir ilçe ID'sine göre şubeleri sayar.
             * 
             * @param {string} countyid - Filtrelenecek ilçe ID'si.
             * @return {number} - Bu ilçe ID'sine sahip şubelerin sayısı.
             */
            function countBranchesByCounty(countyid) {
                // Filtreleri uygulayarak şubeleri güncelle
                const filtered = getFilteredBranches(branchList);

                // İlçe ID'sine göre filtreleyip sayıyı döndür
                return filtered.filter(branch => branch.county_id === countyid).length;
            }

            /**
             * Belirtilen bir şehir ID'sine göre şubeleri sayar.
             * 
             * @param {string} cityid - Filtrelenecek şehir ID'si.
             * @return {number} - Bu şehir ID'sine sahip şubelerin sayısı.
             */
            function countBranchesByCity(cityid) {
                // Filtreleri uygulayarak şubeleri güncelle
                const filtered = getFilteredBranches(branchList);

                // Şehir ID'sine göre filtreleyip sayıyı döndür
                return filtered.filter(branch => branch.city_id === cityid).length;
            }

            /**
            * Geocoding işlemi yaparak bir konum için haritayı merkeze alır ve ilgili şubenin bilgilerini görüntüler.
            *         
            * 1. Geocoder kullanarak verilen `request` için coğrafi konum bilgisini alır.
            * 2. Haritayı (`map`) bu konum üzerine merkeze alır.
            * 3. geocodeAndDisplayBranchDetails sonucu gelen adres bilgilerini kullanarak ilgili şubenin (`branchMarkers`) randevularını ve bilgilerini ekranda gösterir.
            * 4. Şube ile ilgili bilgileri ve randevu detaylarını HTML formatında oluşturur ve `branchDetailsContentElement` div'ine ekler.
            * 5. Randevu detayları varsa, randevu detay butonunu (`btnAppointmentDetails`) gösterir; yoksa gizler.
            * 
            * @param {object} request - geocodeAndDisplayBranchDetails işlemi için istek parametreleri.
            * @param {object} branchMarkers - Harita üzerinde işaretlenmiş olan şubeye ait bilgiler.
            * @return {Array} - geocodeAndDisplayBranchDetails sonuçlarını içeren bir dizi.
            */
            function geocodeAndDisplayBranchDetails(request, branchMarkers) {
                geocoder = new google.maps.Geocoder();
                geocoder.geocode(request)
                    .then((result) => {
                        const { results } = result;
                        map.setCenter(results[0].geometry.location); // Haritayı geocode sonucu gelen konuma ayarlar

                        displayBranchDetails(); // Yanıt div'ini gösterir

                        var appointmentTbody = '';
                        var appointmentThead = '';
                        var appointmentRow = '';

                        // Şubenin randevuları için tablo satırları oluşturur
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

                        // Randevu tablosu başlığını oluşturur
                        appointmentThead = '<thead>' +
                            '<tr>' +
                            '<th class="col-md-4">Appointment Number</th>' +
                            '<th class="col-md-4">Meeting Date Start</th>' +
                            '<th class="col-md-4">Meeting Date End</th>' +
                            '</tr>' +
                            '</thead>';

                        // Randevu tablosu gövdesini oluşturur
                        appointmentTbody = '<tbody>' + appointmentRow + '</tbody>';
                        $(".appointmentstablerow").empty();
                        $(".appointmentstablerow").append(appointmentThead);
                        $(".appointmentstablerow").append(appointmentTbody);

                        // Şube bilgilerini ve randevuları gösteren HTML içeriğini oluşturur
                        var html = '<div class="container-fluid p-2" style="max-width: 100%; background-color: rgba(255, 255, 255, 0.85); border-radius: 8px;">' +
                            '<div class="d-flex justify-content-center mb-2">' +
                            '<button type="button" onclick="Google.MapObject.ClosebranchDetailsDiv(this)" class="btn btn-secondary" style="width:35px; height:28px; padding: 0;">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">' +
                            '<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>' +
                            '</svg>' +
                            '</button>' +
                            '</div>' +
                            // Firma bilgileri
                            '<div class="card col-12 mx-1 mb-2" style="box-shadow: 0 3px 6px rgba(0,0,0,0.1); border-radius: 8px;">' +
                            '<div class="card-body p-3">' +
                            '<h6 class="card-title"><strong>Branch Information</strong></h6>' +
                            '<hr>' +
                            '<p class="card-text" style="font-size:15px;">' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Branch ID:</strong> ' + branchMarkers.id + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Title:</strong> ' + branchMarkers.title + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Address:</strong> ' + results[0].formatted_address + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Phone:</strong> ' + branchMarkers.phone + '</div></div>' +
                            '<div class="row"><div class="col-12 text-wrap"><strong>Sales Representative:</strong> ' + branchMarkers.user_fullname + '</div></div>' +
                            '</p>' +
                            '</div>' +
                            '</div>' +

                            // Butonlar
                            '<div class="card col-12 mx-1 mb-2" style="box-shadow: 0 3px 6px rgba(0,0,0,0.1); border-radius: 8px;">' +
                            '<div class="card-body p-2 d-flex flex-column justify-content-around">' +
                            '<div class="mb-2"><input type="button" id="btnBranchInfo" class="btn btn-primary w-100 btn-sm" data-id="' + branchMarkers.id + '" onClick="Google.MapObject.branchInfo(this)" value="Info"></div>' +
                            '<div class="mb-2"><input type="button" id="btnOpenAppointmentPanel" class="btn btn-success w-100 btn-sm" data-id="' + branchMarkers.id + '" data-name="' + branchMarkers.title + '" onClick="Google.MapObject.openAppointmentPanel(this)" value="Add Appointment"></div>' +
                            '<div class="mb-2"><input type="button" id="CreateRoute" class="btn btn-warning w-100 btn-sm" data-destination="' + results[0].formatted_address + '" onClick="Google.MapObject.CreateRoute(this)" value="Route"></div>' +
                            '<div><input type="button" id="btnAppointmentDetails" class="btn btn-info w-100 btn-sm" data-bs-toggle="modal" data-bs-target="#AppointmentsModal" value="Details"></div>' +
                            '</div>' +
                            '</div>' +
                            '<div/>';

                        branchDetailsContentElement.innerHTML = html;

                        // Eğer randevu varsa randevu detay butonunu göster, yoksa gizle
                        if (branchMarkers.appointment.length != 0)
                            document.getElementById("btnAppointmentDetails").style.display = 'block';
                        else
                            document.getElementById("btnAppointmentDetails").style.display = 'none';
                        return results; // geocodeAndDisplayBranchDetails sonuçlarını döndür
                    })
                    .catch((e) => {
                        alert("geocodeAndDisplayBranchDetails was not successful for the following reason: " + e); // geocodeAndDisplayBranchDetails başarısız olursa hata mesajı göster
                    });
            }

            /**
            * Harita üzerindeki şehir bilgi pencerelerini (InfoWindows) açar.
            * 
            * 1. Haritanın yakınlaştırma seviyesini kontrol eder.
            * 2. Eğer zoom seviyesi 9 veya daha düşükse, bilgi pencerelerini açar ve haritayı merkezden kaldırır.
            * 3. Geçici olarak haritanın gesture handling davranışını "none" olarak ayarlar, ardından tekrar "greedy" olarak geri alır.
            */
            function openCityInfoWindows() {
                let zoom = parseInt(map.getZoom());
                var iw = () => {
                    if (zoom <= 9) {
                        map.gestureHandling = "none";
                        cityInfoWindows.forEach(element => {
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

            /**
            * Harita üzerindeki ilçe bilgi pencerelerini (InfoWindows) açar.
            * 
            * 1. Haritanın yakınlaştırma seviyesini kontrol eder.
            * 2. Eğer zoom seviyesi 10 ile 12 arasındaysa, bilgi pencerelerini açar ve haritayı merkezden kaldırır.
            * 3. Geçici olarak haritanın gesture handling davranışını "none" olarak ayarlar, ardından tekrar "greedy" olarak geri alır.
            */
            function openCountyInfoWindows() {
                let zoom = parseInt(map.getZoom());

                var iw = () => {
                    if (zoom >= 10 && zoom <= 12) {
                        map.gestureHandling = "none";
                        countyInfoWindows.forEach(element => {
                            element.open(map);
                            map.setCenter(null);
                        });
                    }
                }
                return Promise.resolve(iw()).finally(() => {
                    if (zoom >= 10 && zoom <= 12) {
                        map.gestureHandling = "greedy";
                    }
                });
            }

            /**
            * Tüm şube işaretleyicilerini (branchMarkers) belirli bir harita nesnesine (`map`) atar.
            * 
            * @param {object} map - Harita nesnesi.
            */
            function assignMapToBranchMarkers(map) {
                for (var i = 0; i < branchMarkers.length; i++) {
                    branchMarkers[i].setMap(map);
                }
            }

            /**
            * Şehir filtrelerine göre ilçe verilerini (filteredCounties) ayarlar ve select2 bileşenine yükler.
            * 
            * 1. Şehir filtrelerine göre ilgili ilçeleri `filteredCounties` listesine ekler.
            * 2. `js-filter-multiple-county` select elementini temizler ve yeni ilçe verilerini ekler.
            * 
            * @param {Array} filteredCities - Şehir filtresi olarak kullanılan şehir listesi.
            */
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

            // Select2 bileşenini şubeler için yapılandırır
            $('#js-filter-multiple-branch').select2({
                placeholder: "Select a branch",
                allowClear: true,
                data: branchList
            });

            // Select2 bileşenini şehirler için yapılandırır
            $('#js-filter-multiple-city').select2({
                placeholder: "Select a city",
                allowClear: true,
                data: cityList
            });

            // Select2 bileşenini ilçeler için yapılandırır
            $('#js-filter-multiple-county').select2({
                placeholder: "Select a county",
            });

            // Select2 bileşenini kullanıcılar için yapılandırır
            $('#js-filter-multiple-user').select2({
                placeholder: "Select a user",
                allowClear: true,
                data: userList
            });

            // Select2 bileşenini randevu durumu için yapılandırır
            $('#js-filter-single-appointment').select2({
                placeholder: "Select a appointment status",
                allowClear: true
            });

            // Şube filtresi değiştiğinde tetiklenen event handler
            $("#js-filter-multiple-branch").on("select2:select select2:unselect", function (e) {
                // Seçilen şubeleri `filteredBranches` listesine al
                IsSelectedItemsBranches = $('#js-filter-multiple-branch').select2('data');

                // Haritadaki eski elemanları temizle
                removeCityInfoWindows(); // Şehir bilgi pencerelerini kaldır
                removeCountyInfoWindows(); // İlçe bilgi pencerelerini kaldır
                removeCityCircles(cityCircles); // Şehir dairelerini kaldır
                removeCountyCircles(countyCircles); // İlçe dairelerini kaldır
                clearBranchMarkers(); // Şube işaretleyicilerini kaldır

                // Filtrelenmiş şubeleri haritaya ekle
                if (IsSelectedItemsBranches.length > 0) {
                    // Diğer filtreleri devre dışı bırak
                    $("#js-filter-multiple-city").prop("disabled", true).val(null).trigger("change");
                    $("#js-filter-multiple-county").prop("disabled", true).val(null).trigger("change");
                    $("#js-filter-multiple-user").prop("disabled", true).val(null).trigger("change");
                    $("#js-filter-single-appointment").prop("disabled", true).val(null).trigger("change");

                    generateBranchMarkers(); // Yeni markerları oluştur
                } else {
                    // Eğer şube seçimi yoksa, diğer filtreleri yeniden etkinleştir
                    $("#js-filter-multiple-city").prop("disabled", false);
                    $("#js-filter-multiple-county").prop("disabled", false);
                    $("#js-filter-multiple-user").prop("disabled", false);
                    $("#js-filter-single-appointment").prop("disabled", false);
                    // Eğer şube seçimi yoksa, haritayı başlangıç duruma döndür
                    createCityCircles(cityList); // Tüm şehir dairelerini oluştur
                    createCountyCircles(countyList); // Tüm ilçe dairelerini oluştur
                    openCityInfoWindows(); // Şehir bilgi pencerelerini aç
                    openCountyInfoWindows(); // İlçe bilgi pencerelerini aç
                }

                map.setZoom(map.getZoom()); // Harita zoom seviyesini güncelle
            });


            // Şehir filtresi değiştiğinde tetiklenen event handler
            $("#js-filter-multiple-city").on("select2:select select2:unselect", function (e) {
                filteredCities = $('#js-filter-multiple-city').select2('data'); // Seçilen şehirleri filtreye al
                setCountyDataByCityFilter(filteredCities); // İlçeleri şehir filtresine göre güncelle
                removeCityInfoWindows(); // Şehir bilgi pencerelerini kaldır
                removeCountyInfoWindows(); // İlçe bilgi pencerelerini kaldır
                createCityCircles(cityList); // Şehir dairelerini oluştur
                createCountyCircles(countyList); // İlçe dairelerini oluştur
                clearBranchMarkers(); // Şube işaretleyicilerini kaldır
                hideBranchDetailsPanel(); // Yanıt div'ini gizle
                openCityInfoWindows(); // Şehir bilgi pencerelerini aç
                openCountyInfoWindows(); // İlçe bilgi pencerelerini aç
                map.setZoom(map.getZoom()); // Harita zoom seviyesini güncelle
            });

            // İlçe filtresi değiştiğinde tetiklenen event handler
            $("#js-filter-multiple-county").on("select2:select select2:unselect", function (e) {
                filteredCounties = $('#js-filter-multiple-county').select2('data'); // Seçilen ilçeleri filtreye al
                removeCityInfoWindows(); // Şehir bilgi pencerelerini kaldır
                removeCountyInfoWindows(); // İlçe bilgi pencerelerini kaldır
                createCityCircles(cityList); // Şehir dairelerini oluştur
                createCountyCircles(countyList); // İlçe dairelerini oluştur
                clearBranchMarkers(); // Şube işaretleyicilerini kaldır
                hideBranchDetailsPanel(); // Yanıt div'ini gizle
                openCityInfoWindows(); // Şehir bilgi pencerelerini aç
                openCountyInfoWindows(); // İlçe bilgi pencerelerini aç
                map.setZoom(map.getZoom()); // Harita zoom seviyesini güncelle
            });

            // Kullanıcı filtresi değiştiğinde tetiklenen event handler
            $("#js-filter-multiple-user").on("select2:select select2:unselect", function (e) {
                filteredUsers = $('#js-filter-multiple-user').select2('data'); // Seçilen kullanıcıları filtreye al
                removeCityInfoWindows(); // Şehir bilgi pencerelerini kaldır
                removeCountyInfoWindows(); // İlçe bilgi pencerelerini kaldır
                createCityCircles(cityList); // Şehir dairelerini oluştur
                createCountyCircles(countyList); // İlçe dairelerini oluştur
                clearBranchMarkers(); // Şube işaretleyicilerini kaldır
                hideBranchDetailsPanel(); // Yanıt div'ini gizle
                openCityInfoWindows(); // Şehir bilgi pencerelerini aç
                openCountyInfoWindows(); // İlçe bilgi pencerelerini aç
                map.setZoom(map.getZoom()); // Harita zoom seviyesini güncelle
            });

            // Randevu durumu filtresi değiştiğinde tetiklenen event handler
            $("#js-filter-single-appointment").on("select2:select ", function (e) {
                var data = e.params.data;
                appointmentStatusInput = data.id; // Seçilen randevu durumunu al
                if (appointmentStatus.allvisit == appointmentStatusInput) {
                    // Eğer tüm ziyaretler seçildiyse, tarih aralığı seçimini devre dışı bırak
                    $(".dtappointment").attr("disabled", 'disabled');
                    startDate = new Date('1980-01-01T00:00:00.000Z');
                    endDate = new Date();
                    $('#dtappointmentstart').val(null);
                    $('#dtappointmentend').val(null);
                } else {
                    $(".dtappointment").removeAttr('disabled'); // Tarih aralığı seçimini etkinleştir
                }
                removeCityInfoWindows(); // Şehir bilgi pencerelerini kaldır
                removeCountyInfoWindows(); // İlçe bilgi pencerelerini kaldır
                createCityCircles(cityList); // Şehir dairelerini oluştur
                createCountyCircles(countyList); // İlçe dairelerini oluştur
                clearBranchMarkers(); // Şube işaretleyicilerini kaldır
                hideBranchDetailsPanel(); // Yanıt div'ini gizle
                openCityInfoWindows(); // Şehir bilgi pencerelerini aç
                map.setZoom(map.getZoom()); // Harita zoom seviyesini güncelle
                return;
            });

            // Tarih aralığı değiştiğinde tetiklenen event handler (tarih aralığının doğruluğunu kontrol eder)
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
            });

            // Başlangıç tarihi değiştiğinde tetiklenen event handler
            $('#dtappointmentstart').on("change", function (e) {
                filterAllBranches(); // Şubeleri kullanıcı ve şehir bazında filtrele
                removeCityInfoWindows(); // Şehir bilgi pencerelerini kaldır
                removeCountyInfoWindows(); // İlçe bilgi pencerelerini kaldır
                createCityCircles(cityList); // Şehir dairelerini oluştur
                createCountyCircles(countyList); // İlçe dairelerini oluştur
                clearBranchMarkers(); // Şube işaretleyicilerini kaldır
                hideBranchDetailsPanel(); // Yanıt div'ini gizle
                openCityInfoWindows(); // Şehir bilgi pencerelerini aç
                map.setZoom(map.getZoom()); // Harita zoom seviyesini güncelle
                return;
            });

            // Bitiş tarihi değiştiğinde tetiklenen event handler
            $('#dtappointmentend').on("change", function (e) {
                filterAllBranches(); // Şubeleri kullanıcı ve şehir bazında filtrele
                removeCityInfoWindows(); // Şehir bilgi pencerelerini kaldır
                removeCountyInfoWindows(); // İlçe bilgi pencerelerini kaldır
                createCityCircles(cityList); // Şehir dairelerini oluştur
                createCountyCircles(countyList); // İlçe dairelerini oluştur
                clearBranchMarkers(); // Şube işaretleyicilerini kaldır
                hideBranchDetailsPanel(); // Yanıt div'ini gizle
                openCityInfoWindows(); // Şehir bilgi pencerelerini aç
                map.setZoom(map.getZoom()); // Harita zoom seviyesini güncelle
                return;
            });

            // Renk ayarı ekleme için event handler
            $(document).on('click', '#addColorSetting', function () {
                const newIndex = $('#colorSettingsContainer').children().length;
                $('#colorSettingsContainer').append(createColorSettingElement({ min: 0, maks: 0, colorcode: '#000000' }, newIndex));
            });

            // Renk ayarı silme için event handler
            $(document).on('click', '.remove-color-setting', function () {
                $(this).closest('.color-setting-item').remove();
            });

            // Ayarları kaydetme işlemi için event handler
            $(document).on('click', '#saveSettings', function () {
                // Default Circle Color Code'u güncelle
                googleSettings[0].defaultcirclecolorcode = $('#defaultcirclecolorcode').val();

                // Marker Icon Code'u güncelle
                googleSettings[0].markericoncode = $('#markerIconSelect').val();

                // Color Settings'i güncelle
                googleSettings[0].colorsettings = [];
                $('#colorSettingsContainer .color-setting-item').each(function () {
                    const min = $(this).find('.min-input').val();
                    const maks = $(this).find('.max-input').val();
                    const colorcode = $(this).find('.color-input').val();
                    googleSettings[0].colorsettings.push({ min, maks, colorcode });
                });

                // Modal'ı kapat
                $('#GoogleSettingsModal').modal('hide');

                // Haritayı güncelleme işlemi değişikliklerin geçerli olması için
                map.setCenter(map.getCenter());
                map.setZoom(13);
                map.setZoom(6.5);
            });
        },

        ClosebranchDetailsDiv: function (e) {
            document.getElementById("branchDetailsContentElement-container").style.display = 'none';
        },

        branchInfo: function (e) {
            window.open('branchdetail.html?branch_id=' + $(e).data("id"), '_blank');
        },

        // Panel açma/kapatma fonksiyonları
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

        // Randevu kaydetme işlemleri
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

        FilterShowHide: function () {
            // filterDivShowHide değeri tersine çevrilir
            filterDivShowHide = !filterDivShowHide;
            // .filter-items elementlerini gösterir veya gizler
            $('.filter-items').toggle(filterDivShowHide);
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

        // Color Setting item oluşturma fonksiyonu
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
