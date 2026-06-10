const windowWidth = window.innerWidth;

fetch("../fiche-projets.json")
  .then((response) => response.json())
  .then((projets) => {
    const cardsContainer = document.querySelector(".projects-grid");

    // Index to track where to create a new bootstrap row
    let index = 0;
    let currentRow;

    projets.forEach((projet) => {
      // Create a card
      const card = document.createElement("div");
      card.classList.add("project__card");
      // Create elements of a card and set classes if needed
      const projetPictureWrapper = document.createElement("div");
      projetPictureWrapper.classList.add("project__picture");
      const projetImage = document.createElement("img");
      projetImage.src = projet.img_1;
      projetImage.alt = projet.nom;
      const projetImageHover = document.createElement("div");
      projetImageHover.classList.add("picture-hover");
      const projetImageHoverIcon = document.createElement("img");
      const projetImageHoverLink = document.createElement("a");
      projetImageHoverIcon.classList.add("more-icon");
      projetImageHoverIcon.alt = "Voir le projet";
      projetImageHoverIcon.src = "../img/icons/hover-more-icon.png";
      projetImageHoverLink.href = `/assets/pages/fiche-projets.html?id=${projet.id}`;
      const projetLink = document.createElement("a");
      projetLink.textContent = projet.programme;
      projetLink.href = `/assets/pages/fiche-projets.html?id=${projet.id}`;

      // Link everything together
      projetImageHover.appendChild(projetImageHoverIcon);
      projetImageHoverLink.appendChild(projetImageHover);
      projetPictureWrapper.appendChild(projetImage);
      projetPictureWrapper.appendChild(projetImageHoverLink);
      card.appendChild(projetPictureWrapper);
      card.appendChild(projetLink);

      if (index % 3 === 0) {
        const newRow = document.createElement("div");
        const newCol = document.createElement("div");
        newCol.classList.add("col-md-4");
        newRow.classList.add("row");
        newRow.classList.add("px-0");

        newCol.appendChild(card);
        newRow.appendChild(newCol);

        cardsContainer.appendChild(newRow);

        index++;
        currentRow = newRow;
      } else {
        const newCol = document.createElement("div");
        newCol.classList.add("col-md-4");
        newCol.appendChild(card);
        currentRow.appendChild(newCol);
        index++;
      }
    });

    /////////////////////
    // HOVER ON MOBILE //
    /////////////////////

    if (windowWidth < 768) {
      const cards = document.querySelectorAll(".project__card");
      let visibleCards = [];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleCards.push(entry.target);
            } else {
              visibleCards = visibleCards.filter((c) => c !== entry.target);
            }
          });
        },
        { threshold: 0 },
      );

      cards.forEach((card) => observer.observe(card));

      window.addEventListener("scroll", () => {
        visibleCards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = (rect.top + rect.bottom) / 2;
          const screenCenter = window.innerHeight / 2;
          const isNearCenter = Math.abs(cardCenter - screenCenter) < 150;

          if (isNearCenter) {
            card.querySelector(".picture-hover").classList.add("active");
          } else {
            card.querySelector(".picture-hover").classList.remove("active");
          }
        });
      });
    }
  });
