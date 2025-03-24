CREATE DATABASE IF NOT EXISTS Info411_projet_roblox;
USE Info411_projet_roblox;

CREATE TABLE IF NOT EXISTS `Jeux` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nom` VARCHAR(100) NOT NULL,
    `annee_sortie` INT(11) NOT NULL,
    `nb_joueurs` INT(11) NOT NULL,
    `description` VARCHAR(2000) NOT NULL
);



CREATE TABLE IF NOT EXISTS `Jeux` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(200) NOT NULL
);

CREATE TABLE `type` (
  `nom` varchar(200) NOT NULL
);





