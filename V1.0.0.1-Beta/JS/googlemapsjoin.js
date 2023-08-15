
$(document).ready(function () {

    var users = [
        {
            "id": "298d1a32-6f62-eb11-89f5-000d3a4aa7d8",
            "text": "# AIBuilderProd"
        },
        {
            "id": "761d6174-3a53-ed11-bba1-000d3aaab571",
            "text": "# CDSReportService-CHE"
        },
        {
            "id": "d01d6174-3a53-ed11-bba1-000d3aaab571",
            "text": "# CDSReportService-OCE"
        },
        {
            "id": "b5e3e1c3-5310-ed11-b83c-000d3aadbe60",
            "text": "# AppDeploymentOrchestration"
        },
        {
            "id": "bbd0a810-636a-ed11-9561-000d3abcae8d",
            "text": "Hayrunnisa Ölmez"
        },
        {
            "id": "39e44d7e-6b6a-ed11-9561-000d3abcae8d",
            "text": "CRMAkademi3 #"
        },
        {
            "id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "text": "CRMAkademi4 #"
        },
        {
            "id": "5cb1cb61-4d5c-ed11-9562-000d3abd8dc2",
            "text": "Ali Topkoc"
        }
    ];
    var cities = [
        {
            "id": "fc606368-fac3-e911-a846-000d3a385540",
            "text": "Adana",
            "center": {
                "lat": 36.99142,
                "lng": 35.33083
            }
        },
        {
            "id": "06616368-fac3-e911-a846-000d3a385540",
            "text": "Adıyaman",
            "center": {
                "lat": 37.76365,
                "lng": 38.27726
            }
        },
        {
            "id": "56616368-fac3-e911-a846-000d3a385540",
            "text": "Aksaray",
            "center": {
                "lat": 38.36863,
                "lng": 34.0297
            }
        },
        {
            "id": "ae626368-fac3-e911-a846-000d3a385540",
            "text": "Ankara",
            "center": {
                "lat": 39.93336,
                "lng": 32.85974
            }
        },
        {
            "id": "c6626368-fac3-e911-a846-000d3a385540",
            "text": "Antalya",
            "center": {
                "lat": 36.89689,
                "lng": 30.71332
            }
        },
        {
            "id": "30646368-fac3-e911-a846-000d3a385540",
            "text": "Aydın",
            "center": {
                "lat": 37.83802,
                "lng": 27.84556
            }
        },
        {
            "id": "b9646368-fac3-e911-a846-000d3a385540",
            "text": "Balıkesir",
            "center": {
                "lat": 39.6533,
                "lng": 27.89034
            }
        },
        {
            "id": "97656368-fac3-e911-a846-000d3a385540",
            "text": "Batman",
            "center": {
                "lat": 37.88951,
                "lng": 41.12928
            }
        },
        {
            "id": "79676368-fac3-e911-a846-000d3a385540",
            "text": "Bolu",
            "center": {
                "lat": 40.73254,
                "lng": 31.60821
            }
        },
        {
            "id": "b5686368-fac3-e911-a846-000d3a385540",
            "text": "Bursa",
            "center": {
                "lat": 40.18853,
                "lng": 29.06096
            }
        },
        {
            "id": "ff6c6368-fac3-e911-a846-000d3a385540",
            "text": "Çanakkale",
            "center": {
                "lat": 40.14672,
                "lng": 26.40859
            }
        },
        {
            "id": "016d6368-fac3-e911-a846-000d3a385540",
            "text": "Çankırı",
            "center": {
                "lat": 40.60021,
                "lng": 33.61622
            }
        },
        {
            "id": "036d6368-fac3-e911-a846-000d3a385540",
            "text": "Çorum",
            "center": {
                "lat": 40.54993,
                "lng": 34.95372
            }
        },
        {
            "id": "a76d6368-fac3-e911-a846-000d3a385540",
            "text": "Denizli",
            "center": {
                "lat": 37.78302,
                "lng": 29.09633
            }
        },
        {
            "id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "text": "Diyarbakır",
            "center": {
                "lat": 37.92497,
                "lng": 40.21098
            }
        },
        {
            "id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "text": "Düzce",
            "center": {
                "lat": 40.83872,
                "lng": 31.16261
            }
        },
        {
            "id": "e76e6368-fac3-e911-a846-000d3a385540",
            "text": "Edirne",
            "center": {
                "lat": 41.67713,
                "lng": 26.55571
            }
        },
        {
            "id": "416f6368-fac3-e911-a846-000d3a385540",
            "text": "Elazığ",
            "center": {
                "lat": 38.67482,
                "lng": 39.22252
            }
        },
        {
            "id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "text": "Erzincan",
            "center": {
                "lat": 39.7468,
                "lng": 39.49112
            }
        },
        {
            "id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "text": "Erzurum",
            "center": {
                "lat": 39.9055,
                "lng": 41.26582
            }
        },
        {
            "id": "b36f6368-fac3-e911-a846-000d3a385540",
            "text": "Eskişehir",
            "center": {
                "lat": 39.7667,
                "lng": 30.52563
            }
        },
        {
            "id": "5a716368-fac3-e911-a846-000d3a385540",
            "text": "Gaziantep",
            "center": {
                "lat": 37.06595,
                "lng": 37.37811
            }
        },
        {
            "id": "be736368-fac3-e911-a846-000d3a385540",
            "text": "Hatay",
            "center": {
                "lat": 36.20258,
                "lng": 36.1604
            }
        },
        {
            "id": "b2756368-fac3-e911-a846-000d3a385540",
            "text": "Isparta",
            "center": {
                "lat": 37.76265,
                "lng": 30.55371
            }
        },
        {
            "id": "02766368-fac3-e911-a846-000d3a385540",
            "text": "İstanbul",
            "center": {
                "lat": 41.00824,
                "lng": 28.97836
            }
        },
        {
            "id": "04766368-fac3-e911-a846-000d3a385540",
            "text": "İzmir",
            "center": {
                "lat": 38.42373,
                "lng": 27.14283
            }
        },
        {
            "id": "da776368-fac3-e911-a846-000d3a385540",
            "text": "Karabük",
            "center": {
                "lat": 41.19562,
                "lng": 32.62265
            }
        },
        {
            "id": "e2776368-fac3-e911-a846-000d3a385540",
            "text": "Karaman",
            "center": {
                "lat": 37.18101,
                "lng": 33.22224
            }
        },
        {
            "id": "72786368-fac3-e911-a846-000d3a385540",
            "text": "Kayseri",
            "center": {
                "lat": 38.72049,
                "lng": 35.4826
            }
        },
        {
            "id": "f8786368-fac3-e911-a846-000d3a385540",
            "text": "Kırıkkale",
            "center": {
                "lat": 39.83978,
                "lng": 33.50888
            }
        },
        {
            "id": "24796368-fac3-e911-a846-000d3a385540",
            "text": "Kilis",
            "center": {
                "lat": 36.71648,
                "lng": 37.11466
            }
        },
        {
            "id": "c6796368-fac3-e911-a846-000d3a385540",
            "text": "Kocaeli",
            "center": {
                "lat": 40.76544,
                "lng": 29.94081
            }
        },
        {
            "id": "217a6368-fac3-e911-a846-000d3a385540",
            "text": "Konya",
            "center": {
                "lat": 37.87464,
                "lng": 32.49316
            }
        },
        {
            "id": "057b6368-fac3-e911-a846-000d3a385540",
            "text": "Kütahya",
            "center": {
                "lat": 39.41996,
                "lng": 29.98573
            }
        },
        {
            "id": "717e6368-fac3-e911-a846-000d3a385540",
            "text": "Malatya",
            "center": {
                "lat": 38.35536,
                "lng": 38.33352
            }
        },
        {
            "id": "117f6368-fac3-e911-a846-000d3a385540",
            "text": "Mardin",
            "center": {
                "lat": 37.3129,
                "lng": 40.73395
            }
        },
        {
            "id": "de816368-fac3-e911-a846-000d3a385540",
            "text": "Muğla",
            "center": {
                "lat": 37.21537,
                "lng": 28.36339
            }
        },
        {
            "id": "61836368-fac3-e911-a846-000d3a385540",
            "text": "Nevşehir",
            "center": {
                "lat": 38.62469,
                "lng": 34.71415
            }
        },
        {
            "id": "8d856368-fac3-e911-a846-000d3a385540",
            "text": "Osmaniye",
            "center": {
                "lat": 37.07463,
                "lng": 36.2464
            }
        },
        {
            "id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "text": "Rize",
            "center": {
                "lat": 41.02551,
                "lng": 40.51767
            }
        },
        {
            "id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "text": "Sakarya",
            "center": {
                "lat": 40.694,
                "lng": 30.43576
            }
        },
        {
            "id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "text": "Samsun",
            "center": {
                "lat": 41.2797,
                "lng": 36.33607
            }
        },
        {
            "id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "text": "Sinop",
            "center": {
                "lat": 42.02797,
                "lng": 35.15173
            }
        },
        {
            "id": "89b34c92-fac3-e911-a846-000d3a385540",
            "text": "Şanlıurfa",
            "center": {
                "lat": 37.1674,
                "lng": 38.79551
            }
        },
        {
            "id": "8bb34c92-fac3-e911-a846-000d3a385540",
            "text": "Şırnak",
            "center": {
                "lat": 37.51897,
                "lng": 42.45371
            }
        },
        {
            "id": "93b44c92-fac3-e911-a846-000d3a385540",
            "text": "Tekirdağ",
            "center": {
                "lat": 40.97809,
                "lng": 27.51167
            }
        },
        {
            "id": "81b54c92-fac3-e911-a846-000d3a385540",
            "text": "Tokat",
            "center": {
                "lat": 40.32346,
                "lng": 36.55219
            }
        },
        {
            "id": "edb54c92-fac3-e911-a846-000d3a385540",
            "text": "Trabzon",
            "center": {
                "lat": 41.0027,
                "lng": 39.71676
            }
        },
        {
            "id": "89b64c92-fac3-e911-a846-000d3a385540",
            "text": "Tunceli",
            "center": {
                "lat": 39.10617,
                "lng": 39.54826
            }
        },
        {
            "id": "77b74c92-fac3-e911-a846-000d3a385540",
            "text": "Uşak",
            "center": {
                "lat": 38.67423,
                "lng": 29.40588
            }
        },
        {
            "id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "text": "Van",
            "center": {
                "lat": 38.50121,
                "lng": 43.37298
            }
        },
        {
            "id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "text": "Yalova",
            "center": {
                "lat": 40.6549,
                "lng": 29.28419
            }
        },
        {
            "id": "a5bb4c92-fac3-e911-a846-000d3a385540",
            "text": "Zonguldak",
            "center": {
                "lat": 41.45352,
                "lng": 31.78938
            }
        }
    ];
    var counties = [
        {
            "id": "7f423182-fbc3-e911-a846-000d3a385540",
            "text": "ADAPAZARI",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.78886,
                "lng": 30.40595
            }
        },
        {
            "id": "93423182-fbc3-e911-a846-000d3a385540",
            "text": "AKÇAABAT",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.02204,
                "lng": 39.57087
            }
        },
        {
            "id": "bb423182-fbc3-e911-a846-000d3a385540",
            "text": "ALACA",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.19297,
                "lng": 34.83669
            }
        },
        {
            "id": "bf423182-fbc3-e911-a846-000d3a385540",
            "text": "ALAÇAM",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.60429,
                "lng": 35.59865
            }
        },
        {
            "id": "c3423182-fbc3-e911-a846-000d3a385540",
            "text": "ALANYA",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.54444,
                "lng": 31.99541
            }
        },
        {
            "id": "c5423182-fbc3-e911-a846-000d3a385540",
            "text": "ALAPLI",
            "city_id": "a5bb4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.18269,
                "lng": 31.38453
            }
        },
        {
            "id": "c9423182-fbc3-e911-a846-000d3a385540",
            "text": "ALİAĞA",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.79956,
                "lng": 26.97074
            }
        },
        {
            "id": "cb423182-fbc3-e911-a846-000d3a385540",
            "text": "ALMUS",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.37606,
                "lng": 36.90353
            }
        },
        {
            "id": "d3423182-fbc3-e911-a846-000d3a385540",
            "text": "ALTINDAĞ",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.00927,
                "lng": 32.98334
            }
        },
        {
            "id": "d9423182-fbc3-e911-a846-000d3a385540",
            "text": "ALTINOVA",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.64307,
                "lng": 29.47596
            }
        },
        {
            "id": "ed423182-fbc3-e911-a846-000d3a385540",
            "text": "ANTAKYA",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.1968,
                "lng": 36.16124
            }
        },
        {
            "id": "f5423182-fbc3-e911-a846-000d3a385540",
            "text": "ARAKLI",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.93972,
                "lng": 40.05515
            }
        },
        {
            "id": "ff423182-fbc3-e911-a846-000d3a385540",
            "text": "ARDEŞEN",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.19178,
                "lng": 40.98909
            }
        },
        {
            "id": "09433182-fbc3-e911-a846-000d3a385540",
            "text": "ARMUTLU",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.51884,
                "lng": 28.82939
            }
        },
        {
            "id": "0b433182-fbc3-e911-a846-000d3a385540",
            "text": "ARNAVUTKÖY",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.23845,
                "lng": 28.62645
            }
        },
        {
            "id": "0f433182-fbc3-e911-a846-000d3a385540",
            "text": "ARSİN",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.95396,
                "lng": 39.93721
            }
        },
        {
            "id": "11433182-fbc3-e911-a846-000d3a385540",
            "text": "ARSUZ",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.41227,
                "lng": 35.89032
            }
        },
        {
            "id": "13433182-fbc3-e911-a846-000d3a385540",
            "text": "ARTOVA",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.11797,
                "lng": 36.30138
            }
        },
        {
            "id": "15433182-fbc3-e911-a846-000d3a385540",
            "text": "ARTUKLU",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.42361,
                "lng": 40.68998
            }
        },
        {
            "id": "1f433182-fbc3-e911-a846-000d3a385540",
            "text": "ATAKUM",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.31253,
                "lng": 36.10681
            }
        },
        {
            "id": "21433182-fbc3-e911-a846-000d3a385540",
            "text": "ATAŞEHİR",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.98697,
                "lng": 29.13192
            }
        },
        {
            "id": "25433182-fbc3-e911-a846-000d3a385540",
            "text": "AVANOS",
            "city_id": "61836368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.71082,
                "lng": 34.84208
            }
        },
        {
            "id": "27433182-fbc3-e911-a846-000d3a385540",
            "text": "AVCILAR",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.01535,
                "lng": 28.73146
            }
        },
        {
            "id": "29433182-fbc3-e911-a846-000d3a385540",
            "text": "AYANCIK",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.9458,
                "lng": 34.58835
            }
        },
        {
            "id": "35433182-fbc3-e911-a846-000d3a385540",
            "text": "AYVALIK",
            "city_id": "b9646368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.31918,
                "lng": 26.69239
            }
        },
        {
            "id": "39433182-fbc3-e911-a846-000d3a385540",
            "text": "AZİZİYE",
            "city_id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.94579,
                "lng": 41.10519
            }
        },
        {
            "id": "3f433182-fbc3-e911-a846-000d3a385540",
            "text": "BAFRA",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.56196,
                "lng": 35.90569
            }
        },
        {
            "id": "43433182-fbc3-e911-a846-000d3a385540",
            "text": "BAĞLAR",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.84364,
                "lng": 39.9767
            }
        },
        {
            "id": "4d433182-fbc3-e911-a846-000d3a385540",
            "text": "BAKIRKÖY",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.9832,
                "lng": 28.85361
            }
        },
        {
            "id": "59433182-fbc3-e911-a846-000d3a385540",
            "text": "BALIŞEYH",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.90977,
                "lng": 33.71823
            }
        },
        {
            "id": "5d433182-fbc3-e911-a846-000d3a385540",
            "text": "BANAZ",
            "city_id": "77b74c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.73982,
                "lng": 29.75317
            }
        },
        {
            "id": "63433182-fbc3-e911-a846-000d3a385540",
            "text": "BAŞAKŞEHİR",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.10152,
                "lng": 28.78975
            }
        },
        {
            "id": "65433182-fbc3-e911-a846-000d3a385540",
            "text": "BAŞÇİFTLİK",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.54699,
                "lng": 37.16819
            }
        },
        {
            "id": "69433182-fbc3-e911-a846-000d3a385540",
            "text": "BAŞKALE",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.0476,
                "lng": 44.0149
            }
        },
        {
            "id": "71433182-fbc3-e911-a846-000d3a385540",
            "text": "BAYAT",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.6445,
                "lng": 34.26286
            }
        },
        {
            "id": "7d433182-fbc3-e911-a846-000d3a385540",
            "text": "BAYRAMPAŞA",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.04815,
                "lng": 28.90046
            }
        },
        {
            "id": "87433182-fbc3-e911-a846-000d3a385540",
            "text": "BESNİ",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.69336,
                "lng": 37.86087
            }
        },
        {
            "id": "89433182-fbc3-e911-a846-000d3a385540",
            "text": "BEŞİKDÜZÜ",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.05166,
                "lng": 39.23125
            }
        },
        {
            "id": "8b433182-fbc3-e911-a846-000d3a385540",
            "text": "BEŞİKTAŞ",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.06861,
                "lng": 29.02854
            }
        },
        {
            "id": "8d433182-fbc3-e911-a846-000d3a385540",
            "text": "BEŞİRİ",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.91621,
                "lng": 41.29272
            }
        },
        {
            "id": "93433182-fbc3-e911-a846-000d3a385540",
            "text": "BEYKOZ",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.14294,
                "lng": 29.1782
            }
        },
        {
            "id": "99433182-fbc3-e911-a846-000d3a385540",
            "text": "BEYOĞLU",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.03829,
                "lng": 28.97033
            }
        },
        {
            "id": "ab433182-fbc3-e911-a846-000d3a385540",
            "text": "BOĞAZKALE",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.02156,
                "lng": 34.60928
            }
        },
        {
            "id": "b5433182-fbc3-e911-a846-000d3a385540",
            "text": "BORNOVA",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.47098,
                "lng": 27.21769
            }
        },
        {
            "id": "b7433182-fbc3-e911-a846-000d3a385540",
            "text": "BOYABAT",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.46611,
                "lng": 34.77112
            }
        },
        {
            "id": "cb433182-fbc3-e911-a846-000d3a385540",
            "text": "BUCA",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.33374,
                "lng": 27.29112
            }
        },
        {
            "id": "e7433182-fbc3-e911-a846-000d3a385540",
            "text": "CANİK",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.2797,
                "lng": 36.33607
            }
        },
        {
            "id": "f3433182-fbc3-e911-a846-000d3a385540",
            "text": "CİZRE",
            "city_id": "8bb34c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.33235,
                "lng": 42.18547
            }
        },
        {
            "id": "17443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇANKAYA",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.84518,
                "lng": 32.92123
            }
        },
        {
            "id": "1b443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇARŞAMBA",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.19852,
                "lng": 36.72182
            }
        },
        {
            "id": "1d443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇARŞIBAŞI",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.04094,
                "lng": 39.40627
            }
        },
        {
            "id": "33443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇAYELİ",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.09015,
                "lng": 40.72754
            }
        },
        {
            "id": "54443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇEŞME",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.3228,
                "lng": 26.30276
            }
        },
        {
            "id": "5a443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇINARCIK",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.64516,
                "lng": 29.11924
            }
        },
        {
            "id": "6e443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇORLU",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.15581,
                "lng": 27.81373
            }
        },
        {
            "id": "76443182-fbc3-e911-a846-000d3a385540",
            "text": "ÇUKUROVA",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.09897,
                "lng": 35.14888
            }
        },
        {
            "id": "88443182-fbc3-e911-a846-000d3a385540",
            "text": "DARICA",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.77386,
                "lng": 29.4003
            }
        },
        {
            "id": "8a443182-fbc3-e911-a846-000d3a385540",
            "text": "DATÇA",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.72622,
                "lng": 27.68584
            }
        },
        {
            "id": "8e443182-fbc3-e911-a846-000d3a385540",
            "text": "DEFNE",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.16431,
                "lng": 36.11108
            }
        },
        {
            "id": "a4443182-fbc3-e911-a846-000d3a385540",
            "text": "DERİNCE",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.75619,
                "lng": 29.83092
            }
        },
        {
            "id": "ac443182-fbc3-e911-a846-000d3a385540",
            "text": "DEVREK",
            "city_id": "a5bb4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.22141,
                "lng": 31.95447
            }
        },
        {
            "id": "b6443182-fbc3-e911-a846-000d3a385540",
            "text": "DİKİLİ",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.0749,
                "lng": 26.8892
            }
        },
        {
            "id": "d6443182-fbc3-e911-a846-000d3a385540",
            "text": "DÖRTDİVAN",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.72076,
                "lng": 32.06248
            }
        },
        {
            "id": "00453182-fbc3-e911-a846-000d3a385540",
            "text": "ELDİVAN",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.52898,
                "lng": 33.49966
            }
        },
        {
            "id": "0e453182-fbc3-e911-a846-000d3a385540",
            "text": "ENEZ",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.72503,
                "lng": 26.08457
            }
        },
        {
            "id": "10453182-fbc3-e911-a846-000d3a385540",
            "text": "ERBAA",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.67273,
                "lng": 36.57125
            }
        },
        {
            "id": "12453182-fbc3-e911-a846-000d3a385540",
            "text": "ERCİŞ",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.02907,
                "lng": 43.35915
            }
        },
        {
            "id": "1c453182-fbc3-e911-a846-000d3a385540",
            "text": "ERFELEK",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.8801,
                "lng": 34.90953
            }
        },
        {
            "id": "26453182-fbc3-e911-a846-000d3a385540",
            "text": "ERZİN",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.95384,
                "lng": 36.20523
            }
        },
        {
            "id": "2a453182-fbc3-e911-a846-000d3a385540",
            "text": "ESENYURT",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.03432,
                "lng": 28.66148
            }
        },
        {
            "id": "2c453182-fbc3-e911-a846-000d3a385540",
            "text": "ESKİL",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.40176,
                "lng": 33.41279
            }
        },
        {
            "id": "2e453182-fbc3-e911-a846-000d3a385540",
            "text": "ESKİPAZAR",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.9445,
                "lng": 32.5322
            }
        },
        {
            "id": "34453182-fbc3-e911-a846-000d3a385540",
            "text": "ETİMESGUT",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.93103,
                "lng": 32.65035
            }
        },
        {
            "id": "3c453182-fbc3-e911-a846-000d3a385540",
            "text": "EYÜPSULTAN",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.18716,
                "lng": 28.88298
            }
        },
        {
            "id": "42453182-fbc3-e911-a846-000d3a385540",
            "text": "FATİH",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.01686,
                "lng": 28.94704
            }
        },
        {
            "id": "4c453182-fbc3-e911-a846-000d3a385540",
            "text": "FETHİYE",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.65924,
                "lng": 29.12635
            }
        },
        {
            "id": "4e453182-fbc3-e911-a846-000d3a385540",
            "text": "FINDIKLI",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.27066,
                "lng": 41.14006
            }
        },
        {
            "id": "50453182-fbc3-e911-a846-000d3a385540",
            "text": "FİNİKE",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.29719,
                "lng": 30.14604
            }
        },
        {
            "id": "54453182-fbc3-e911-a846-000d3a385540",
            "text": "FOÇA",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.67038,
                "lng": 26.75792
            }
        },
        {
            "id": "60453182-fbc3-e911-a846-000d3a385540",
            "text": "GEBZE",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.80252,
                "lng": 29.43979
            }
        },
        {
            "id": "6e453182-fbc3-e911-a846-000d3a385540",
            "text": "GERCÜŞ",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.60407,
                "lng": 41.30119
            }
        },
        {
            "id": "70453182-fbc3-e911-a846-000d3a385540",
            "text": "GEREDE",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.80032,
                "lng": 32.19332
            }
        },
        {
            "id": "76453182-fbc3-e911-a846-000d3a385540",
            "text": "GERZE",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.8006,
                "lng": 35.19201
            }
        },
        {
            "id": "78453182-fbc3-e911-a846-000d3a385540",
            "text": "GEVAŞ",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.2978,
                "lng": 43.1055
            }
        },
        {
            "id": "7e453182-fbc3-e911-a846-000d3a385540",
            "text": "GÖKÇEADA",
            "city_id": "ff6c6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.194,
                "lng": 25.90472
            }
        },
        {
            "id": "84453182-fbc3-e911-a846-000d3a385540",
            "text": "GÖLBAŞI",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.79829,
                "lng": 32.80575
            }
        },
        {
            "id": "94453182-fbc3-e911-a846-000d3a385540",
            "text": "GÖLYAKA",
            "city_id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.77673,
                "lng": 30.99641
            }
        },
        {
            "id": "ac453182-fbc3-e911-a846-000d3a385540",
            "text": "GÜLAĞAÇ",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.39434,
                "lng": 34.34614
            }
        },
        {
            "id": "b4453182-fbc3-e911-a846-000d3a385540",
            "text": "GÜMÜŞOVA",
            "city_id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.8406,
                "lng": 30.91268
            }
        },
        {
            "id": "ce453182-fbc3-e911-a846-000d3a385540",
            "text": "GÜZELYURT",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.27753,
                "lng": 34.37263
            }
        },
        {
            "id": "d2453182-fbc3-e911-a846-000d3a385540",
            "text": "HACILAR",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.64598,
                "lng": 35.45256
            }
        },
        {
            "id": "da453182-fbc3-e911-a846-000d3a385540",
            "text": "HALİLİYE",
            "city_id": "89b34c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.75064,
                "lng": 39.3125
            }
        },
        {
            "id": "f2453182-fbc3-e911-a846-000d3a385540",
            "text": "HASANKEYF",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.71281,
                "lng": 41.41521
            }
        },
        {
            "id": "02463182-fbc3-e911-a846-000d3a385540",
            "text": "HAYRAT",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.88881,
                "lng": 40.36755
            }
        },
        {
            "id": "1a463182-fbc3-e911-a846-000d3a385540",
            "text": "HONAZ",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.75696,
                "lng": 29.26426
            }
        },
        {
            "id": "26463182-fbc3-e911-a846-000d3a385540",
            "text": "ILGAZ",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.92524,
                "lng": 33.62718
            }
        },
        {
            "id": "40463182-fbc3-e911-a846-000d3a385540",
            "text": "İNCİRLİOVA",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.85379,
                "lng": 27.72342
            }
        },
        {
            "id": "4a463182-fbc3-e911-a846-000d3a385540",
            "text": "İPEKYOLU",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.60143,
                "lng": 43.63091
            }
        },
        {
            "id": "50463182-fbc3-e911-a846-000d3a385540",
            "text": "İSKENDERUN",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.58467,
                "lng": 36.17562
            }
        },
        {
            "id": "52463182-fbc3-e911-a846-000d3a385540",
            "text": "İSKİLİP",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.73065,
                "lng": 34.47101
            }
        },
        {
            "id": "5c463182-fbc3-e911-a846-000d3a385540",
            "text": "İZMİT",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.76544,
                "lng": 29.94081
            }
        },
        {
            "id": "64463182-fbc3-e911-a846-000d3a385540",
            "text": "KADIKÖY",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.98187,
                "lng": 29.05763
            }
        },
        {
            "id": "72463182-fbc3-e911-a846-000d3a385540",
            "text": "KAHTA",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.7869,
                "lng": 38.619
            }
        },
        {
            "id": "98463182-fbc3-e911-a846-000d3a385540",
            "text": "KARAKÖPRÜ",
            "city_id": "89b34c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.2808,
                "lng": 38.69492
            }
        },
        {
            "id": "9a463182-fbc3-e911-a846-000d3a385540",
            "text": "KARAMAN",
            "city_id": "e2776368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.18101,
                "lng": 33.22224
            }
        },
        {
            "id": "a4463182-fbc3-e911-a846-000d3a385540",
            "text": "KARASU",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.09562,
                "lng": 30.69236
            }
        },
        {
            "id": "ac463182-fbc3-e911-a846-000d3a385540",
            "text": "KARESİ",
            "city_id": "b9646368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.78484,
                "lng": 27.87803
            }
        },
        {
            "id": "ae463182-fbc3-e911-a846-000d3a385540",
            "text": "KARGI",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.13453,
                "lng": 34.48716
            }
        },
        {
            "id": "b6463182-fbc3-e911-a846-000d3a385540",
            "text": "KARŞIYAKA",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.5184,
                "lng": 27.13824
            }
        },
        {
            "id": "b8463182-fbc3-e911-a846-000d3a385540",
            "text": "KARTAL",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.9184,
                "lng": 29.22046
            }
        },
        {
            "id": "ba463182-fbc3-e911-a846-000d3a385540",
            "text": "KARTEPE",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.75337,
                "lng": 30.02322
            }
        },
        {
            "id": "bc463182-fbc3-e911-a846-000d3a385540",
            "text": "KAŞ",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.19991,
                "lng": 29.63955
            }
        },
        {
            "id": "d0463182-fbc3-e911-a846-000d3a385540",
            "text": "KEÇİBORLU",
            "city_id": "b2756368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.94306,
                "lng": 30.30136
            }
        },
        {
            "id": "e0463182-fbc3-e911-a846-000d3a385540",
            "text": "KEPEZ",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.99348,
                "lng": 30.689
            }
        },
        {
            "id": "e8463182-fbc3-e911-a846-000d3a385540",
            "text": "KEŞAN",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.80143,
                "lng": 26.56099
            }
        },
        {
            "id": "f2463182-fbc3-e911-a846-000d3a385540",
            "text": "KIRIKKALE",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.83978,
                "lng": 33.50888
            }
        },
        {
            "id": "08473182-fbc3-e911-a846-000d3a385540",
            "text": "KOCASİNAN",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.87331,
                "lng": 35.34663
            }
        },
        {
            "id": "0e473182-fbc3-e911-a846-000d3a385540",
            "text": "KONAK",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.41448,
                "lng": 27.14412
            }
        },
        {
            "id": "10473182-fbc3-e911-a846-000d3a385540",
            "text": "KONYAALTI",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.83753,
                "lng": 30.48184
            }
        },
        {
            "id": "14473182-fbc3-e911-a846-000d3a385540",
            "text": "KORGUN",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.73588,
                "lng": 33.51819
            }
        },
        {
            "id": "20473182-fbc3-e911-a846-000d3a385540",
            "text": "KOZAN",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.45212,
                "lng": 35.81927
            }
        },
        {
            "id": "24473182-fbc3-e911-a846-000d3a385540",
            "text": "KOZLUK",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.18929,
                "lng": 41.49054
            }
        },
        {
            "id": "2a473182-fbc3-e911-a846-000d3a385540",
            "text": "KÖRFEZ",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.77638,
                "lng": 29.73772
            }
        },
        {
            "id": "46473182-fbc3-e911-a846-000d3a385540",
            "text": "KUŞADASI",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.85791,
                "lng": 27.26101
            }
        },
        {
            "id": "4a473182-fbc3-e911-a846-000d3a385540",
            "text": "KÜÇÜKÇEKMECE",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.02124,
                "lng": 28.7781
            }
        },
        {
            "id": "50473182-fbc3-e911-a846-000d3a385540",
            "text": "LAÇİN",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.79187,
                "lng": 34.90748
            }
        },
        {
            "id": "69473182-fbc3-e911-a846-000d3a385540",
            "text": "MAÇKA",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.81422,
                "lng": 39.61066
            }
        },
        {
            "id": "73473182-fbc3-e911-a846-000d3a385540",
            "text": "MALATYA",
            "city_id": "717e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.35536,
                "lng": 38.33352
            }
        },
        {
            "id": "79473182-fbc3-e911-a846-000d3a385540",
            "text": "MALTEPE",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.94979,
                "lng": 29.17394
            }
        },
        {
            "id": "89473182-fbc3-e911-a846-000d3a385540",
            "text": "MARMARİS",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.85493,
                "lng": 28.27088
            }
        },
        {
            "id": "8b473182-fbc3-e911-a846-000d3a385540",
            "text": "MAZGİRT",
            "city_id": "89b64c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.01854,
                "lng": 39.60511
            }
        },
        {
            "id": "93473182-fbc3-e911-a846-000d3a385540",
            "text": "MENDERES",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.12041,
                "lng": 27.12647
            }
        },
        {
            "id": "99473182-fbc3-e911-a846-000d3a385540",
            "text": "MENTEŞE",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.2352,
                "lng": 28.43968
            }
        },
        {
            "id": "9b473182-fbc3-e911-a846-000d3a385540",
            "text": "MERAM",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.74302,
                "lng": 32.26539
            }
        },
        {
            "id": "9f473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.86375,
                "lng": 31.23975
            }
        },
        {
            "id": "a1473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.36863,
                "lng": 34.0297
            }
        },
        {
            "id": "a5473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.97623,
                "lng": 27.50375
            }
        },
        {
            "id": "a7473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.95621,
                "lng": 39.73504
            }
        },
        {
            "id": "a9473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.85966,
                "lng": 40.63543
            }
        },
        {
            "id": "ab473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.59725,
                "lng": 43.38949
            }
        },
        {
            "id": "ad473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.72748,
                "lng": 39.42438
            }
        },
        {
            "id": "b9473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.84538,
                "lng": 29.09254
            }
        },
        {
            "id": "bd473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.62404,
                "lng": 29.22627
            }
        },
        {
            "id": "c1473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "057b6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.41996,
                "lng": 29.98573
            }
        },
        {
            "id": "cb473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.2352,
                "lng": 28.43968
            }
        },
        {
            "id": "cd473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.67713,
                "lng": 26.55571
            }
        },
        {
            "id": "cf473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "416f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.73126,
                "lng": 39.1889
            }
        },
        {
            "id": "df473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.94408,
                "lng": 33.19978
            }
        },
        {
            "id": "e9473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.42361,
                "lng": 40.68998
            }
        },
        {
            "id": "f3473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.82389,
                "lng": 27.82088
            }
        },
        {
            "id": "fd473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "77b74c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.72267,
                "lng": 29.27856
            }
        },
        {
            "id": "ff473182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "24796368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.71648,
                "lng": 37.11466
            }
        },
        {
            "id": "03483182-fbc3-e911-a846-000d3a385540",
            "text": "MERKEZ",
            "city_id": "8d856368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.07463,
                "lng": 36.2464
            }
        },
        {
            "id": "17483182-fbc3-e911-a846-000d3a385540",
            "text": "MİDYAT",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.41515,
                "lng": 41.37343
            }
        },
        {
            "id": "41483182-fbc3-e911-a846-000d3a385540",
            "text": "NAZİLLİ",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.90978,
                "lng": 28.32429
            }
        },
        {
            "id": "43483182-fbc3-e911-a846-000d3a385540",
            "text": "NİKSAR",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.59016,
                "lng": 36.95118
            }
        },
        {
            "id": "45483182-fbc3-e911-a846-000d3a385540",
            "text": "NİLÜFER",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.14249,
                "lng": 28.81306
            }
        },
        {
            "id": "47483182-fbc3-e911-a846-000d3a385540",
            "text": "NİZİP",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.00993,
                "lng": 37.79695
            }
        },
        {
            "id": "4f483182-fbc3-e911-a846-000d3a385540",
            "text": "NUSAYBİN",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.06964,
                "lng": 41.214
            }
        },
        {
            "id": "51483182-fbc3-e911-a846-000d3a385540",
            "text": "ODUNPAZARI",
            "city_id": "b36f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.6483,
                "lng": 30.57396
            }
        },
        {
            "id": "53483182-fbc3-e911-a846-000d3a385540",
            "text": "OF",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.92546,
                "lng": 40.28972
            }
        },
        {
            "id": "67483182-fbc3-e911-a846-000d3a385540",
            "text": "ORTAHİSAR",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.95621,
                "lng": 39.73504
            }
        },
        {
            "id": "69483182-fbc3-e911-a846-000d3a385540",
            "text": "ORTAKÖY",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.29117,
                "lng": 35.31263
            }
        },
        {
            "id": "6b483182-fbc3-e911-a846-000d3a385540",
            "text": "OSMANCIK",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.99434,
                "lng": 34.8187
            }
        },
        {
            "id": "6f483182-fbc3-e911-a846-000d3a385540",
            "text": "OSMANGAZİ",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.17945,
                "lng": 29.02272
            }
        },
        {
            "id": "83483182-fbc3-e911-a846-000d3a385540",
            "text": "PALANDÖKEN",
            "city_id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.85696,
                "lng": 41.3547
            }
        },
        {
            "id": "87483182-fbc3-e911-a846-000d3a385540",
            "text": "PAMUKKALE",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.9137,
                "lng": 29.11871
            }
        },
        {
            "id": "9f483182-fbc3-e911-a846-000d3a385540",
            "text": "PENDİK",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.88094,
                "lng": 29.25774
            }
        },
        {
            "id": "a1483182-fbc3-e911-a846-000d3a385540",
            "text": "PERŞEMBE",
            "city_id": "57856368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.06709,
                "lng": 37.77347
            }
        },
        {
            "id": "bf483182-fbc3-e911-a846-000d3a385540",
            "text": "REŞADİYE",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.39241,
                "lng": 37.33603
            }
        },
        {
            "id": "c7483182-fbc3-e911-a846-000d3a385540",
            "text": "SAFRANBOLU",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.24931,
                "lng": 32.68313
            }
        },
        {
            "id": "d9483182-fbc3-e911-a846-000d3a385540",
            "text": "SAPANCA",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.68968,
                "lng": 30.26143
            }
        },
        {
            "id": "f5483182-fbc3-e911-a846-000d3a385540",
            "text": "SARIYER",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.18147,
                "lng": 29.03855
            }
        },
        {
            "id": "fb483182-fbc3-e911-a846-000d3a385540",
            "text": "SASON",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.33398,
                "lng": 41.42014
            }
        },
        {
            "id": "07493182-fbc3-e911-a846-000d3a385540",
            "text": "SELÇUKLU",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.01604,
                "lng": 32.49201
            }
        },
        {
            "id": "0f493182-fbc3-e911-a846-000d3a385540",
            "text": "SERDİVAN",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.7828,
                "lng": 30.32049
            }
        },
        {
            "id": "1b493182-fbc3-e911-a846-000d3a385540",
            "text": "SEYHAN",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.9674,
                "lng": 35.2588
            }
        },
        {
            "id": "2b493182-fbc3-e911-a846-000d3a385540",
            "text": "SİLVAN",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.14122,
                "lng": 41.01281
            }
        },
        {
            "id": "31493182-fbc3-e911-a846-000d3a385540",
            "text": "SİNCAN",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.85445,
                "lng": 32.42407
            }
        },
        {
            "id": "55493182-fbc3-e911-a846-000d3a385540",
            "text": "SULTANBEYLİ",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.96842,
                "lng": 29.26201
            }
        },
        {
            "id": "59493182-fbc3-e911-a846-000d3a385540",
            "text": "SULTANGAZİ",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.12558,
                "lng": 28.87133
            }
        },
        {
            "id": "69493182-fbc3-e911-a846-000d3a385540",
            "text": "SUR",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.05976,
                "lng": 40.3886
            }
        },
        {
            "id": "6f493182-fbc3-e911-a846-000d3a385540",
            "text": "SUSURLUK",
            "city_id": "b9646368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.91391,
                "lng": 28.1569
            }
        },
        {
            "id": "75493182-fbc3-e911-a846-000d3a385540",
            "text": "SÜLEYMANPAŞA",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.96376,
                "lng": 27.40865
            }
        },
        {
            "id": "7f493182-fbc3-e911-a846-000d3a385540",
            "text": "ŞAHİNBEY",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.99074,
                "lng": 37.21158
            }
        },
        {
            "id": "8b493182-fbc3-e911-a846-000d3a385540",
            "text": "ŞARKÖY",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.61516,
                "lng": 27.11365
            }
        },
        {
            "id": "93493182-fbc3-e911-a846-000d3a385540",
            "text": "ŞEHİTKAMİL",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.20312,
                "lng": 37.33998
            }
        },
        {
            "id": "a9493182-fbc3-e911-a846-000d3a385540",
            "text": "TALAS",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.6875,
                "lng": 35.55557
            }
        },
        {
            "id": "bd493182-fbc3-e911-a846-000d3a385540",
            "text": "TAVŞANLI",
            "city_id": "057b6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.547,
                "lng": 29.4914
            }
        },
        {
            "id": "c5493182-fbc3-e911-a846-000d3a385540",
            "text": "TEKKEKÖY",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.179,
                "lng": 36.47363
            }
        },
        {
            "id": "c9493182-fbc3-e911-a846-000d3a385540",
            "text": "TEPEBAŞI",
            "city_id": "b36f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.89988,
                "lng": 30.48184
            }
        },
        {
            "id": "db493182-fbc3-e911-a846-000d3a385540",
            "text": "TORBALI",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.15573,
                "lng": 27.36449
            }
        },
        {
            "id": "f9493182-fbc3-e911-a846-000d3a385540",
            "text": "TÜRKELİ",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.94842,
                "lng": 34.33695
            }
        },
        {
            "id": "ff493182-fbc3-e911-a846-000d3a385540",
            "text": "ULA",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.10215,
                "lng": 28.41776
            }
        },
        {
            "id": "0d4a3182-fbc3-e911-a846-000d3a385540",
            "text": "URLA",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.32497,
                "lng": 26.76681
            }
        },
        {
            "id": "134a3182-fbc3-e911-a846-000d3a385540",
            "text": "ÜMRANİYE",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.03333,
                "lng": 29.10136
            }
        },
        {
            "id": "174a3182-fbc3-e911-a846-000d3a385540",
            "text": "ÜRGÜP",
            "city_id": "61836368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.63117,
                "lng": 34.91218
            }
        },
        {
            "id": "194a3182-fbc3-e911-a846-000d3a385540",
            "text": "ÜSKÜDAR",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.01894,
                "lng": 29.05763
            }
        },
        {
            "id": "214a3182-fbc3-e911-a846-000d3a385540",
            "text": "VEZİRKÖPRÜ",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.14311,
                "lng": 35.46059
            }
        },
        {
            "id": "2b4a3182-fbc3-e911-a846-000d3a385540",
            "text": "YAHŞİHAN",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.8489,
                "lng": 33.45235
            }
        },
        {
            "id": "2f4a3182-fbc3-e911-a846-000d3a385540",
            "text": "YAKAKENT",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.63123,
                "lng": 35.53049
            }
        },
        {
            "id": "314a3182-fbc3-e911-a846-000d3a385540",
            "text": "YAKUTİYE",
            "city_id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.10207,
                "lng": 41.33432
            }
        },
        {
            "id": "434a3182-fbc3-e911-a846-000d3a385540",
            "text": "YAZIHAN",
            "city_id": "717e6368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 38.57644,
                "lng": 38.16609
            }
        },
        {
            "id": "4b4a3182-fbc3-e911-a846-000d3a385540",
            "text": "YENİMAHALLE",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 39.99051,
                "lng": 32.69555
            }
        },
        {
            "id": "5f4a3182-fbc3-e911-a846-000d3a385540",
            "text": "YILDIRIM",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.17871,
                "lng": 29.16232
            }
        },
        {
            "id": "634a3182-fbc3-e911-a846-000d3a385540",
            "text": "YOMRA",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.95402,
                "lng": 39.867
            }
        },
        {
            "id": "6f4a3182-fbc3-e911-a846-000d3a385540",
            "text": "YÜREĞİR",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 36.90759,
                "lng": 35.43436
            }
        },
        {
            "id": "754a3182-fbc3-e911-a846-000d3a385540",
            "text": "ZEYTİNBURNU",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.99063,
                "lng": 28.89614
            }
        },
        {
            "id": "774a3182-fbc3-e911-a846-000d3a385540",
            "text": "ZİLE",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.30185,
                "lng": 35.88672
            }
        },
        {
            "id": "6c4d45db-2ac7-ea11-a812-000d3a38aa47",
            "text": "MERKEZ",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 41.12175,
                "lng": 32.59127
            }
        },
        {
            "id": "cb007064-9000-ea11-a811-000d3a4aa4fd",
            "text": "MERKEZ",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 40.76525,
                "lng": 31.68801
            }
        },
        {
            "id": "62ea84e9-4c1c-ec11-b6e6-6045bd8d201a",
            "text": "MERKEZ",
            "city_id": "b2756368-fac3-e911-a846-000d3a385540",
            "center": {
                "lat": 37.79489,
                "lng": 30.666
            }
        }
    ];
    var accounts = [
        {
            "id": "a39b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "county_id": "cd473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1015",
            "phone": "1234567899",
            "position": {
                "lat": 41.67373,
                "lng": 26.55255
            }
        },
        {
            "id": "a59b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "county_id": "cd473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1016",
            "phone": "1234567900",
            "position": {
                "lat": 41.67052,
                "lng": 26.56344
            }
        },
        {
            "id": "a79b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "county_id": "0e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1017",
            "phone": "1234567901",
            "position": {
                "lat": 40.72461,
                "lng": 26.08332
            }
        },
        {
            "id": "a99b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "county_id": "0e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1018",
            "phone": "1234567902",
            "position": {
                "lat": 40.7243,
                "lng": 26.08198
            }
        },
        {
            "id": "ab9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "county_id": "e8463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1019",
            "phone": "1234567903",
            "position": {
                "lat": 40.85245,
                "lng": 26.63024
            }
        },
        {
            "id": "ad9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e76e6368-fac3-e911-a846-000d3a385540",
            "county_id": "e8463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1020",
            "phone": "1234567904",
            "position": {
                "lat": 40.8569,
                "lng": 26.62288
            }
        },
        {
            "id": "af9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "75493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1021",
            "phone": "1234567905",
            "position": {
                "lat": 40.97691,
                "lng": 27.50761
            }
        },
        {
            "id": "b19b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "a5473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1022",
            "phone": "1234567906",
            "position": {
                "lat": 40.97364,
                "lng": 27.50407
            }
        },
        {
            "id": "b39b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "6e443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1023",
            "phone": "1234567907",
            "position": {
                "lat": 41.15619,
                "lng": 27.81363
            }
        },
        {
            "id": "b59b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "6e443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1024",
            "phone": "1234567908",
            "position": {
                "lat": 41.14557,
                "lng": 27.82245
            }
        },
        {
            "id": "b79b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "6e443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1025",
            "phone": "1234567909",
            "position": {
                "lat": 41.15149,
                "lng": 27.81287
            }
        },
        {
            "id": "b99b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "8b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1026",
            "phone": "1234567910",
            "position": {
                "lat": 40.61175,
                "lng": 27.11287
            }
        },
        {
            "id": "bb9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "8b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1027",
            "phone": "1234567911",
            "position": {
                "lat": 40.61506,
                "lng": 27.11
            }
        },
        {
            "id": "bd9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "8b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1028",
            "phone": "1234567912",
            "position": {
                "lat": 40.61481,
                "lng": 27.11458
            }
        },
        {
            "id": "bf9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "93b44c92-fac3-e911-a846-000d3a385540",
            "county_id": "8b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1029",
            "phone": "1234567913",
            "position": {
                "lat": 40.61557,
                "lng": 27.11339
            }
        },
        {
            "id": "c19b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ff6c6368-fac3-e911-a846-000d3a385540",
            "county_id": "7e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1031",
            "phone": "1234567915",
            "position": {
                "lat": 40.19554,
                "lng": 25.90494
            }
        },
        {
            "id": "c59b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ff6c6368-fac3-e911-a846-000d3a385540",
            "county_id": "7e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1033",
            "phone": "1234567917",
            "position": {
                "lat": 40.20074,
                "lng": 25.91286
            }
        },
        {
            "id": "c79b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ff6c6368-fac3-e911-a846-000d3a385540",
            "county_id": "7e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1034",
            "phone": "1234567918",
            "position": {
                "lat": 40.1988,
                "lng": 25.91326
            }
        },
        {
            "id": "c99b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b9646368-fac3-e911-a846-000d3a385540",
            "county_id": "ac463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1035",
            "phone": "1234567919",
            "position": {
                "lat": 39.65379,
                "lng": 27.90052
            }
        },
        {
            "id": "cb9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b9646368-fac3-e911-a846-000d3a385540",
            "county_id": "ac463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1036",
            "phone": "1234567920",
            "position": {
                "lat": 39.65358,
                "lng": 27.88881
            }
        },
        {
            "id": "cd9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b9646368-fac3-e911-a846-000d3a385540",
            "county_id": "35433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1037",
            "phone": "1234567921",
            "position": {
                "lat": 39.33485,
                "lng": 26.71113
            }
        },
        {
            "id": "cf9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b9646368-fac3-e911-a846-000d3a385540",
            "county_id": "6f493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1038",
            "phone": "1234567922",
            "position": {
                "lat": 39.91512,
                "lng": 28.16114
            }
        },
        {
            "id": "d19b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "county_id": "6f483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1039",
            "phone": "1234567923",
            "position": {
                "lat": 40.1839,
                "lng": 29.06161
            }
        },
        {
            "id": "d39b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "county_id": "45483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1040",
            "phone": "1234567924",
            "position": {
                "lat": 40.21095,
                "lng": 28.99923
            }
        },
        {
            "id": "d59b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "county_id": "45483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1041",
            "phone": "1234567925",
            "position": {
                "lat": 40.15527,
                "lng": 28.709
            }
        },
        {
            "id": "d79b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b36f6368-fac3-e911-a846-000d3a385540",
            "county_id": "51483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1042",
            "phone": "1234567926",
            "position": {
                "lat": 39.75776,
                "lng": 30.53236
            }
        },
        {
            "id": "d99b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b36f6368-fac3-e911-a846-000d3a385540",
            "county_id": "c9493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1043",
            "phone": "1234567927",
            "position": {
                "lat": 39.77671,
                "lng": 30.50586
            }
        },
        {
            "id": "db9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "057b6368-fac3-e911-a846-000d3a385540",
            "county_id": "c1473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1044",
            "phone": "1234567928",
            "position": {
                "lat": 39.42082,
                "lng": 29.98619
            }
        },
        {
            "id": "dd9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "057b6368-fac3-e911-a846-000d3a385540",
            "county_id": "bd493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1045",
            "phone": "1234567929",
            "position": {
                "lat": 39.5494,
                "lng": 29.47457
            }
        },
        {
            "id": "df9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "77b74c92-fac3-e911-a846-000d3a385540",
            "county_id": "fd473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1046",
            "phone": "1234567930",
            "position": {
                "lat": 38.6624,
                "lng": 29.40596
            }
        },
        {
            "id": "e19b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "77b74c92-fac3-e911-a846-000d3a385540",
            "county_id": "5d433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1047",
            "phone": "1234567931",
            "position": {
                "lat": 38.72954,
                "lng": 29.73719
            }
        },
        {
            "id": "e39b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "county_id": "f3473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1048",
            "phone": "1234567932",
            "position": {
                "lat": 37.83543,
                "lng": 27.85406
            }
        },
        {
            "id": "e59b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "county_id": "41483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1049",
            "phone": "1234567933",
            "position": {
                "lat": 37.90389,
                "lng": 28.32224
            }
        },
        {
            "id": "e79b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "county_id": "41483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1050",
            "phone": "1234567934",
            "position": {
                "lat": 37.90212,
                "lng": 28.31794
            }
        },
        {
            "id": "e99b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "county_id": "46473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1051",
            "phone": "1234567935",
            "position": {
                "lat": 37.85271,
                "lng": 27.25515
            }
        },
        {
            "id": "eb9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "county_id": "46473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1052",
            "phone": "1234567936",
            "position": {
                "lat": 37.85068,
                "lng": 27.25899
            }
        },
        {
            "id": "ed9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "county_id": "40463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1053",
            "phone": "1234567937",
            "position": {
                "lat": 37.82592,
                "lng": 27.74191
            }
        },
        {
            "id": "ef9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "30646368-fac3-e911-a846-000d3a385540",
            "county_id": "40463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1054",
            "phone": "1234567938",
            "position": {
                "lat": 37.8333,
                "lng": 27.70819
            }
        },
        {
            "id": "f19b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "county_id": "87483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1055",
            "phone": "1234567939",
            "position": {
                "lat": 37.77756,
                "lng": 29.09903
            }
        },
        {
            "id": "f39b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "county_id": "87483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1056",
            "phone": "1234567940",
            "position": {
                "lat": 37.77756,
                "lng": 29.09903
            }
        },
        {
            "id": "f59b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "county_id": "b9473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1057",
            "phone": "1234567941",
            "position": {
                "lat": 37.77814,
                "lng": 29.10271
            }
        },
        {
            "id": "f79b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "county_id": "1a463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1058",
            "phone": "1234567942",
            "position": {
                "lat": 37.75912,
                "lng": 29.26663
            }
        },
        {
            "id": "f99b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a76d6368-fac3-e911-a846-000d3a385540",
            "county_id": "1a463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1059",
            "phone": "1234567943",
            "position": {
                "lat": 37.7609,
                "lng": 29.26549
            }
        },
        {
            "id": "fb9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "cb473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1060",
            "phone": "1234567944",
            "position": {
                "lat": 37.21266,
                "lng": 28.36589
            }
        },
        {
            "id": "fd9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "99473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1061",
            "phone": "1234567945",
            "position": {
                "lat": 37.21612,
                "lng": 28.35282
            }
        },
        {
            "id": "ff9b1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "ff493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1062",
            "phone": "1234567946",
            "position": {
                "lat": 37.0538,
                "lng": 28.3222
            }
        },
        {
            "id": "019c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "89473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1063",
            "phone": "1234567947",
            "position": {
                "lat": 36.85185,
                "lng": 28.26424
            }
        },
        {
            "id": "039c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "8a443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1064",
            "phone": "1234567948",
            "position": {
                "lat": 36.7285,
                "lng": 27.68644
            }
        },
        {
            "id": "059c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "8a443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1065",
            "phone": "1234567949",
            "position": {
                "lat": 36.72277,
                "lng": 27.68772
            }
        },
        {
            "id": "079c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "4c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1066",
            "phone": "1234567950",
            "position": {
                "lat": 36.65893,
                "lng": 29.13207
            }
        },
        {
            "id": "099c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "4c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1067",
            "phone": "1234567951",
            "position": {
                "lat": 36.6604,
                "lng": 29.11967
            }
        },
        {
            "id": "0b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "de816368-fac3-e911-a846-000d3a385540",
            "county_id": "4c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1068",
            "phone": "1234567952",
            "position": {
                "lat": 36.65899,
                "lng": 29.12045
            }
        },
        {
            "id": "0d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "bc463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1069",
            "phone": "1234567953",
            "position": {
                "lat": 36.20163,
                "lng": 29.63823
            }
        },
        {
            "id": "0f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "bc463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1070",
            "phone": "1234567954",
            "position": {
                "lat": 36.19877,
                "lng": 29.65269
            }
        },
        {
            "id": "119c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "bc463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1071",
            "phone": "1234567955",
            "position": {
                "lat": 36.19941,
                "lng": 29.65479
            }
        },
        {
            "id": "139c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "50453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1072",
            "phone": "1234567956",
            "position": {
                "lat": 36.30314,
                "lng": 30.14998
            }
        },
        {
            "id": "159c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "50453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1073",
            "phone": "1234567957",
            "position": {
                "lat": 36.29415,
                "lng": 30.14724
            }
        },
        {
            "id": "179c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "e0463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1074",
            "phone": "1234567958",
            "position": {
                "lat": 36.92263,
                "lng": 30.72723
            }
        },
        {
            "id": "199c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "10473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1075",
            "phone": "1234567959",
            "position": {
                "lat": 36.88103,
                "lng": 30.65327
            }
        },
        {
            "id": "1b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "c3423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1076",
            "phone": "1234567960",
            "position": {
                "lat": 36.54875,
                "lng": 32.00046
            }
        },
        {
            "id": "1d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6626368-fac3-e911-a846-000d3a385540",
            "county_id": "c3423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1077",
            "phone": "1234567961",
            "position": {
                "lat": 36.54759,
                "lng": 31.99293
            }
        },
        {
            "id": "1f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b2756368-fac3-e911-a846-000d3a385540",
            "county_id": "62ea84e9-4c1c-ec11-b6e6-6045bd8d201a",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1078",
            "phone": "1234567962",
            "position": {
                "lat": 37.76794,
                "lng": 30.55149
            }
        },
        {
            "id": "219c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b2756368-fac3-e911-a846-000d3a385540",
            "county_id": "62ea84e9-4c1c-ec11-b6e6-6045bd8d201a",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1079",
            "phone": "1234567963",
            "position": {
                "lat": 37.76814,
                "lng": 30.51921
            }
        },
        {
            "id": "259c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "b2756368-fac3-e911-a846-000d3a385540",
            "county_id": "d0463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1081",
            "phone": "1234567965",
            "position": {
                "lat": 37.81921,
                "lng": 30.30081
            }
        },
        {
            "id": "279c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e2776368-fac3-e911-a846-000d3a385540",
            "county_id": "9a463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1082",
            "phone": "1234567966",
            "position": {
                "lat": 37.17318,
                "lng": 33.22259
            }
        },
        {
            "id": "299c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "e2776368-fac3-e911-a846-000d3a385540",
            "county_id": "9a463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1083",
            "phone": "1234567967",
            "position": {
                "lat": 37.18644,
                "lng": 33.21362
            }
        },
        {
            "id": "319c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "county_id": "07493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1087",
            "phone": "1234567971",
            "position": {
                "lat": 37.8978,
                "lng": 32.40018
            }
        },
        {
            "id": "339c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "county_id": "07493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1088",
            "phone": "1234567972",
            "position": {
                "lat": 37.90181,
                "lng": 32.40478
            }
        },
        {
            "id": "359c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "county_id": "07493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1089",
            "phone": "1234567973",
            "position": {
                "lat": 37.88942,
                "lng": 32.49316
            }
        },
        {
            "id": "379c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "county_id": "9b473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1090",
            "phone": "1234567974",
            "position": {
                "lat": 37.70427,
                "lng": 32.58141
            }
        },
        {
            "id": "399c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "county_id": "9b473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1091",
            "phone": "1234567975",
            "position": {
                "lat": 37.70002,
                "lng": 32.58438
            }
        },
        {
            "id": "3b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "217a6368-fac3-e911-a846-000d3a385540",
            "county_id": "9b473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1092",
            "phone": "1234567976",
            "position": {
                "lat": 37.70878,
                "lng": 32.59383
            }
        },
        {
            "id": "3d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "a1473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1093",
            "phone": "1234567977",
            "position": {
                "lat": 38.35886,
                "lng": 34.0405
            }
        },
        {
            "id": "3f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "a1473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1094",
            "phone": "1234567978",
            "position": {
                "lat": 38.37577,
                "lng": 34.04222
            }
        },
        {
            "id": "419c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "a1473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1095",
            "phone": "1234567979",
            "position": {
                "lat": 38.37054,
                "lng": 33.9978
            }
        },
        {
            "id": "459c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "ce453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1097",
            "phone": "1234567981",
            "position": {
                "lat": 38.27578,
                "lng": 34.37103
            }
        },
        {
            "id": "479c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "ce453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1098",
            "phone": "1234567982",
            "position": {
                "lat": 38.27374,
                "lng": 34.37588
            }
        },
        {
            "id": "499c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "ac453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1099",
            "phone": "1234567983",
            "position": {
                "lat": 38.39497,
                "lng": 34.34777
            }
        },
        {
            "id": "4b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "ac453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1100",
            "phone": "1234567984",
            "position": {
                "lat": 38.39188,
                "lng": 34.34561
            }
        },
        {
            "id": "4d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "ac453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1101",
            "phone": "1234567985",
            "position": {
                "lat": 38.37796,
                "lng": 34.28516
            }
        },
        {
            "id": "4f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "2c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1102",
            "phone": "1234567986",
            "position": {
                "lat": 38.39301,
                "lng": 33.41974
            }
        },
        {
            "id": "519c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "2c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1103",
            "phone": "1234567987",
            "position": {
                "lat": 38.39502,
                "lng": 33.41313
            }
        },
        {
            "id": "539c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "69483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1104",
            "phone": "1234567988",
            "position": {
                "lat": 38.7362,
                "lng": 34.04014
            }
        },
        {
            "id": "559c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "69483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1105",
            "phone": "1234567989",
            "position": {
                "lat": 38.73787,
                "lng": 34.03656
            }
        },
        {
            "id": "579c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "56616368-fac3-e911-a846-000d3a385540",
            "county_id": "69483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1106",
            "phone": "1234567990",
            "position": {
                "lat": 38.73845,
                "lng": 34.04248
            }
        },
        {
            "id": "599c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "17443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1107",
            "phone": "1234567991",
            "position": {
                "lat": 39.92284,
                "lng": 32.8391
            }
        },
        {
            "id": "5b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "34453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1108",
            "phone": "1234567992",
            "position": {
                "lat": 39.93853,
                "lng": 32.79649
            }
        },
        {
            "id": "5d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "d3423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1109",
            "phone": "1234567993",
            "position": {
                "lat": 39.93821,
                "lng": 32.8619
            }
        },
        {
            "id": "5f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "31493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1110",
            "phone": "1234567994",
            "position": {
                "lat": 39.96519,
                "lng": 32.58751
            }
        },
        {
            "id": "619c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "31493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1111",
            "phone": "1234567995",
            "position": {
                "lat": 39.96475,
                "lng": 32.59756
            }
        },
        {
            "id": "639c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "84453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1112",
            "phone": "1234567996",
            "position": {
                "lat": 39.78923,
                "lng": 32.80523
            }
        },
        {
            "id": "659c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "84453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1113",
            "phone": "1234567997",
            "position": {
                "lat": 39.78752,
                "lng": 32.8434
            }
        },
        {
            "id": "679c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "county_id": "f2463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1114",
            "phone": "1234567998",
            "position": {
                "lat": 39.83196,
                "lng": 33.55516
            }
        },
        {
            "id": "699c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "county_id": "2b4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1115",
            "phone": "1234567999",
            "position": {
                "lat": 39.85593,
                "lng": 33.48134
            }
        },
        {
            "id": "6b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "county_id": "2b4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1116",
            "phone": "1234568000",
            "position": {
                "lat": 39.92085,
                "lng": 33.43522
            }
        },
        {
            "id": "6d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "county_id": "59433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1117",
            "phone": "1234568001",
            "position": {
                "lat": 39.90961,
                "lng": 33.71862
            }
        },
        {
            "id": "6f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "f8786368-fac3-e911-a846-000d3a385540",
            "county_id": "59433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1118",
            "phone": "1234568002",
            "position": {
                "lat": 39.90939,
                "lng": 33.71829
            }
        },
        {
            "id": "719c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "county_id": "df473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1119",
            "phone": "1234568003",
            "position": {
                "lat": 40.59909,
                "lng": 33.61511
            }
        },
        {
            "id": "739c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "county_id": "df473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1120",
            "phone": "1234568004",
            "position": {
                "lat": 40.59514,
                "lng": 33.62143
            }
        },
        {
            "id": "759c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "county_id": "14473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1121",
            "phone": "1234568005",
            "position": {
                "lat": 40.72904,
                "lng": 33.51567
            }
        },
        {
            "id": "779c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "county_id": "00453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1122",
            "phone": "1234568006",
            "position": {
                "lat": 40.58726,
                "lng": 33.49986
            }
        },
        {
            "id": "799c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "016d6368-fac3-e911-a846-000d3a385540",
            "county_id": "26463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1123",
            "phone": "1234568007",
            "position": {
                "lat": 40.92207,
                "lng": 33.62492
            }
        },
        {
            "id": "7d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "county_id": "cb007064-9000-ea11-a811-000d3a4aa4fd",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1125",
            "phone": "1234568009",
            "position": {
                "lat": 40.73716,
                "lng": 31.59354
            }
        },
        {
            "id": "7f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "county_id": "cb007064-9000-ea11-a811-000d3a4aa4fd",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1126",
            "phone": "1234568010",
            "position": {
                "lat": 40.73813,
                "lng": 31.58313
            }
        },
        {
            "id": "819c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "county_id": "d6443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1127",
            "phone": "1234568011",
            "position": {
                "lat": 40.71926,
                "lng": 32.06424
            }
        },
        {
            "id": "839c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "county_id": "d6443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1128",
            "phone": "1234568012",
            "position": {
                "lat": 40.72001,
                "lng": 32.06166
            }
        },
        {
            "id": "859c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "county_id": "70453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1129",
            "phone": "1234568013",
            "position": {
                "lat": 40.79231,
                "lng": 32.20915
            }
        },
        {
            "id": "879c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "79676368-fac3-e911-a846-000d3a385540",
            "county_id": "70453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1130",
            "phone": "1234568014",
            "position": {
                "lat": 40.79918,
                "lng": 32.17928
            }
        },
        {
            "id": "899c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "94453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1131",
            "phone": "1234568015",
            "position": {
                "lat": 40.77504,
                "lng": 30.99807
            }
        },
        {
            "id": "8b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "9f473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1132",
            "phone": "1234568016",
            "position": {
                "lat": 40.84071,
                "lng": 31.15264
            }
        },
        {
            "id": "8d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "9f473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1133",
            "phone": "1234568017",
            "position": {
                "lat": 40.85608,
                "lng": 31.14159
            }
        },
        {
            "id": "919c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bf6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "b4453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1135",
            "phone": "1234568019",
            "position": {
                "lat": 40.84539,
                "lng": 30.93453
            }
        },
        {
            "id": "939c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "d9483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1136",
            "phone": "1234568020",
            "position": {
                "lat": 40.69727,
                "lng": 30.21538
            }
        },
        {
            "id": "959c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "d9483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1137",
            "phone": "1234568021",
            "position": {
                "lat": 40.687,
                "lng": 30.29275
            }
        },
        {
            "id": "979c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "7f423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1138",
            "phone": "1234568022",
            "position": {
                "lat": 40.78604,
                "lng": 30.41309
            }
        },
        {
            "id": "999c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "7f423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1139",
            "phone": "1234568023",
            "position": {
                "lat": 40.79269,
                "lng": 30.39489
            }
        },
        {
            "id": "9b9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "0f493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1140",
            "phone": "1234568024",
            "position": {
                "lat": 40.74916,
                "lng": 30.35302
            }
        },
        {
            "id": "9d9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "a4463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1141",
            "phone": "1234568025",
            "position": {
                "lat": 41.09744,
                "lng": 30.69442
            }
        },
        {
            "id": "9f9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "33ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "a4463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1142",
            "phone": "1234568026",
            "position": {
                "lat": 41.1054,
                "lng": 30.69391
            }
        },
        {
            "id": "a19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "60453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1143",
            "phone": "1234568027",
            "position": {
                "lat": 40.79887,
                "lng": 29.38955
            }
        },
        {
            "id": "a39c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "60453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1144",
            "phone": "1234568028",
            "position": {
                "lat": 40.79633,
                "lng": 29.44222
            }
        },
        {
            "id": "a59c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "2a473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1145",
            "phone": "1234568029",
            "position": {
                "lat": 40.76893,
                "lng": 29.75555
            }
        },
        {
            "id": "a79c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "a4443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1146",
            "phone": "1234568030",
            "position": {
                "lat": 40.75749,
                "lng": 29.83023
            }
        },
        {
            "id": "a99c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "a4443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1147",
            "phone": "1234568031",
            "position": {
                "lat": 40.77032,
                "lng": 29.82259
            }
        },
        {
            "id": "ab9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "5c463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1148",
            "phone": "1234568032",
            "position": {
                "lat": 40.75978,
                "lng": 29.90526
            }
        },
        {
            "id": "ad9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "5c463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1149",
            "phone": "1234568033",
            "position": {
                "lat": 40.76176,
                "lng": 29.93677
            }
        },
        {
            "id": "af9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "ba463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1150",
            "phone": "1234568034",
            "position": {
                "lat": 40.75183,
                "lng": 30.02783
            }
        },
        {
            "id": "b19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "ba463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1151",
            "phone": "1234568035",
            "position": {
                "lat": 40.73354,
                "lng": 30.03047
            }
        },
        {
            "id": "b39c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a5bb4c92-fac3-e911-a846-000d3a385540",
            "county_id": "ac443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1154",
            "phone": "1234568038",
            "position": {
                "lat": 41.21772,
                "lng": 31.95545
            }
        },
        {
            "id": "b59c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a5bb4c92-fac3-e911-a846-000d3a385540",
            "county_id": "ac443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1155",
            "phone": "1234568039",
            "position": {
                "lat": 41.21967,
                "lng": 31.95919
            }
        },
        {
            "id": "bb9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a5bb4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1158",
            "phone": "1234568042",
            "position": {
                "lat": 41.17905,
                "lng": 31.39333
            }
        },
        {
            "id": "bd9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "a5bb4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1159",
            "phone": "1234568043",
            "position": {
                "lat": 41.18193,
                "lng": 31.39342
            }
        },
        {
            "id": "bf9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "county_id": "6c4d45db-2ac7-ea11-a812-000d3a38aa47",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1160",
            "phone": "1234568044",
            "position": {
                "lat": 41.20838,
                "lng": 32.65582
            }
        },
        {
            "id": "c19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "county_id": "6c4d45db-2ac7-ea11-a812-000d3a38aa47",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1161",
            "phone": "1234568045",
            "position": {
                "lat": 41.20308,
                "lng": 32.62646
            }
        },
        {
            "id": "c39c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "county_id": "c7483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1162",
            "phone": "1234568046",
            "position": {
                "lat": 41.24754,
                "lng": 32.6856
            }
        },
        {
            "id": "c59c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "county_id": "c7483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1163",
            "phone": "1234568047",
            "position": {
                "lat": 41.25841,
                "lng": 32.67467
            }
        },
        {
            "id": "c79c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "county_id": "2e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1164",
            "phone": "1234568048",
            "position": {
                "lat": 40.94001,
                "lng": 32.52638
            }
        },
        {
            "id": "c99c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "da776368-fac3-e911-a846-000d3a385540",
            "county_id": "2e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1165",
            "phone": "1234568049",
            "position": {
                "lat": 40.94749,
                "lng": 32.53427
            }
        },
        {
            "id": "cb9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "61836368-fac3-e911-a846-000d3a385540",
            "county_id": "25433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1169",
            "phone": "1234568053",
            "position": {
                "lat": 38.71692,
                "lng": 34.86935
            }
        },
        {
            "id": "cd9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "61836368-fac3-e911-a846-000d3a385540",
            "county_id": "174a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1170",
            "phone": "1234568054",
            "position": {
                "lat": 38.63177,
                "lng": 34.9102
            }
        },
        {
            "id": "cf9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "61836368-fac3-e911-a846-000d3a385540",
            "county_id": "174a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1171",
            "phone": "1234568055",
            "position": {
                "lat": 38.62725,
                "lng": 34.91442
            }
        },
        {
            "id": "d19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "county_id": "a9493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1172",
            "phone": "1234568056",
            "position": {
                "lat": 38.67889,
                "lng": 35.56987
            }
        },
        {
            "id": "d39c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "county_id": "a9493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1173",
            "phone": "1234568057",
            "position": {
                "lat": 38.68615,
                "lng": 35.56524
            }
        },
        {
            "id": "d59c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "county_id": "08473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1174",
            "phone": "1234568058",
            "position": {
                "lat": 38.79903,
                "lng": 35.53008
            }
        },
        {
            "id": "d79c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "county_id": "08473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1175",
            "phone": "1234568059",
            "position": {
                "lat": 38.79469,
                "lng": 35.54078
            }
        },
        {
            "id": "d99c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "county_id": "d2453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1176",
            "phone": "1234568060",
            "position": {
                "lat": 38.64426,
                "lng": 35.45135
            }
        },
        {
            "id": "db9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "72786368-fac3-e911-a846-000d3a385540",
            "county_id": "d2453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1177",
            "phone": "1234568061",
            "position": {
                "lat": 38.64267,
                "lng": 35.45625
            }
        },
        {
            "id": "dd9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "1b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1178",
            "phone": "1234568062",
            "position": {
                "lat": 36.98265,
                "lng": 35.30292
            }
        },
        {
            "id": "df9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "1b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1179",
            "phone": "1234568063",
            "position": {
                "lat": 36.99395,
                "lng": 35.30773
            }
        },
        {
            "id": "e19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "6f4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1180",
            "phone": "1234568064",
            "position": {
                "lat": 37.00462,
                "lng": 35.36263
            }
        },
        {
            "id": "e39c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "76443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1181",
            "phone": "1234568065",
            "position": {
                "lat": 37.05353,
                "lng": 35.2183
            }
        },
        {
            "id": "e59c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "76443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1182",
            "phone": "1234568066",
            "position": {
                "lat": 37.05053,
                "lng": 35.22294
            }
        },
        {
            "id": "e79c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "6f4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1183",
            "phone": "1234568067",
            "position": {
                "lat": 37.00729,
                "lng": 35.35508
            }
        },
        {
            "id": "e99c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "20473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1184",
            "phone": "1234568068",
            "position": {
                "lat": 37.45507,
                "lng": 35.84157
            }
        },
        {
            "id": "eb9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "fc606368-fac3-e911-a846-000d3a385540",
            "county_id": "20473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1185",
            "phone": "1234568069",
            "position": {
                "lat": 37.4537,
                "lng": 35.82462
            }
        },
        {
            "id": "ed9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "8d856368-fac3-e911-a846-000d3a385540",
            "county_id": "03483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1186",
            "phone": "1234568070",
            "position": {
                "lat": 37.07487,
                "lng": 36.25107
            }
        },
        {
            "id": "ef9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "26453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1187",
            "phone": "1234568071",
            "position": {
                "lat": 36.956,
                "lng": 36.19838
            }
        },
        {
            "id": "f19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "11433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1188",
            "phone": "1234568072",
            "position": {
                "lat": 36.54889,
                "lng": 36.12003
            }
        },
        {
            "id": "f39c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "11433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1189",
            "phone": "1234568073",
            "position": {
                "lat": 36.56545,
                "lng": 36.13824
            }
        },
        {
            "id": "f59c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "50463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1190",
            "phone": "1234568074",
            "position": {
                "lat": 36.57894,
                "lng": 36.17786
            }
        },
        {
            "id": "f79c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "50463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1191",
            "phone": "1234568075",
            "position": {
                "lat": 36.59312,
                "lng": 36.15961
            }
        },
        {
            "id": "f99c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "ed423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1192",
            "phone": "1234568076",
            "position": {
                "lat": 36.19889,
                "lng": 36.16239
            }
        },
        {
            "id": "fb9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "8e443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1193",
            "phone": "1234568077",
            "position": {
                "lat": 36.20594,
                "lng": 36.13271
            }
        },
        {
            "id": "fd9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "be736368-fac3-e911-a846-000d3a385540",
            "county_id": "ed423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1194",
            "phone": "1234568078",
            "position": {
                "lat": 36.22044,
                "lng": 36.18567
            }
        },
        {
            "id": "ff9c1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "county_id": "93493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1195",
            "phone": "1234568079",
            "position": {
                "lat": 37.07927,
                "lng": 37.36712
            }
        },
        {
            "id": "019d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "county_id": "7f493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1196",
            "phone": "1234568080",
            "position": {
                "lat": 37.01731,
                "lng": 37.37999
            }
        },
        {
            "id": "039d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "county_id": "93493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1197",
            "phone": "1234568081",
            "position": {
                "lat": 37.06486,
                "lng": 37.33371
            }
        },
        {
            "id": "059d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "county_id": "47483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1198",
            "phone": "1234568082",
            "position": {
                "lat": 37.00336,
                "lng": 37.79745
            }
        },
        {
            "id": "079d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "county_id": "47483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1199",
            "phone": "1234568083",
            "position": {
                "lat": 37.00272,
                "lng": 37.80665
            }
        },
        {
            "id": "099d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "5a716368-fac3-e911-a846-000d3a385540",
            "county_id": "47483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1200",
            "phone": "1234568084",
            "position": {
                "lat": 37.00894,
                "lng": 37.80066
            }
        },
        {
            "id": "0b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "24796368-fac3-e911-a846-000d3a385540",
            "county_id": "ff473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1201",
            "phone": "1234568085",
            "position": {
                "lat": 36.71305,
                "lng": 37.13126
            }
        },
        {
            "id": "0d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "24796368-fac3-e911-a846-000d3a385540",
            "county_id": "ff473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1202",
            "phone": "1234568086",
            "position": {
                "lat": 36.71634,
                "lng": 37.13676
            }
        },
        {
            "id": "0f9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "24796368-fac3-e911-a846-000d3a385540",
            "county_id": "ff473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1203",
            "phone": "1234568087",
            "position": {
                "lat": 36.72068,
                "lng": 37.11068
            }
        },
        {
            "id": "139d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "89b34c92-fac3-e911-a846-000d3a385540",
            "county_id": "da453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1206",
            "phone": "1234568090",
            "position": {
                "lat": 37.1645,
                "lng": 38.77178
            }
        },
        {
            "id": "179d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "89b34c92-fac3-e911-a846-000d3a385540",
            "county_id": "98463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1208",
            "phone": "1234568092",
            "position": {
                "lat": 37.21358,
                "lng": 38.76456
            }
        },
        {
            "id": "1b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "89b34c92-fac3-e911-a846-000d3a385540",
            "county_id": "da453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1210",
            "phone": "1234568094",
            "position": {
                "lat": 37.14725,
                "lng": 38.80322
            }
        },
        {
            "id": "1d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "89b34c92-fac3-e911-a846-000d3a385540",
            "county_id": "da453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1211",
            "phone": "1234568095",
            "position": {
                "lat": 37.15708,
                "lng": 38.8094
            }
        },
        {
            "id": "1f9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "89b34c92-fac3-e911-a846-000d3a385540",
            "county_id": "98463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1212",
            "phone": "1234568096",
            "position": {
                "lat": 37.33604,
                "lng": 38.79976
            }
        },
        {
            "id": "219d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "county_id": "72463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1215",
            "phone": "1234568099",
            "position": {
                "lat": 37.78083,
                "lng": 38.62854
            }
        },
        {
            "id": "239d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "county_id": "72463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1216",
            "phone": "1234568100",
            "position": {
                "lat": 37.77348,
                "lng": 38.6222
            }
        },
        {
            "id": "259d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "county_id": "72463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1217",
            "phone": "1234568101",
            "position": {
                "lat": 37.78275,
                "lng": 38.61153
            }
        },
        {
            "id": "279d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "county_id": "87433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1218",
            "phone": "1234568102",
            "position": {
                "lat": 37.69228,
                "lng": 37.86439
            }
        },
        {
            "id": "299d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "county_id": "87433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1219",
            "phone": "1234568103",
            "position": {
                "lat": 37.69051,
                "lng": 37.85317
            }
        },
        {
            "id": "2b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "county_id": "87433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1220",
            "phone": "1234568104",
            "position": {
                "lat": 37.69059,
                "lng": 37.86382
            }
        },
        {
            "id": "2d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "717e6368-fac3-e911-a846-000d3a385540",
            "county_id": "73473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1221",
            "phone": "1234568105",
            "position": {
                "lat": 38.31742,
                "lng": 38.31554
            }
        },
        {
            "id": "359d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "717e6368-fac3-e911-a846-000d3a385540",
            "county_id": "73473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1225",
            "phone": "1234568109",
            "position": {
                "lat": 38.33061,
                "lng": 38.27532
            }
        },
        {
            "id": "379d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "717e6368-fac3-e911-a846-000d3a385540",
            "county_id": "434a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1226",
            "phone": "1234568110",
            "position": {
                "lat": 38.59571,
                "lng": 38.17957
            }
        },
        {
            "id": "399d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "717e6368-fac3-e911-a846-000d3a385540",
            "county_id": "434a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1227",
            "phone": "1234568111",
            "position": {
                "lat": 38.59576,
                "lng": 38.18008
            }
        },
        {
            "id": "3b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "717e6368-fac3-e911-a846-000d3a385540",
            "county_id": "434a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1228",
            "phone": "1234568112",
            "position": {
                "lat": 38.59851,
                "lng": 38.17976
            }
        },
        {
            "id": "3d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "416f6368-fac3-e911-a846-000d3a385540",
            "county_id": "cf473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1238",
            "phone": "1234568122",
            "position": {
                "lat": 38.6783,
                "lng": 39.22588
            }
        },
        {
            "id": "439d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "89b64c92-fac3-e911-a846-000d3a385540",
            "county_id": "8b473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1241",
            "phone": "1234568125",
            "position": {
                "lat": 39.01809,
                "lng": 39.6056
            }
        },
        {
            "id": "459d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "89b64c92-fac3-e911-a846-000d3a385540",
            "county_id": "8b473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1242",
            "phone": "1234568126",
            "position": {
                "lat": 39.01809,
                "lng": 39.6056
            }
        },
        {
            "id": "479d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "ad473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1243",
            "phone": "1234568127",
            "position": {
                "lat": 39.74721,
                "lng": 39.48558
            }
        },
        {
            "id": "499d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "ad473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1244",
            "phone": "1234568128",
            "position": {
                "lat": 39.74105,
                "lng": 39.51476
            }
        },
        {
            "id": "4b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "ad473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1245",
            "phone": "1234568129",
            "position": {
                "lat": 39.74987,
                "lng": 39.49013
            }
        },
        {
            "id": "4d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "ad473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1246",
            "phone": "1234568130",
            "position": {
                "lat": 39.76105,
                "lng": 39.51114
            }
        },
        {
            "id": "4f9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "ad473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1247",
            "phone": "1234568131",
            "position": {
                "lat": 39.76715,
                "lng": 39.48423
            }
        },
        {
            "id": "519d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9d6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "ad473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1248",
            "phone": "1234568132",
            "position": {
                "lat": 39.75515,
                "lng": 39.47896
            }
        },
        {
            "id": "539d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "314a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1249",
            "phone": "1234568133",
            "position": {
                "lat": 39.90619,
                "lng": 41.27861
            }
        },
        {
            "id": "559d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "39433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1250",
            "phone": "1234568134",
            "position": {
                "lat": 39.91529,
                "lng": 41.19509
            }
        },
        {
            "id": "579d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "83483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1251",
            "phone": "1234568135",
            "position": {
                "lat": 39.89007,
                "lng": 41.26715
            }
        },
        {
            "id": "599d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "9f6f6368-fac3-e911-a846-000d3a385540",
            "county_id": "83483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1252",
            "phone": "1234568136",
            "position": {
                "lat": 39.87661,
                "lng": 41.24967
            }
        },
        {
            "id": "5b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "a7473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1253",
            "phone": "1234568137",
            "position": {
                "lat": 40.99746,
                "lng": 39.68999
            }
        },
        {
            "id": "5d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "67483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1254",
            "phone": "1234568138",
            "position": {
                "lat": 40.98257,
                "lng": 39.73429
            }
        },
        {
            "id": "619d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "93423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1256",
            "phone": "1234568140",
            "position": {
                "lat": 41.02722,
                "lng": 39.56445
            }
        },
        {
            "id": "659d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "69473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1258",
            "phone": "1234568142",
            "position": {
                "lat": 40.81038,
                "lng": 39.60931
            }
        },
        {
            "id": "679d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "county_id": "a9473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1259",
            "phone": "1234568143",
            "position": {
                "lat": 41.02631,
                "lng": 40.51489
            }
        },
        {
            "id": "699d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "county_id": "a9473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1260",
            "phone": "1234568144",
            "position": {
                "lat": 41.04598,
                "lng": 40.58271
            }
        },
        {
            "id": "6b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "county_id": "33443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1261",
            "phone": "1234568145",
            "position": {
                "lat": 41.08667,
                "lng": 40.72863
            }
        },
        {
            "id": "6d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "county_id": "ff423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1262",
            "phone": "1234568146",
            "position": {
                "lat": 41.189,
                "lng": 40.96513
            }
        },
        {
            "id": "6f9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "county_id": "ff423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1263",
            "phone": "1234568147",
            "position": {
                "lat": 41.19121,
                "lng": 40.98575
            }
        },
        {
            "id": "719d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "68ad4c92-fac3-e911-a846-000d3a385540",
            "county_id": "4e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1264",
            "phone": "1234568148",
            "position": {
                "lat": 41.27021,
                "lng": 41.14478
            }
        },
        {
            "id": "759d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "county_id": "15433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1266",
            "phone": "1234568150",
            "position": {
                "lat": 37.32184,
                "lng": 40.72374
            }
        },
        {
            "id": "779d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "county_id": "e9473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1267",
            "phone": "1234568151",
            "position": {
                "lat": 37.31544,
                "lng": 40.73896
            }
        },
        {
            "id": "799d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "county_id": "4f483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1268",
            "phone": "1234568152",
            "position": {
                "lat": 37.08518,
                "lng": 41.22543
            }
        },
        {
            "id": "7b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "county_id": "4f483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1269",
            "phone": "1234568153",
            "position": {
                "lat": 37.0812,
                "lng": 41.23347
            }
        },
        {
            "id": "7d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "county_id": "17483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1270",
            "phone": "1234568154",
            "position": {
                "lat": 37.41693,
                "lng": 41.34304
            }
        },
        {
            "id": "7f9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "117f6368-fac3-e911-a846-000d3a385540",
            "county_id": "17483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1271",
            "phone": "1234568155",
            "position": {
                "lat": 37.42104,
                "lng": 41.35304
            }
        },
        {
            "id": "839d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "43433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1273",
            "phone": "1234568157",
            "position": {
                "lat": 37.91851,
                "lng": 40.20768
            }
        },
        {
            "id": "859d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "43433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1274",
            "phone": "1234568158",
            "position": {
                "lat": 37.92713,
                "lng": 40.18454
            }
        },
        {
            "id": "879d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "69493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1275",
            "phone": "1234568159",
            "position": {
                "lat": 37.84329,
                "lng": 40.2317
            }
        },
        {
            "id": "899d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "69493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1276",
            "phone": "1234568160",
            "position": {
                "lat": 37.84091,
                "lng": 40.23088
            }
        },
        {
            "id": "8b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "2b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1277",
            "phone": "1234568161",
            "position": {
                "lat": 38.14396,
                "lng": 41.01028
            }
        },
        {
            "id": "8d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "1b6e6368-fac3-e911-a846-000d3a385540",
            "county_id": "2b493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1278",
            "phone": "1234568162",
            "position": {
                "lat": 38.14234,
                "lng": 41.00611
            }
        },
        {
            "id": "8f9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "4a463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1279",
            "phone": "1234568163",
            "position": {
                "lat": 38.49307,
                "lng": 43.39363
            }
        },
        {
            "id": "919d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "4a463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1280",
            "phone": "1234568164",
            "position": {
                "lat": 38.50538,
                "lng": 43.33941
            }
        },
        {
            "id": "939d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "ab473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1281",
            "phone": "1234568165",
            "position": {
                "lat": 38.51248,
                "lng": 43.33212
            }
        },
        {
            "id": "959d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "4a463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1282",
            "phone": "1234568166",
            "position": {
                "lat": 38.51464,
                "lng": 43.33571
            }
        },
        {
            "id": "979d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "ab473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1283",
            "phone": "1234568167",
            "position": {
                "lat": 38.51553,
                "lng": 43.33855
            }
        },
        {
            "id": "9b9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "27433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1285",
            "phone": "1234568169",
            "position": {
                "lat": 40.98111,
                "lng": 28.72141
            }
        },
        {
            "id": "9d9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "2a453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1286",
            "phone": "1234568170",
            "position": {
                "lat": 41.03952,
                "lng": 28.69518
            }
        },
        {
            "id": "9f9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "0b433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1287",
            "phone": "1234568171",
            "position": {
                "lat": 41.1898,
                "lng": 28.72613
            }
        },
        {
            "id": "a19d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "4a473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1288",
            "phone": "1234568172",
            "position": {
                "lat": 41.0028,
                "lng": 28.77142
            }
        },
        {
            "id": "a39d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "4d433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1289",
            "phone": "1234568173",
            "position": {
                "lat": 40.96423,
                "lng": 28.82624
            }
        },
        {
            "id": "a59d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "4d433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1290",
            "phone": "1234568174",
            "position": {
                "lat": 40.95874,
                "lng": 28.8355
            }
        },
        {
            "id": "a79d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "754a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1291",
            "phone": "1234568175",
            "position": {
                "lat": 41.00307,
                "lng": 28.91417
            }
        },
        {
            "id": "a99d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "754a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1292",
            "phone": "1234568176",
            "position": {
                "lat": 40.99503,
                "lng": 28.93083
            }
        },
        {
            "id": "ab9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "754a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1293",
            "phone": "1234568177",
            "position": {
                "lat": 40.99553,
                "lng": 28.90952
            }
        },
        {
            "id": "ad9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "42453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1294",
            "phone": "1234568178",
            "position": {
                "lat": 41.01234,
                "lng": 28.93009
            }
        },
        {
            "id": "af9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "42453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1295",
            "phone": "1234568179",
            "position": {
                "lat": 41.01472,
                "lng": 28.95581
            }
        },
        {
            "id": "b19d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "7d433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1296",
            "phone": "1234568180",
            "position": {
                "lat": 41.04457,
                "lng": 28.89807
            }
        },
        {
            "id": "b39d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "63433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1297",
            "phone": "1234568181",
            "position": {
                "lat": 41.08001,
                "lng": 28.80964
            }
        },
        {
            "id": "b59d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "59493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1298",
            "phone": "1234568182",
            "position": {
                "lat": 41.12243,
                "lng": 28.88132
            }
        },
        {
            "id": "b79d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "f5483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1299",
            "phone": "1234568183",
            "position": {
                "lat": 41.10703,
                "lng": 28.9872
            }
        },
        {
            "id": "b99d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "f5483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1300",
            "phone": "1234568184",
            "position": {
                "lat": 41.11034,
                "lng": 29.03329
            }
        },
        {
            "id": "bb9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "8b433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1301",
            "phone": "1234568185",
            "position": {
                "lat": 41.06501,
                "lng": 29.04068
            }
        },
        {
            "id": "bd9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "8b433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1302",
            "phone": "1234568186",
            "position": {
                "lat": 41.05567,
                "lng": 29.03459
            }
        },
        {
            "id": "bf9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "3c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1303",
            "phone": "1234568187",
            "position": {
                "lat": 41.17963,
                "lng": 28.88623
            }
        },
        {
            "id": "c19d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "93433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1304",
            "phone": "1234568188",
            "position": {
                "lat": 41.21653,
                "lng": 29.15379
            }
        },
        {
            "id": "c39d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "194a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1305",
            "phone": "1234568189",
            "position": {
                "lat": 41.03217,
                "lng": 29.02569
            }
        },
        {
            "id": "c59d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "194a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1306",
            "phone": "1234568190",
            "position": {
                "lat": 41.03624,
                "lng": 29.03201
            }
        },
        {
            "id": "c79d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "194a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1307",
            "phone": "1234568191",
            "position": {
                "lat": 41.01085,
                "lng": 29.01294
            }
        },
        {
            "id": "c99d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "134a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1308",
            "phone": "1234568192",
            "position": {
                "lat": 41.0374,
                "lng": 29.10155
            }
        },
        {
            "id": "cb9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "134a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1309",
            "phone": "1234568193",
            "position": {
                "lat": 41.03754,
                "lng": 29.10182
            }
        },
        {
            "id": "cd9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "134a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1310",
            "phone": "1234568194",
            "position": {
                "lat": 41.03394,
                "lng": 29.11258
            }
        },
        {
            "id": "cf9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "64463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1311",
            "phone": "1234568195",
            "position": {
                "lat": 40.98025,
                "lng": 29.02788
            }
        },
        {
            "id": "d19d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "64463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1312",
            "phone": "1234568196",
            "position": {
                "lat": 40.97163,
                "lng": 29.06062
            }
        },
        {
            "id": "d39d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "64463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1313",
            "phone": "1234568197",
            "position": {
                "lat": 40.96442,
                "lng": 29.05937
            }
        },
        {
            "id": "d59d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "21433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1314",
            "phone": "1234568198",
            "position": {
                "lat": 40.9823,
                "lng": 29.1307
            }
        },
        {
            "id": "d79d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "21433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1315",
            "phone": "1234568199",
            "position": {
                "lat": 40.99219,
                "lng": 29.12662
            }
        },
        {
            "id": "d99d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "79473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1316",
            "phone": "1234568200",
            "position": {
                "lat": 40.95753,
                "lng": 29.18583
            }
        },
        {
            "id": "db9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "79473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1317",
            "phone": "1234568201",
            "position": {
                "lat": 40.95042,
                "lng": 29.14222
            }
        },
        {
            "id": "dd9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "b8463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1318",
            "phone": "1234568202",
            "position": {
                "lat": 40.90528,
                "lng": 29.15548
            }
        },
        {
            "id": "df9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "9f483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1319",
            "phone": "1234568203",
            "position": {
                "lat": 40.88641,
                "lng": 29.2626
            }
        },
        {
            "id": "e19d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "55493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1320",
            "phone": "1234568204",
            "position": {
                "lat": 40.98586,
                "lng": 29.28417
            }
        },
        {
            "id": "e39d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "88443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1321",
            "phone": "1234568205",
            "position": {
                "lat": 40.77058,
                "lng": 29.3671
            }
        },
        {
            "id": "e59d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "c6796368-fac3-e911-a846-000d3a385540",
            "county_id": "60453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1322",
            "phone": "1234568206",
            "position": {
                "lat": 40.79846,
                "lng": 29.39002
            }
        },
        {
            "id": "e79d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "bd473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1323",
            "phone": "1234568207",
            "position": {
                "lat": 40.64271,
                "lng": 29.25827
            }
        },
        {
            "id": "ef9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "5a443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1327",
            "phone": "1234568211",
            "position": {
                "lat": 40.64217,
                "lng": 29.13052
            }
        },
        {
            "id": "f19d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "5a443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1328",
            "phone": "1234568212",
            "position": {
                "lat": 40.64323,
                "lng": 29.11885
            }
        },
        {
            "id": "f39d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "09433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1329",
            "phone": "1234568213",
            "position": {
                "lat": 40.52262,
                "lng": 28.82463
            }
        },
        {
            "id": "f59d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "09433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1330",
            "phone": "1234568214",
            "position": {
                "lat": 40.51134,
                "lng": 28.83646
            }
        },
        {
            "id": "f79d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "d9423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1331",
            "phone": "1234568215",
            "position": {
                "lat": 40.68898,
                "lng": 29.50428
            }
        },
        {
            "id": "f99d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "d9423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1332",
            "phone": "1234568216",
            "position": {
                "lat": 40.67634,
                "lng": 29.45567
            }
        },
        {
            "id": "fb9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "3aba4c92-fac3-e911-a846-000d3a385540",
            "county_id": "d9423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1333",
            "phone": "1234568217",
            "position": {
                "lat": 40.68834,
                "lng": 29.45184
            }
        },
        {
            "id": "fd9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "54443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1334",
            "phone": "1234568218",
            "position": {
                "lat": 38.28129,
                "lng": 26.37126
            }
        },
        {
            "id": "ff9d1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "54443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1335",
            "phone": "1234568219",
            "position": {
                "lat": 38.28683,
                "lng": 26.37161
            }
        },
        {
            "id": "019e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "54443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1336",
            "phone": "1234568220",
            "position": {
                "lat": 38.28976,
                "lng": 26.37123
            }
        },
        {
            "id": "039e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "54443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1337",
            "phone": "1234568221",
            "position": {
                "lat": 38.34714,
                "lng": 26.31558
            }
        },
        {
            "id": "079e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "0d4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1339",
            "phone": "1234568223",
            "position": {
                "lat": 38.42939,
                "lng": 26.58495
            }
        },
        {
            "id": "099e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "0d4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1340",
            "phone": "1234568224",
            "position": {
                "lat": 38.43304,
                "lng": 26.59607
            }
        },
        {
            "id": "0f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "db493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1343",
            "phone": "1234568227",
            "position": {
                "lat": 38.1537,
                "lng": 27.35682
            }
        },
        {
            "id": "119e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "db493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1344",
            "phone": "1234568228",
            "position": {
                "lat": 38.1601,
                "lng": 27.35527
            }
        },
        {
            "id": "139e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "db493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1345",
            "phone": "1234568229",
            "position": {
                "lat": 38.17558,
                "lng": 27.35788
            }
        },
        {
            "id": "159e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "93473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1346",
            "phone": "1234568230",
            "position": {
                "lat": 38.23846,
                "lng": 27.13604
            }
        },
        {
            "id": "179e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "93473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1347",
            "phone": "1234568231",
            "position": {
                "lat": 38.24682,
                "lng": 27.12448
            }
        },
        {
            "id": "199e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "93473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1348",
            "phone": "1234568232",
            "position": {
                "lat": 38.25127,
                "lng": 27.12454
            }
        },
        {
            "id": "1b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1349",
            "phone": "1234568233",
            "position": {
                "lat": 38.38515,
                "lng": 27.17905
            }
        },
        {
            "id": "1d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1350",
            "phone": "1234568234",
            "position": {
                "lat": 38.38633,
                "lng": 27.16138
            }
        },
        {
            "id": "1f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1351",
            "phone": "1234568235",
            "position": {
                "lat": 38.38119,
                "lng": 27.16269
            }
        },
        {
            "id": "219e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1352",
            "phone": "1234568236",
            "position": {
                "lat": 38.38487,
                "lng": 27.16581
            }
        },
        {
            "id": "239e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1353",
            "phone": "1234568237",
            "position": {
                "lat": 38.37741,
                "lng": 27.17562
            }
        },
        {
            "id": "259e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1354",
            "phone": "1234568238",
            "position": {
                "lat": 38.37812,
                "lng": 27.1457
            }
        },
        {
            "id": "279e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1355",
            "phone": "1234568239",
            "position": {
                "lat": 38.36845,
                "lng": 27.19296
            }
        },
        {
            "id": "299e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "cb433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1356",
            "phone": "1234568240",
            "position": {
                "lat": 38.36729,
                "lng": 27.17482
            }
        },
        {
            "id": "2b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1357",
            "phone": "1234568241",
            "position": {
                "lat": 38.47995,
                "lng": 27.22653
            }
        },
        {
            "id": "2d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1358",
            "phone": "1234568242",
            "position": {
                "lat": 38.47834,
                "lng": 27.23573
            }
        },
        {
            "id": "2f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1359",
            "phone": "1234568243",
            "position": {
                "lat": 38.47909,
                "lng": 27.21561
            }
        },
        {
            "id": "319e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1360",
            "phone": "1234568244",
            "position": {
                "lat": 38.4769,
                "lng": 27.22526
            }
        },
        {
            "id": "339e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1361",
            "phone": "1234568245",
            "position": {
                "lat": 38.4749,
                "lng": 27.22409
            }
        },
        {
            "id": "359e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1362",
            "phone": "1234568246",
            "position": {
                "lat": 38.47612,
                "lng": 27.2057
            }
        },
        {
            "id": "379e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1363",
            "phone": "1234568247",
            "position": {
                "lat": 38.47344,
                "lng": 27.19774
            }
        },
        {
            "id": "399e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1364",
            "phone": "1234568248",
            "position": {
                "lat": 38.46436,
                "lng": 27.22329
            }
        },
        {
            "id": "3b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b5433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1365",
            "phone": "1234568249",
            "position": {
                "lat": 38.46481,
                "lng": 27.22218
            }
        },
        {
            "id": "3d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "54453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1366",
            "phone": "1234568250",
            "position": {
                "lat": 38.65715,
                "lng": 26.76375
            }
        },
        {
            "id": "3f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "54453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1367",
            "phone": "1234568251",
            "position": {
                "lat": 38.67326,
                "lng": 26.75525
            }
        },
        {
            "id": "419e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "54453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1368",
            "phone": "1234568252",
            "position": {
                "lat": 38.69784,
                "lng": 26.73319
            }
        },
        {
            "id": "439e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "c9423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1369",
            "phone": "1234568253",
            "position": {
                "lat": 38.88726,
                "lng": 27.07229
            }
        },
        {
            "id": "459e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "c9423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1370",
            "phone": "1234568254",
            "position": {
                "lat": 38.8889,
                "lng": 27.06569
            }
        },
        {
            "id": "479e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "c9423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1371",
            "phone": "1234568255",
            "position": {
                "lat": 38.89238,
                "lng": 27.05496
            }
        },
        {
            "id": "499e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1372",
            "phone": "1234568256",
            "position": {
                "lat": 38.93866,
                "lng": 26.9338
            }
        },
        {
            "id": "4b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1373",
            "phone": "1234568257",
            "position": {
                "lat": 38.93921,
                "lng": 26.94183
            }
        },
        {
            "id": "4d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1374",
            "phone": "1234568258",
            "position": {
                "lat": 38.9395,
                "lng": 26.94355
            }
        },
        {
            "id": "4f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "0e473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1375",
            "phone": "1234568259",
            "position": {
                "lat": 38.4006,
                "lng": 27.09421
            }
        },
        {
            "id": "519e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "0e473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1376",
            "phone": "1234568260",
            "position": {
                "lat": 38.39562,
                "lng": 27.08617
            }
        },
        {
            "id": "539e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "0e473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1377",
            "phone": "1234568261",
            "position": {
                "lat": 38.39585,
                "lng": 27.08567
            }
        },
        {
            "id": "559e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "0e473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1378",
            "phone": "1234568262",
            "position": {
                "lat": 38.40331,
                "lng": 27.10003
            }
        },
        {
            "id": "579e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1379",
            "phone": "1234568263",
            "position": {
                "lat": 38.4789,
                "lng": 27.07508
            }
        },
        {
            "id": "599e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1380",
            "phone": "1234568264",
            "position": {
                "lat": 38.47096,
                "lng": 27.07481
            }
        },
        {
            "id": "5b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1381",
            "phone": "1234568265",
            "position": {
                "lat": 38.4738,
                "lng": 27.11189
            }
        },
        {
            "id": "5d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1382",
            "phone": "1234568266",
            "position": {
                "lat": 38.45142,
                "lng": 27.09693
            }
        },
        {
            "id": "5f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "b6463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1383",
            "phone": "1234568267",
            "position": {
                "lat": 38.46933,
                "lng": 27.1048
            }
        },
        {
            "id": "619e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "bb423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1384",
            "phone": "1234568268",
            "position": {
                "lat": 40.17359,
                "lng": 34.84586
            }
        },
        {
            "id": "639e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "71433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1385",
            "phone": "1234568269",
            "position": {
                "lat": 40.64385,
                "lng": 34.25892
            }
        },
        {
            "id": "659e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "ab433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1386",
            "phone": "1234568270",
            "position": {
                "lat": 40.02156,
                "lng": 34.60928
            }
        },
        {
            "id": "679e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "52463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1387",
            "phone": "1234568271",
            "position": {
                "lat": 40.72676,
                "lng": 34.46671
            }
        },
        {
            "id": "699e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "52463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1388",
            "phone": "1234568272",
            "position": {
                "lat": 40.72659,
                "lng": 34.47852
            }
        },
        {
            "id": "6b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "52463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1389",
            "phone": "1234568273",
            "position": {
                "lat": 40.73432,
                "lng": 34.47393
            }
        },
        {
            "id": "6d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "ae463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1390",
            "phone": "1234568274",
            "position": {
                "lat": 41.13278,
                "lng": 34.49097
            }
        },
        {
            "id": "6f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "ae463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1391",
            "phone": "1234568275",
            "position": {
                "lat": 41.13996,
                "lng": 34.48322
            }
        },
        {
            "id": "719e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "50473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1392",
            "phone": "1234568276",
            "position": {
                "lat": 40.75229,
                "lng": 34.90527
            }
        },
        {
            "id": "739e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "6b483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1393",
            "phone": "1234568277",
            "position": {
                "lat": 40.97349,
                "lng": 34.8011
            }
        },
        {
            "id": "759e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "036d6368-fac3-e911-a846-000d3a385540",
            "county_id": "6b483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1394",
            "phone": "1234568278",
            "position": {
                "lat": 40.97449,
                "lng": 34.79832
            }
        },
        {
            "id": "779e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "29433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1395",
            "phone": "1234568279",
            "position": {
                "lat": 41.94535,
                "lng": 34.58898
            }
        },
        {
            "id": "7b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "29433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1397",
            "phone": "1234568281",
            "position": {
                "lat": 41.94859,
                "lng": 34.5847
            }
        },
        {
            "id": "7d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "b7433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1398",
            "phone": "1234568282",
            "position": {
                "lat": 41.4636,
                "lng": 34.78527
            }
        },
        {
            "id": "7f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "b7433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1399",
            "phone": "1234568283",
            "position": {
                "lat": 41.46371,
                "lng": 34.76043
            }
        },
        {
            "id": "819e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "b7433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1400",
            "phone": "1234568284",
            "position": {
                "lat": 40.98867,
                "lng": 29.03803
            }
        },
        {
            "id": "839e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "b7433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1401",
            "phone": "1234568285",
            "position": {
                "lat": 41.45771,
                "lng": 34.78397
            }
        },
        {
            "id": "859e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "1c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1402",
            "phone": "1234568286",
            "position": {
                "lat": 41.87445,
                "lng": 34.8928
            }
        },
        {
            "id": "879e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "1c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1403",
            "phone": "1234568287",
            "position": {
                "lat": 41.8796,
                "lng": 34.89984
            }
        },
        {
            "id": "899e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "1c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1404",
            "phone": "1234568288",
            "position": {
                "lat": 41.87753,
                "lng": 34.90987
            }
        },
        {
            "id": "8b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "76453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1405",
            "phone": "1234568289",
            "position": {
                "lat": 41.80505,
                "lng": 35.19588
            }
        },
        {
            "id": "8f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "76453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1407",
            "phone": "1234568291",
            "position": {
                "lat": 41.79734,
                "lng": 35.19119
            }
        },
        {
            "id": "919e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "76453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1408",
            "phone": "1234568292",
            "position": {
                "lat": 41.80672,
                "lng": 35.19613
            }
        },
        {
            "id": "939e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "f9493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1409",
            "phone": "1234568293",
            "position": {
                "lat": 41.94062,
                "lng": 34.33353
            }
        },
        {
            "id": "959e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "f9493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1410",
            "phone": "1234568294",
            "position": {
                "lat": 41.9464,
                "lng": 34.33715
            }
        },
        {
            "id": "979e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "f9493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1411",
            "phone": "1234568295",
            "position": {
                "lat": 41.94493,
                "lng": 34.34433
            }
        },
        {
            "id": "999e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "bbb14c92-fac3-e911-a846-000d3a385540",
            "county_id": "f9493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1412",
            "phone": "1234568296",
            "position": {
                "lat": 41.94735,
                "lng": 34.34306
            }
        },
        {
            "id": "9b9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1413",
            "phone": "1234568297",
            "position": {
                "lat": 41.61149,
                "lng": 35.60035
            }
        },
        {
            "id": "9d9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1414",
            "phone": "1234568298",
            "position": {
                "lat": 41.61135,
                "lng": 35.60373
            }
        },
        {
            "id": "9f9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1415",
            "phone": "1234568299",
            "position": {
                "lat": 41.60554,
                "lng": 35.5968
            }
        },
        {
            "id": "a19e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "1f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1416",
            "phone": "1234568300",
            "position": {
                "lat": 41.33405,
                "lng": 36.27208
            }
        },
        {
            "id": "a39e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "1f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1417",
            "phone": "1234568301",
            "position": {
                "lat": 41.30799,
                "lng": 36.29945
            }
        },
        {
            "id": "a59e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "1f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1418",
            "phone": "1234568302",
            "position": {
                "lat": 41.31498,
                "lng": 36.25088
            }
        },
        {
            "id": "a79e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "3f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1419",
            "phone": "1234568303",
            "position": {
                "lat": 41.56204,
                "lng": 35.91481
            }
        },
        {
            "id": "a99e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "3f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1420",
            "phone": "1234568304",
            "position": {
                "lat": 41.55722,
                "lng": 35.90979
            }
        },
        {
            "id": "ab9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "3f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1421",
            "phone": "1234568305",
            "position": {
                "lat": 41.55215,
                "lng": 35.92727
            }
        },
        {
            "id": "ad9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "3f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1422",
            "phone": "1234568306",
            "position": {
                "lat": 41.56717,
                "lng": 35.91889
            }
        },
        {
            "id": "af9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "e7433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1423",
            "phone": "1234568307",
            "position": {
                "lat": 41.26325,
                "lng": 36.34953
            }
        },
        {
            "id": "b19e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "1b443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1424",
            "phone": "1234568308",
            "position": {
                "lat": 41.1971,
                "lng": 36.71321
            }
        },
        {
            "id": "b39e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "a1483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1425",
            "phone": "1234568309",
            "position": {
                "lat": 41.19011,
                "lng": 36.72062
            }
        },
        {
            "id": "bb9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "2f4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1429",
            "phone": "1234568313",
            "position": {
                "lat": 41.63768,
                "lng": 35.50254
            }
        },
        {
            "id": "bd9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "2f4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1430",
            "phone": "1234568314",
            "position": {
                "lat": 41.63173,
                "lng": 35.52208
            }
        },
        {
            "id": "bf9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "2f4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1431",
            "phone": "1234568315",
            "position": {
                "lat": 41.63362,
                "lng": 35.5309
            }
        },
        {
            "id": "c19e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "214a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1432",
            "phone": "1234568316",
            "position": {
                "lat": 41.14318,
                "lng": 35.45176
            }
        },
        {
            "id": "c39e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "214a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1433",
            "phone": "1234568317",
            "position": {
                "lat": 41.14417,
                "lng": 35.45567
            }
        },
        {
            "id": "c59e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "214a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1434",
            "phone": "1234568318",
            "position": {
                "lat": 41.1385,
                "lng": 35.45452
            }
        },
        {
            "id": "c79e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "214a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1435",
            "phone": "1234568319",
            "position": {
                "lat": 41.13847,
                "lng": 35.46336
            }
        },
        {
            "id": "c99e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "214a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1436",
            "phone": "1234568320",
            "position": {
                "lat": 41.13916,
                "lng": 35.4703
            }
        },
        {
            "id": "cb9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "214a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1437",
            "phone": "1234568321",
            "position": {
                "lat": 41.1438,
                "lng": 35.46777
            }
        },
        {
            "id": "cd9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1438",
            "phone": "1234568322",
            "position": {
                "lat": 41.24247,
                "lng": 36.40376
            }
        },
        {
            "id": "cf9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1439",
            "phone": "1234568323",
            "position": {
                "lat": 41.21752,
                "lng": 36.45573
            }
        },
        {
            "id": "d19e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1440",
            "phone": "1234568324",
            "position": {
                "lat": 41.23778,
                "lng": 36.43326
            }
        },
        {
            "id": "d39e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1441",
            "phone": "1234568325",
            "position": {
                "lat": 41.24184,
                "lng": 36.43792
            }
        },
        {
            "id": "d59e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1442",
            "phone": "1234568326",
            "position": {
                "lat": 41.23639,
                "lng": 36.41339
            }
        },
        {
            "id": "d79e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "99ae4c92-fac3-e911-a846-000d3a385540",
            "county_id": "c5493182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1443",
            "phone": "1234568327",
            "position": {
                "lat": 41.22794,
                "lng": 36.45771
            }
        },
        {
            "id": "d99e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "cb423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1444",
            "phone": "1234568328",
            "position": {
                "lat": 40.37763,
                "lng": 36.89588
            }
        },
        {
            "id": "db9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "cb423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1445",
            "phone": "1234568329",
            "position": {
                "lat": 40.37489,
                "lng": 36.89432
            }
        },
        {
            "id": "dd9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "cb423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1446",
            "phone": "1234568330",
            "position": {
                "lat": 40.38194,
                "lng": 36.91118
            }
        },
        {
            "id": "df9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "13433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1447",
            "phone": "1234568331",
            "position": {
                "lat": 40.11498,
                "lng": 36.2997
            }
        },
        {
            "id": "e19e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "13433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1448",
            "phone": "1234568332",
            "position": {
                "lat": 40.11874,
                "lng": 36.30213
            }
        },
        {
            "id": "e39e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "13433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1449",
            "phone": "1234568333",
            "position": {
                "lat": 40.11491,
                "lng": 36.29633
            }
        },
        {
            "id": "e59e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "65433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1450",
            "phone": "1234568334",
            "position": {
                "lat": 40.5438,
                "lng": 37.1686
            }
        },
        {
            "id": "e79e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "65433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1451",
            "phone": "1234568335",
            "position": {
                "lat": 40.54699,
                "lng": 37.16819
            }
        },
        {
            "id": "e99e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "65433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1452",
            "phone": "1234568336",
            "position": {
                "lat": 40.54541,
                "lng": 37.16924
            }
        },
        {
            "id": "eb9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "10453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1453",
            "phone": "1234568337",
            "position": {
                "lat": 40.67092,
                "lng": 36.55272
            }
        },
        {
            "id": "ed9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "10453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1454",
            "phone": "1234568338",
            "position": {
                "lat": 40.66525,
                "lng": 36.55857
            }
        },
        {
            "id": "ef9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "10453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1455",
            "phone": "1234568339",
            "position": {
                "lat": 40.67528,
                "lng": 36.57445
            }
        },
        {
            "id": "f19e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "10453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1456",
            "phone": "1234568340",
            "position": {
                "lat": 40.67841,
                "lng": 36.56199
            }
        },
        {
            "id": "f39e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "10453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1457",
            "phone": "1234568341",
            "position": {
                "lat": 40.67092,
                "lng": 36.55272
            }
        },
        {
            "id": "f59e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "43483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1458",
            "phone": "1234568342",
            "position": {
                "lat": 40.59201,
                "lng": 36.95524
            }
        },
        {
            "id": "f79e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "43483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1459",
            "phone": "1234568343",
            "position": {
                "lat": 40.59155,
                "lng": 36.94434
            }
        },
        {
            "id": "f99e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "43483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1460",
            "phone": "1234568344",
            "position": {
                "lat": 40.59801,
                "lng": 36.93487
            }
        },
        {
            "id": "fb9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "43483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1461",
            "phone": "1234568345",
            "position": {
                "lat": 40.58918,
                "lng": 36.95529
            }
        },
        {
            "id": "fd9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "43483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1462",
            "phone": "1234568346",
            "position": {
                "lat": 40.58656,
                "lng": 36.9477
            }
        },
        {
            "id": "ff9e1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "43483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1463",
            "phone": "1234568347",
            "position": {
                "lat": 40.58568,
                "lng": 36.94435
            }
        },
        {
            "id": "019f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1464",
            "phone": "1234568348",
            "position": {
                "lat": 40.39189,
                "lng": 37.33912
            }
        },
        {
            "id": "039f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1465",
            "phone": "1234568349",
            "position": {
                "lat": 40.39134,
                "lng": 37.32948
            }
        },
        {
            "id": "059f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1466",
            "phone": "1234568350",
            "position": {
                "lat": 40.67995,
                "lng": 36.57124
            }
        },
        {
            "id": "079f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1467",
            "phone": "1234568351",
            "position": {
                "lat": 40.38908,
                "lng": 37.33667
            }
        },
        {
            "id": "099f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1468",
            "phone": "1234568352",
            "position": {
                "lat": 40.38517,
                "lng": 37.34634
            }
        },
        {
            "id": "0b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "bf483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1469",
            "phone": "1234568353",
            "position": {
                "lat": 40.38885,
                "lng": 37.35351
            }
        },
        {
            "id": "0d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "774a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1470",
            "phone": "1234568354",
            "position": {
                "lat": 40.29942,
                "lng": 35.88752
            }
        },
        {
            "id": "119f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "774a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1472",
            "phone": "1234568356",
            "position": {
                "lat": 40.29347,
                "lng": 35.87137
            }
        },
        {
            "id": "139f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "774a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1473",
            "phone": "1234568357",
            "position": {
                "lat": 40.3,
                "lng": 35.87155
            }
        },
        {
            "id": "159f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "774a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1474",
            "phone": "1234568358",
            "position": {
                "lat": 40.30666,
                "lng": 35.88816
            }
        },
        {
            "id": "179f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "81b54c92-fac3-e911-a846-000d3a385540",
            "county_id": "774a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1475",
            "phone": "1234568359",
            "position": {
                "lat": 40.30025,
                "lng": 35.90855
            }
        },
        {
            "id": "1b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "93423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1477",
            "phone": "1234568361",
            "position": {
                "lat": 41.0176,
                "lng": 39.59325
            }
        },
        {
            "id": "1d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "93423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1478",
            "phone": "1234568362",
            "position": {
                "lat": 41.01174,
                "lng": 39.61499
            }
        },
        {
            "id": "1f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "f5423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1479",
            "phone": "1234568363",
            "position": {
                "lat": 40.91678,
                "lng": 40.0439
            }
        },
        {
            "id": "219f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "f5423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1480",
            "phone": "1234568364",
            "position": {
                "lat": 40.9303,
                "lng": 40.05219
            }
        },
        {
            "id": "239f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "f5423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1481",
            "phone": "1234568365",
            "position": {
                "lat": 40.92784,
                "lng": 40.04991
            }
        },
        {
            "id": "259f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "f5423182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1482",
            "phone": "1234568366",
            "position": {
                "lat": 40.93023,
                "lng": 40.06726
            }
        },
        {
            "id": "279f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "0f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1483",
            "phone": "1234568367",
            "position": {
                "lat": 40.95395,
                "lng": 39.92393
            }
        },
        {
            "id": "299f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "0f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1484",
            "phone": "1234568368",
            "position": {
                "lat": 40.95287,
                "lng": 39.9355
            }
        },
        {
            "id": "2b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "0f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1485",
            "phone": "1234568369",
            "position": {
                "lat": 40.95271,
                "lng": 39.93992
            }
        },
        {
            "id": "2d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "0f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1486",
            "phone": "1234568370",
            "position": {
                "lat": 40.95494,
                "lng": 39.93427
            }
        },
        {
            "id": "2f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "0f433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1487",
            "phone": "1234568371",
            "position": {
                "lat": 40.95178,
                "lng": 39.93509
            }
        },
        {
            "id": "339f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "89433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1489",
            "phone": "1234568373",
            "position": {
                "lat": 41.04954,
                "lng": 39.23913
            }
        },
        {
            "id": "359f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "89433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1490",
            "phone": "1234568374",
            "position": {
                "lat": 41.04843,
                "lng": 39.24456
            }
        },
        {
            "id": "379f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "89433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1491",
            "phone": "1234568375",
            "position": {
                "lat": 41.05367,
                "lng": 39.2252
            }
        },
        {
            "id": "399f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "1d443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1492",
            "phone": "1234568376",
            "position": {
                "lat": 41.08203,
                "lng": 39.38362
            }
        },
        {
            "id": "3b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "1d443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1493",
            "phone": "1234568377",
            "position": {
                "lat": 41.08506,
                "lng": 39.38322
            }
        },
        {
            "id": "3d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "1d443182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1494",
            "phone": "1234568378",
            "position": {
                "lat": 41.08024,
                "lng": 39.37378
            }
        },
        {
            "id": "3f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "02463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1495",
            "phone": "1234568379",
            "position": {
                "lat": 40.88935,
                "lng": 40.37006
            }
        },
        {
            "id": "419f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "02463182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1496",
            "phone": "1234568380",
            "position": {
                "lat": 40.8881,
                "lng": 40.36938
            }
        },
        {
            "id": "439f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "69473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1497",
            "phone": "1234568381",
            "position": {
                "lat": 40.81038,
                "lng": 39.60931
            }
        },
        {
            "id": "459f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "69473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1498",
            "phone": "1234568382",
            "position": {
                "lat": 40.81541,
                "lng": 39.61128
            }
        },
        {
            "id": "479f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "69473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1499",
            "phone": "1234568383",
            "position": {
                "lat": 40.81342,
                "lng": 39.61067
            }
        },
        {
            "id": "499f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "69473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1500",
            "phone": "1234568384",
            "position": {
                "lat": 40.81056,
                "lng": 39.61334
            }
        },
        {
            "id": "4b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "53483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1501",
            "phone": "1234568385",
            "position": {
                "lat": 40.94903,
                "lng": 40.27141
            }
        },
        {
            "id": "4d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "53483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1502",
            "phone": "1234568386",
            "position": {
                "lat": 40.95005,
                "lng": 40.2768
            }
        },
        {
            "id": "4f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "53483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1503",
            "phone": "1234568387",
            "position": {
                "lat": 40.94125,
                "lng": 40.25825
            }
        },
        {
            "id": "519f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "53483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1504",
            "phone": "1234568388",
            "position": {
                "lat": 40.93988,
                "lng": 40.25623
            }
        },
        {
            "id": "539f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "53483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1505",
            "phone": "1234568389",
            "position": {
                "lat": 40.93737,
                "lng": 40.27205
            }
        },
        {
            "id": "559f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "53483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1506",
            "phone": "1234568390",
            "position": {
                "lat": 40.94816,
                "lng": 40.27657
            }
        },
        {
            "id": "579f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "634a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1507",
            "phone": "1234568391",
            "position": {
                "lat": 40.96705,
                "lng": 39.83869
            }
        },
        {
            "id": "599f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "634a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1508",
            "phone": "1234568392",
            "position": {
                "lat": 40.96271,
                "lng": 39.84523
            }
        },
        {
            "id": "5b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "634a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1509",
            "phone": "1234568393",
            "position": {
                "lat": 40.95927,
                "lng": 39.85205
            }
        },
        {
            "id": "5d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "edb54c92-fac3-e911-a846-000d3a385540",
            "county_id": "634a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1510",
            "phone": "1234568394",
            "position": {
                "lat": 40.95808,
                "lng": 39.84865
            }
        },
        {
            "id": "5f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "8d433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1511",
            "phone": "1234568395",
            "position": {
                "lat": 37.91547,
                "lng": 41.29249
            }
        },
        {
            "id": "619f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "8d433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1512",
            "phone": "1234568396",
            "position": {
                "lat": 37.91964,
                "lng": 41.29359
            }
        },
        {
            "id": "659f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "8d433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1514",
            "phone": "1234568398",
            "position": {
                "lat": 37.90836,
                "lng": 41.25651
            }
        },
        {
            "id": "679f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "6e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1515",
            "phone": "1234568399",
            "position": {
                "lat": 37.56748,
                "lng": 41.38611
            }
        },
        {
            "id": "699f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "6e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1516",
            "phone": "1234568400",
            "position": {
                "lat": 37.57219,
                "lng": 41.39229
            }
        },
        {
            "id": "6b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "6e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1517",
            "phone": "1234568401",
            "position": {
                "lat": 37.56633,
                "lng": 41.38211
            }
        },
        {
            "id": "6d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "6e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1518",
            "phone": "1234568402",
            "position": {
                "lat": 37.56829,
                "lng": 41.38533
            }
        },
        {
            "id": "6f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "6e453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1519",
            "phone": "1234568403",
            "position": {
                "lat": 37.56908,
                "lng": 41.38841
            }
        },
        {
            "id": "719f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "f2453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1520",
            "phone": "1234568404",
            "position": {
                "lat": 37.71276,
                "lng": 41.4152
            }
        },
        {
            "id": "739f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "f2453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1521",
            "phone": "1234568405",
            "position": {
                "lat": 37.71394,
                "lng": 41.41292
            }
        },
        {
            "id": "759f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "f2453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1522",
            "phone": "1234568406",
            "position": {
                "lat": 37.72916,
                "lng": 41.4255
            }
        },
        {
            "id": "779f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "24473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1523",
            "phone": "1234568407",
            "position": {
                "lat": 38.16394,
                "lng": 41.49985
            }
        },
        {
            "id": "799f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "24473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1524",
            "phone": "1234568408",
            "position": {
                "lat": 38.16805,
                "lng": 41.48832
            }
        },
        {
            "id": "7b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "24473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1525",
            "phone": "1234568409",
            "position": {
                "lat": 38.17438,
                "lng": 41.5045
            }
        },
        {
            "id": "7d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "24473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1526",
            "phone": "1234568410",
            "position": {
                "lat": 38.17855,
                "lng": 41.49514
            }
        },
        {
            "id": "819f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "24473182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1528",
            "phone": "1234568412",
            "position": {
                "lat": 38.16394,
                "lng": 41.49985
            }
        },
        {
            "id": "839f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "fb483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1529",
            "phone": "1234568413",
            "position": {
                "lat": 38.33138,
                "lng": 41.41821
            }
        },
        {
            "id": "859f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "fb483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1530",
            "phone": "1234568414",
            "position": {
                "lat": 38.33451,
                "lng": 41.41896
            }
        },
        {
            "id": "879f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "fb483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1531",
            "phone": "1234568415",
            "position": {
                "lat": 38.33325,
                "lng": 41.4173
            }
        },
        {
            "id": "899f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "97656368-fac3-e911-a846-000d3a385540",
            "county_id": "fb483182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1532",
            "phone": "1234568416",
            "position": {
                "lat": 38.34428,
                "lng": 41.40775
            }
        },
        {
            "id": "8b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "69433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1533",
            "phone": "1234568417",
            "position": {
                "lat": 38.03002,
                "lng": 44.01627
            }
        },
        {
            "id": "8d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "69433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1534",
            "phone": "1234568418",
            "position": {
                "lat": 38.02988,
                "lng": 44.01617
            }
        },
        {
            "id": "8f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "69433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1535",
            "phone": "1234568419",
            "position": {
                "lat": 38.04585,
                "lng": 44.02035
            }
        },
        {
            "id": "939f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "69433182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1537",
            "phone": "1234568421",
            "position": {
                "lat": 38.04571,
                "lng": 44.02038
            }
        },
        {
            "id": "959f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "12453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1538",
            "phone": "1234568422",
            "position": {
                "lat": 39.01685,
                "lng": 43.3518
            }
        },
        {
            "id": "979f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "12453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1539",
            "phone": "1234568423",
            "position": {
                "lat": 39.033,
                "lng": 43.34692
            }
        },
        {
            "id": "999f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "12453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1540",
            "phone": "1234568424",
            "position": {
                "lat": 39.03331,
                "lng": 43.37664
            }
        },
        {
            "id": "9b9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "12453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1541",
            "phone": "1234568425",
            "position": {
                "lat": 39.03671,
                "lng": 43.35677
            }
        },
        {
            "id": "9d9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "78453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1542",
            "phone": "1234568426",
            "position": {
                "lat": 38.29586,
                "lng": 43.09686
            }
        },
        {
            "id": "9f9f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "78453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1543",
            "phone": "1234568427",
            "position": {
                "lat": 38.30071,
                "lng": 43.10677
            }
        },
        {
            "id": "a19f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "78453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1544",
            "phone": "1234568428",
            "position": {
                "lat": 38.29556,
                "lng": 43.1154
            }
        },
        {
            "id": "a39f1664-f2fe-ed11-8f6e-000d3aaab651",
            "city_id": "ccb74c92-fac3-e911-a846-000d3a385540",
            "county_id": "78453182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1545",
            "phone": "1234568429",
            "position": {
                "lat": 38.29919,
                "lng": 43.09227
            }
        },
        {
            "id": "ecc74351-1ff3-ed11-8849-000d3aaab965",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "754a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1010",
            "phone": "1234567894",
            "position": {
                "lat": 41.02368,
                "lng": 28.91745
            }
        },
        {
            "id": "eec74351-1ff3-ed11-8849-000d3aaab965",
            "city_id": "06616368-fac3-e911-a846-000d3a385540",
            "county_id": "754a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1011",
            "phone": "1234567895",
            "position": {
                "lat": 40.99763,
                "lng": 28.90386
            }
        },
        {
            "id": "f2c74351-1ff3-ed11-8849-000d3aaab965",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "754a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1013",
            "phone": "1234567897",
            "position": {
                "lat": 40.99755,
                "lng": 28.90754
            }
        },
        {
            "id": "f4c74351-1ff3-ed11-8849-000d3aaab965",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "754a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "3be44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "Enes Test1014",
            "phone": "1234567898",
            "position": {
                "lat": 40.99747,
                "lng": 28.90717
            }
        },
        {
            "id": "d9c75b3b-c077-ed11-81ab-000d3abcae8d",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "99433182-fbc3-e911-a846-000d3a385540",
            "user_id": "39e44d7e-6b6a-ed11-9561-000d3abcae8d",
            "name": "TEST FIRMASI",
            "phone": "9998887766",
            "position": {
                "lat": 41.04304,
                "lng": 28.96389
            }
        },
        {
            "id": "e1087ca2-91b9-ed11-83ff-000d3abcae8d",
            "city_id": "04766368-fac3-e911-a846-000d3a385540",
            "county_id": "0e473182-fbc3-e911-a846-000d3a385540",
            "user_id": "298d1a32-6f62-eb11-89f5-000d3a4aa7d8",
            "name": "DENEME",
            "phone": "5559998877",
            "position": {
                "lat": 38.41177,
                "lng": 27.12383
            }
        },
        {
            "id": "301edb0c-48ea-ed11-8849-000d3abcae8d",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "4b4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "b5e3e1c3-5310-ed11-b83c-000d3aadbe60",
            "name": "DENEME2",
            "phone": "555555555",
            "position": {
                "lat": 39.95384,
                "lng": 32.79148
            }
        },
        {
            "id": "d7f3264f-48ea-ed11-8849-000d3abcae8d",
            "city_id": "ae626368-fac3-e911-a846-000d3a385540",
            "county_id": "d3423182-fbc3-e911-a846-000d3a385540",
            "user_id": "761d6174-3a53-ed11-bba1-000d3aaab571",
            "name": "DENEME3",
            "phone": "55555555",
            "position": {
                "lat": 39.94554,
                "lng": 32.86771
            }
        },
        {
            "id": "98d76396-48ea-ed11-8849-000d3abcae8d",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "county_id": "45483182-fbc3-e911-a846-000d3a385540",
            "user_id": "b5e3e1c3-5310-ed11-b83c-000d3aadbe60",
            "name": "DENEME4",
            "phone": "555555555",
            "position": {
                "lat": 40.22574,
                "lng": 28.95152
            }
        },
        {
            "id": "82ac34e6-48ea-ed11-8849-000d3abcae8d",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "county_id": "5f4a3182-fbc3-e911-a846-000d3a385540",
            "user_id": "b5e3e1c3-5310-ed11-b83c-000d3aadbe60",
            "name": "DENEME5",
            "phone": "5555555555",
            "position": {
                "lat": 40.2049,
                "lng": 29.16292
            }
        },
        {
            "id": "c45bc322-49ea-ed11-8849-000d3abcae8d",
            "city_id": "b5686368-fac3-e911-a846-000d3a385540",
            "county_id": "6f483182-fbc3-e911-a846-000d3a385540",
            "user_id": "d01d6174-3a53-ed11-bba1-000d3aaab571",
            "name": "DENEME6",
            "phone": "5555555555",
            "position": {
                "lat": 40.20624,
                "lng": 29.06726
            }
        },
        {
            "id": "95976ae8-80f4-ed11-8849-000d3abcae8d",
            "city_id": "8bb34c92-fac3-e911-a846-000d3a385540",
            "county_id": "f3433182-fbc3-e911-a846-000d3a385540",
            "user_id": "bbd0a810-636a-ed11-9561-000d3abcae8d",
            "name": "HAYRETTIN TEST1",
            "phone": "8588585858",
            "position": {
                "lat": 37.32576,
                "lng": 42.18802
            }
        },
        {
            "id": "d03b2899-3a7d-ed11-81ad-000d3abd8dc2",
            "city_id": "02766368-fac3-e911-a846-000d3a385540",
            "county_id": "3c453182-fbc3-e911-a846-000d3a385540",
            "user_id": "5cb1cb61-4d5c-ed11-9562-000d3abd8dc2",
            "name": "TESTTTTTTTTTT",
            "phone": "451541515154",
            "position": {
                "lat": 41.07562,
                "lng": 28.92387
            }
        }
    ];
    var appointments = [
        {
            "id": "a4e1a242-81ff-ed11-8f6e-000d3abcae8d",
            "number": "ZYRT-31052326536",
            "account_id": "d19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "meeting_date_start": "2023-05-31T05:00:00Z",
            "meeting_date_end": "2023-05-31T05:30:00Z"
        },
        {
            "id": "238e09b7-81ff-ed11-8f6e-000d3abcae8d",
            "number": "ZYRT-31052326537",
            "account_id": "d19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "meeting_date_start": "2023-05-27T05:00:00Z",
            "meeting_date_end": "2023-05-27T05:30:00Z"
        },
        {
            "id": "a4e1a242-81ff-ed11-8f6e-000d3abcae8d",
            "number": "ZYRT-31052326536",
            "account_id": "d19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "meeting_date_start": "2023-05-31T05:00:00Z",
            "meeting_date_end": "2023-05-31T05:30:00Z"
        },
        {
            "id": "238e09b7-81ff-ed11-8f6e-000d3abcae8d",
            "number": "ZYRT-31052326537",
            "account_id": "d19c1664-f2fe-ed11-8f6e-000d3aaab651",
            "meeting_date_start": "2023-05-27T05:00:00Z",
            "meeting_date_end": "2023-05-27T05:30:00Z"
        }
    ];
    var settingsGoogle = [
        {
            "id": "d86ebb04-28ef-ed11-8849-000d3abd8dc2",
            "defaultcirclecolorcode": "#f409c5",
            "markericoncode": 1,
            "name": "settings",
            "colorsettings": [
                {
                    "id": "6195c2c4-28ef-ed11-8849-000d3abd8dc2",
                    "maks": 1,
                    "min": 0,
                    "name": "0-1",
                    "colorcode": "#ed0920"
                },
                {
                    "id": "1eb9e1f4-28ef-ed11-8849-000d3abd8dc2",
                    "maks": 5,
                    "min": 2,
                    "name": "2-5",
                    "colorcode": "#09e2e2"
                }
            ]
        }
    ];
    var systemuserSettings = [
        {
            "id": "5f890a35-4291-4ab7-b2cb-a34badae36fa",
            "fullname": "CRMadm #",
            "country": [
                {
                    "id": "4c6008e8-f7c3-e911-a83e-000d3a3859ba",
                    "text": "Turkey",
                    "internationalcode": "TR",
                    "center": {
                        "lat":38.96375, //38.96375,
                        "lng":35.24332,// 35.24332
                    }
                }
            ]
        }
    ];
    const markerIcon = {
        1: 'https://img.icons8.com/ios/50/map-pin--v1.png',
        2: 'https://img.icons8.com/color-glass/50/google-maps-new.png',
        3: 'https://img.icons8.com/dusk/50/user-location.png',
        4: 'https://img.icons8.com/color/50/pokestop.png',
        5: 'https://img.icons8.com/color/48/marker--v1.png',
        6: 'https://img.icons8.com/nolan/50/marker.png'
    };
    
    Google.MapObject.initMap(users, cities, counties, accounts, appointments, settingsGoogle, systemuserSettings,markerIcon);

})