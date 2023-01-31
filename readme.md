GitHubConnected

check GIT Commit message 

GRANT EXECUTE, SELECT, SHOW VIEW, ALTER, ALTER ROUTINE, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, CREATE VIEW, DELETE, DROP, EVENT, INDEX, INSERT, REFERENCES, TRIGGER, UPDATE, LOCK TABLES  ON `coc_spring_mvc`.* TO 'coc_spring_mvc_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;



CREATE TABLE `coc_sheet` (
  `user_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `characterName` VARCHAR(200) NOT NULL,
  `playerName` VARCHAR(200) NOT NULL,
  `characterJob` VARCHAR(200) NOT NULL,
  `characterAge` VARCHAR(200) NOT NULL,
  `characterGender` VARCHAR(200) NOT NULL,

  `STR` INT NOT NULL,
  `DEX` INT NOT NULL,
  `POW` INT NOT NULL,
  `CON` INT NOT NULL,
  `APP` INT NOT NULL,
  `EDU` INT NOT NULL,
  `SIZ` INT NOT NULL,
  `INT` INT NOT NULL,
  `LUK` INT NOT NULL,
  `occupationScore` INT,
  `interestScore` INT,
  `bonusScore` INT,
  `totalScore` INT,
`1` INT,
`2` INT,
`3` INT,
`4` INT,
`5` INT,
`6` INT,
`7` INT,
`8` INT,
`9` INT,
`10` INT,
`11` INT,
`12` INT,
`13` INT,
`14` INT,
`15` INT,
`16` INT,
`17` INT,
`18` INT,
`19` INT,
`20` INT,
`21` INT,
`22` INT,
`23` INT,
`24` INT,
`25` INT,
`26` INT,
`27` INT,
`28` INT,
`29` INT,
`30` INT,
`31` INT,
`32` INT,
`33` INT,
`34` INT,
`35` INT,
`36` INT,
`37` INT,
`38` INT,
`39` INT,
`40` INT,
`41` INT,
`42` INT,
`43` INT,
`44` INT,
`45` INT,
`46` INT,
`47` INT,



 PRIMARY KEY (`user_id`)
)
COLLATE='utf8mb4_general_ci'
;