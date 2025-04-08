import "bootstrap";
import "./style.css";

window.onload = () => {
  generateCard();
  setInterval(generateCard, 10000);

  document.querySelector("#cardWidth").addEventListener("input", updateSize);
  document.querySelector("#cardHeight").addEventListener("input", updateSize);
};

function generateCard() {
  const suits = ["♦", "♥", "♠", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const card = document.querySelector("#card");
  const cardValue = document.querySelector("#card-value");
  const topSuit = document.querySelector("#top-suit");
  const bottomSuit = document.querySelector("#bottom-suit");

  cardValue.textContent = value;
  topSuit.textContent = suit;
  bottomSuit.textContent = suit;

  card.classList.remove("heart", "diamond", "spade", "club");

  switch (suit) {
    case "♥":
      card.classList.add("heart");
      break;
    case "♦":
      card.classList.add("diamond");
      break;
    case "♣":
      card.classList.add("club");
      break;
    case "♠":
      card.classList.add("spade");
      break;
  }


  card.style.animation = "none";
  card.offsetHeight; 
  card.style.animation = null;
}

function updateSize() {
  const width = document.querySelector("#cardWidth").value;
  const height = document.querySelector("#cardHeight").value;
  const card = document.querySelector("#card");

  if (width) card.style.width = width;
  if (height) card.style.height = height;
}


window.generateCard = generateCard;
