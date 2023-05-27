INSERT INTO movie_items (name, thumbnail_url, price, description, category)
  VALUES ('Die hard (1988)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/diehard.png?raw=true', 599, 'NYPD cop John McClanes plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.', 'action'),
          ('Raiders of the Lost Ark (1981)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/raidersofthelostark.png?raw=true', 599, 'When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.', 'action'),
          ('The Exorcist (1973)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/theexorcist.png?raw=true', 699, '12-year-old Regan MacNeil begins to adapt an explicit new personality as strange events befall the local area of Georgetown. Her mother becomes torn between science and superstition in a desperate bid to save her daughter, and ultimately turns to her last hope: Father Damien Karras, a troubled priest who is struggling with his own faith.', 'horror'),
          ('The Shining (1980)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/theshining.png?raw=true', 499, 'Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they arent prepared for the madness that lurks within.', 'horror'),
          ('The Matrix(1999)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/thematrix.png?raw=true', 299, 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.', 'sci-fi'),
          ('Jurassic Park (1993)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/jurassicpark.png?raw=true', 499, 'A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.', 'sci-fi'),
          ('2001: A Space Odyssey (1968)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/aspaceodyssey.png?raw=true', 699, 'Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the worlds most advanced super computer.', 'sci-fi'),
          ('Titanic (1998)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/titanic.png?raw=true', 599, '101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanics departure through to its death—on its first and last voyage—on April 15, 1912.', 'romance'),
          ('Airplane! (1980)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/airplane.png?raw=true', 599, 'An ex-fighter pilot forced to take over the controls of an airliner when the flight crew succumbs to food poisoning.', "Comedy"),
          ('Citizen Kane (1941)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/citizenkane.png?raw=true', 'Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.', 'comedy'),
          ('The Godfather(1972)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/thegodfather.png?raw=true', 599, 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.', 'drama'),
          ('Vertigo (1958)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/vertigo.png?raw=true', 799, 'A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friends wife, all the while becoming dangerously obsessed with her.', 'drama'),
          ('Spirited Away (2001)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/spiritedaway.png?raw=true', 299, 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.', 'animation');
          ('Who Framed Roger Rabbit? (1988)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/whoframedrogerrabbit.png?raw=true', 599, 'Toon star Roger is worried that his wife Jessica is playing pattycake with someone else, so the studio hires detective Eddie Valiant to snoop on her. But the stakes are quickly raised when Marvin Acme is found dead and Roger is the prime suspect.', 'animation');
          ('The Wizard of Oz (1939)', 'https://github.com/AndrewGalatsan/Retro-Movies/blob/master/public/images/thewizardofoz.png?raw=true', 799, 'Young Dorothy finds herself in a magical world where she makes friends with a lion, a scarecrow and a tin man as they make their way along the yellow brick road to talk with the Wizard and ask for the things they miss most in their lives. The Wicked Witch of the West is the only thing that could stop them.', 'musical');



INSERT INTO users (name, phone)
  VALUES ('Ronald', '6478573734'),
  ('Bill', '6478805456'),
  ('John', '4168806393');


INSERT INTO movie_orders (user_id, created_at, customer_notes)
  VALUES (1, NOW(), 'Thank you!'),
          (2, NOW(),'Thank you'),
          (3, NOW(),'Looking forward to watching this');

INSERT INTO ordered_items (order_id, movie_item_id, qty)
  VALUES (1, 11, 2),
          (2, 4, 2),
          (3, 10,1);
