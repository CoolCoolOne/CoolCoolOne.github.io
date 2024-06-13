let newCardUrl;

const card = document.querySelector(".card__inner");
card.addEventListener("click", function (e) {
  if (card.classList.contains('is-flipped')) {
    card.classList.toggle('is-flipped');
  } else {
    card.classList.toggle('is-flipped');
    newCardUrl = idGen();
    classBack.style.backgroundImage = newCardUrl;
  };
});


const buttonOpen = document.querySelector(".button");
buttonOpen.addEventListener("click", function (e) {
  if (card.classList.contains('is-flipped')) {
    card.classList.toggle('is-flipped');
  } else {
    card.classList.toggle('is-flipped');
    newCardUrl = idGen();
    classBack.style.backgroundImage = newCardUrl;
  };
});

let classBack = document.getElementById('cardBack');
// const buttonOpen = document.querySelector(".button");
// classBack.style.backgroundImage = "url(./imgs/rainbowBri.jpg)";`url(${openCardUrl})`
// console.log(newUrlfinal);
classBack.style.backgroundImage = newCardUrl;



let rainbow = {
  url: "./imgs/rainbowBri.jpg",
  index: 0
};
let aiGirl = {
  url: "./imgs/back_aiGirl.jpg",
  index: 1
};
let GreenRoom = {
  url: "./imgs/GreenRoom.jpg",
  index: 2
};

let cards =
  [".url(/imgs/GreenRoom.jpg)",
    "url(./imgs/back_aiGirl.jpg)",
    "url(./imgs/GreenRoom.jpg)",
    "url(./imgs/hills.jpg)",
    "url(./imgs/roots.jpg)",
    "url(./imgs/siloet.jpg)",
    "url(./imgs/townRiver.jpg)"];

function idGen() {
  let openCardId = getRandomInt(0, 7);
  let openCardUrl;
  cards.forEach((element, index) => {
    if (index === openCardId) {
      openCardUrl = element;
    }
  });
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  console.log(openCardUrl);
  return openCardUrl;
};

