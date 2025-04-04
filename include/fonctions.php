<?php

require('../connect.php');

$CONNEXION = mysqli_connect ("mariadb",MARIADB_USER,MARIADB_PASSWORD,MARIADB_DATABASE);
//Connexion au serveur de bases de données
if (mysqli_connect_errno()) {
    echo 'Désolé, connexion au serveur ' . MARIADB_DATABASE . ' impossible, '. mysqli_connect_error(), "\n";
    exit();
}
// Sélection de la base de données
mysqli_select_db($CONNEXION, MARIADB_DATABASE);
if (mysqli_connect_errno()) {
    echo 'Désolé, accès à la base ' . MARIADB_DATABASE . ' impossible, '. mysqli_connect_error(), "\n";
    exit();
}
// Spécification de l'encodage UTF-8 pour dialoguer avec la BD
if (!mysqli_set_charset($CONNEXION, 'UTF8')) {
    echo 'Erreur au chargement de l\'encodage UTF-8 : ', mysqli_connect_error(), "\n";
}

$sql = "SELECT id, nom, annee_sortie, nb_joueurs, description, image FROM jeux";
$result = mysqli_query($CONNEXION, $sql);

$jeux = array();

while ($row = mysqli_fetch_assoc($result)) {
    $jeux[] = $row;
}

mysqli_close($CONNEXION);

echo json_encode($jeux);
?>