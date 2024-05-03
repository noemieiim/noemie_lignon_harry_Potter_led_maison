const params = new URLSearchParams(window.location.search);
const cardId = params.get("slug");

async function fetchCard(id) {
  const url = `https://hp-api.lainocs.fr/characters/${id}`;
  fetch(url)
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
      displayCard(r);
    });
}

function displayCard(card) {
  const template = document.getElementById("card-details");
  /*
  template.querySelector(".card-image").src = card.image;
  template.querySelector(".card-name").textContent = card.name;
  template.querySelector(".card-actor").textContent = card.actor + " (acteur)";
  template.querySelector(".card-house").textContent = "Maison : " + card.house;
  template.querySelector(".card-wand").textContent =
    "Baguette magique : " + card.wand;
  template.querySelector(".card-role").textContent = "Statut : " + card.role;

  if (card.house == "") {
    template.querySelector(".card-wand").textContent = "Maison : N/A";
  }
  if (card.wand == "") {
    template.querySelector(".card-wand").textContent = "Baguette magique : N/A";
  }
  if (card.role == "") {
    template.querySelector(".card-wand").textContent = "Statut : N/A";
  }
*/
  // ENVOIE A THONNY

  const url = "http://192.168.177.155:3000";
  const data = { house: card.house };
  console.log("fetch");
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => {
      r.json();
    })
    .then((r) => console.log(r))
    .catch((error) => {
      console.log(error);
    });

  // A ENVOYE A THONNY
}

fetchCard(cardId);
