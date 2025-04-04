fetch('include/fonctions.php')
  .then(response => response.json())
  .then(data => {
    const jeuxContainer = document.getElementById('main-container');  

    data.forEach(jeu => {
      
      const jeuDiv = document.createElement('div');
      jeuDiv.classList.add('card');


      const img = document.createElement('img');
      img.src = jeu.image;  
      img.alt = jeu.nom;    

      
      const titre = document.createElement('h3');
      titre.textContent = jeu.nom;

      
      const desc = document.createElement('p');
      desc.textContent = jeu.description;

      
      const details = document.createElement('p');
      details.classList.add('game-details');
      details.textContent = `Année de sortie : ${jeu.annee_sortie} | Nombre de joueurs : ${jeu.nb_joueurs}`;

      
      jeuDiv.appendChild(img);
      jeuDiv.appendChild(titre);
      jeuDiv.appendChild(desc);
      jeuDiv.appendChild(details);

      
      jeuxContainer.appendChild(jeuDiv);
    });

    // lignes de code pour faire defiler les cartes de jeux (tuto ytb)
    const checkVisibility = () => {
      const cards = document.querySelectorAll('.card');
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top + scrollY;
        if (cardTop < windowHeight + scrollY - 100) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    };

    
    window.addEventListener('scroll', checkVisibility);

    
    checkVisibility();

    // fixe le zoom de l'image car css bizarre avec les img
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        card.querySelector('img').style.transform = 'scale(1)'; 
      });
      card.addEventListener('mouseleave', function() {
        card.querySelector('img').style.transform = 'scale(1)'; 
      });
    });
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des jeux:', error);
  });
