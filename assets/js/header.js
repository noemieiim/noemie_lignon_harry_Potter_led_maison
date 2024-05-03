document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-navigation");
    const menuToggle = document.getElementById("icons");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
  
    async function fetchPersonnages() {
      const url = `https://hp-api.lainocs.fr/characters`;
      const response = await fetch(url);
      const data = await response.json();
      displayPersonnages(data);
    }
  
    function displayPersonnages(personnages) {
      const container = document.getElementById("personnage-container");//liste 
      const template = document.getElementById("personnage-template");//carte d'un personnage
      
  
      // Supprime les cartes précédentes, sauf le template
      container.innerHTML = "";
      container.appendChild(template);
  
      personnages.forEach((personnage) => {
        const personnageCard = template.cloneNode(true);
        personnageCard.style.display = "block"; // Rend la carte visible
        personnageCard.id = ""; // Enlève l'id pour éviter les doublons
        personnageCard.querySelector('.personnage-img').src = personnage.image;
        personnageCard.querySelector(".personnage-name").textContent = personnage.name;
        personnageCard.querySelector(".personnage-description").textContent = personnage.overview;
        personnageCard.querySelector(
          ".personnage-details-link"
        ).href = `details.html?slug=${personnage.slug}`;
        container.appendChild(personnageCard);
      });
    }
  
  
    fetchPersonnages();
  });