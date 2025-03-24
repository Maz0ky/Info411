<?php

require('../connect.php');

$CONNEXION = mysqli_connect(SERVEUR_BD, LOGIN_BD, PASS_BD, NOM_BD);


$sql = "SELECT id, nom, annee_sortie, nb_joueurs, description FROM jeux";
$result = mysqli_query($CONNEXION, $sql);

$jeux = array();

while ($row = mysqli_fetch_assoc($result)) {
    $jeux[] = $row;
}

mysqli_close($CONNEXION);

echo json_encode($jeux);
?>