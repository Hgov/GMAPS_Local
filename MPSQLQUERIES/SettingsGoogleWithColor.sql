-- settingsGoogle tablosuna veri ekleme
INSERT INTO settingsGoogle (Id, DefaultCircleColorCode, MarkerIconCode, Name)
VALUES ('d86ebb04-28ef-ed11-8849-000d3abd8dc2', '#f409c5', 1, 'settings');

-- colorSettings tablosuna veri ekleme (bu tablo settingsGoogle ile iliþkilendirilmiþ olmalý)
INSERT INTO colorSettings (Id, Maks, Min, Name, ColorCode, SettingsGoogleId)
VALUES 
('6195c2c4-28ef-ed11-8849-000d3abd8dc2', 1, 0, '0-1', '#ed0920', 'd86ebb04-28ef-ed11-8849-000d3abd8dc2'),
('1eb9e1f4-28ef-ed11-8849-000d3abd8dc2', 5, 2, '2-5', '#09e2e2', 'd86ebb04-28ef-ed11-8849-000d3abd8dc2');
