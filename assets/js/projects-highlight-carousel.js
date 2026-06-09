// Get all elements on variables
const cards = document.querySelectorAll(".projects-highlights__carousel__card");
const arrowScrollToRight = document.querySelector(".navigation-scrollToRight");
const arrowScrollToLeft = document.querySelector(".navigation-scrollToLeft");

// To keep track of the active card - 0 is the first card
let activeIndex = 0;

// Function to add .is-active .is-inactive and put indexes on cards
function setActiveCard(activeIndex) {
  cards.forEach((card) => {
    card.classList.remove("is-active");
    card.classList.remove("is-inactive");
  });

  // Add .is-active to the active card / index 0
  cards[activeIndex].classList.add("is-active");

  // Add is-inactive to other cards
  cards.forEach((card, i) => {
    if (i != activeIndex) {
      card.classList.add("is-inactive");
    }
  });
}

arrowScrollToRight.addEventListener("click", function () {
  if (activeIndex < 2) {
    activeIndex++;
    setActiveCard(activeIndex);
    updateArrows(activeIndex);
  }
});
arrowScrollToLeft.addEventListener("click", function () {
  if (activeIndex > 0) {
    activeIndex--;
    setActiveCard(activeIndex);
    updateArrows(activeIndex);
  }
});

// Update arrows color
function updateArrows(activeIndex) {
  if (activeIndex === 0) {
    arrowScrollToLeft.classList.add("is-disabled");
    arrowScrollToRight.classList.remove("is-disabled");
  } else if (activeIndex === 1) {
    arrowScrollToRight.classList.remove("is-disabled");
    arrowScrollToLeft.classList.remove("is-disabled");
  } else {
    arrowScrollToRight.classList.add("is-disabled");
  }
}

updateArrows(activeIndex);

cards.forEach((card, index) => {});
