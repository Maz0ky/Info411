--
-- Table structure for table `Jeux`
--

CREATE TABLE `Jeux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `annee_sortie` int(11) NOT NULL,
  `nb_joueurs` int(11) NOT NULL,
  `description` varchar(2000) NOT NULL
);

CREATE TABLE `type` (
  `nom` varchar(200) NOT NULL
);





