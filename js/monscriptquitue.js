const page = document.getElementById("groot");

function affiche_jeu(source){
    var title = document.createElement("h2");
    title.textContent = "GAMING"


    var img_container = document.createElement("img");
    img_container.src = "./../img/dress_to_impress.jpg"

    var desc = document.createElement("p");
    desc.textContent = "Jeu TOUT NUL"

    var lien = document.createElement("blockquote");
    var lien_jeu = document.createElement("a");
    lien_jeu.href = "https://www.roblox.com/fr/games/15101393044/Dress-To-Impress-STYLE-SHOWDOWN"
    var nom_jeu = document.createElement("strong");
    nom_jeu.textContent = "Dress To Impress"
    lien.appendChild(lien_jeu);
    lien.appendChild(nom_jeu);


    source.appendChild(title);
    source.appendChild(img_container);
    source.appendChild(desc);
    source.appendChild(lien);
}

