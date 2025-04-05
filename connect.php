<?php
/*parcours le fichier .env et recupere les variables */
$lines = file('../.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

foreach ($lines as $line) {
    $line = trim($line);
    if ($line === '' || strpos($line, '#') === 0) continue;

    [$key, $value] = explode('=', $line, 2);
    putenv(trim($key) . '=' . trim($value));
}

$host = getenv('HOST');
$dbname = getenv('NOM_BD');
$user = getenv('UTILISATEUR_BD');
$pass = getenv('MDP_BD');
$passroot = getenv('MDP_ROOT'); 

