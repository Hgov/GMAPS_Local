-- systemuserSettings tablosuna veri ekleme
INSERT INTO systemuserSettings (Id, FullName)
VALUES ('5f890a35-4291-4ab7-b2cb-a34badae36fa', 'CRMadm #');

-- country tablosuna veri ekleme (bu tablo systemuserSettings ile iliþkilendirilmiþ olmalý)
INSERT INTO Countries(Id, Text, InternationalCode, Latitude, Longitude, SystemuserSettingsId)
VALUES 
('4c6008e8-f7c3-e911-a83e-000d3a3859ba', 'Turkey', 'TR', 38.96375, 35.24332, '5f890a35-4291-4ab7-b2cb-a34badae36fa');
