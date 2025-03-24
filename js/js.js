const page = document.getElementById("main-container");

function affiche_jeu(page, jeu) {
    var title = document.createElement("h2");
    title.textContent = jeu.nom;  

    var annee = document.createElement("p");
    annee.textContent = "Année de sortie : " + jeu.annee_sortie; 

    var nb_joueurs = document.createElement("p");
    nb_joueurs.textContent = "Nombre de joueurs : " + jeu.nb_joueurs; 

    var desc = document.createElement("p");
    desc.textContent = "Description : " + jeu.description;  

    page.appendChild(title);
    page.appendChild(annee);
    page.appendChild(nb_joueurs);
    page.appendChild(desc);
}


fetch('include/fonctions.php') 
    .then(response => response.json())
    .then(jeux => {
        jeux.forEach(jeu => {
            affiche_jeu(page, jeu); 
        });
    })
    .catch(error => {
        console.error('erreur quand on recupere les jeux', error);
    });

