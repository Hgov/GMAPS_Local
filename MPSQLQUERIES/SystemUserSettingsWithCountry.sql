-- systemuserSettings tablosuna veri ekleme
INSERT INTO systemuserSettings (Id, FullName)
VALUES ('5f890a35-4291-4ab7-b2cb-a34badae36fa', 'adm #');

-- country tablosuna veri ekleme (bu tablo systemuserSettings ile ili�kilendirilmi� olmal�)
INSERT INTO Countries(Id, Text, InternationalCode, Latitude, Longitude, SystemuserSettingsId)
VALUES 
('4c6008e8-f7c3-2911-a83e-000d3a3859ba', 'Turkey', 'TR', 38.96375, 35.24332, '5f890a35-4291-4ab7-b2cb-a34badae36fa');
