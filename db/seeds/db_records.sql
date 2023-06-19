INSERT INTO movie_items (name, thumbnail_url, price, description, category, year)
VALUES  ('Spirited Away', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/spiritedaway.png?raw=true', 1299, 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.', 'Anime',2001),
         ('The Matrix','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/the%20matrix.jpeg?raw=true',  1299, 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.', 'Sci-Fi',1999),
         ('Titanic', 'https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/Titanic.jpeg?raw=true', 1299, '101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic''s departure through to its death—on its first and last voyage—on April 15, 1912.', 'Romance',1997),
         ('Jurassic Park', 'https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/jurassic%20park.jpeg?raw=true', 1299, 'A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.', 'Sci-Fi',1994),
         ('Who Framed Roger Rabbit','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/Who%20Framed%20Roger%20Rabbit%3F.jpeg?raw=true', 1399,  'Toon star Roger is worried that his wife Jessica is playing pattycake with someone else, so the studio hires detective Eddie Valiant to snoop on her. But the stakes are quickly raised when Marvin Acme is found dead and Roger is the prime suspect.', 'Fantasy',1988),
         ('Die Hard','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/diehard.jpeg?raw=true', 1399,'NYPD cop John McClane''s plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.', 'Action',1988),
         ('Raiders of the Lost Ark','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/Raiders%20of%20the%20Lost%20Ark.jpg?raw=true', 1399, 'When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.', 'Adventure',1981),
         ('Airplane!','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/Airplane!.jpeg?raw=true', 1399, 'An ex-fighter pilot forced to take over the controls of an airliner when the flight crew succumbs to food poisoning.', 'Comedy',1980),
         ('The Shining',  'https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/the%20shining.jpeg?raw=true',1399, 'Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren''t prepared for the madness that lurks within.', 'Horror',1980),
         ('The Exorcist', 'https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/the%20exorcist.jpg?raw=true',1599,  '12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.', 'Horror',1973),
         ('The Godfather', 'https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/The%20Godfather.jpeg?raw=true', 1599, 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.', 'Drama',1972),
         ('2001: A Space Odyssey','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/2001-%20A%20Space%20Odyssey.jpeg?raw=true',1599,'description', 'Sci-Fi',1969 ),
         ('Vertigo','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/Vertigo.jpeg?raw=true',1599,  'A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend''s wife, all the while becoming dangerously obsessed with her.','Mystery',1958),
         ('Citizen Kane','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/Citizen%20Kane.jpeg?raw=true', 1599,  'Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.', 'Drama',1941),
         ('The Wizard of Oz','https://github.com/AndrewGalatsan/Movie-Tickets/blob/master/public/images/the%20wizard%20of%20oz.jpeg?raw=true',  1599, 'Young Dorothy finds herself in a magical world where she makes friends with a lion, a scarecrow and a tin man as they make their way along the yellow brick road to talk with the Wizard and ask for the things they miss most in their lives. The Wicked Witch of the West is the only thing that could stop them.', 'Musical',1939);



INSERT INTO users (name, phone)
  VALUES ('Ronald', '6478573734'),
  ('Bill', '6478805456'),
  ('John', '4168806393');


INSERT INTO movie_orders (user_id, created_at)
  VALUES (1, NOW()),
        (2, NOW()),
        (3, NOW());

INSERT INTO ordered_items (order_id, movie_item_id, showtimes, qty)
  VALUES  (1, 11,'11:30', 2),
          (2, 4, '2:30', 2),
          (3, 10, '9:00',1);
