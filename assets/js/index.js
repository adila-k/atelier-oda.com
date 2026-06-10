///////////////////////////////
// NO HEADER WHILE IN FOOTER //
///////////////////////////////

const header = document.getElementById("header-content");
const footer = document.getElementById("footer-content");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.style.opacity = "0";
    } else {
      header.style.opacity = "1";
    }
  });
});

observer.observe(footer);

///////////////////
// HERO CAROUSEL //
///////////////////

fetch("../fiche-projets.json")
  .then((response) => response.json())
  .then((data) => {
    const featuredProjects = data.filter(
      (project) => project.featured === true,
    );

    const slides = featuredProjects.map((project) => ({
      src: project.img_1,
      nom: project.nom,
      localisation: project.localisation,
    }));
    const hero = document.querySelector(".hero");
    const dotsNav = document.getElementById("dots");
    const projectName = document.querySelector(".project__title");
    const projectLocation = document.querySelector(".project__location");

    const DURATION = 4;
    const FADE_TIME = 1.5;
    let current = 0;
    let timeline = null;

    const slideElements = slides.map((data, i) => {
      const div = document.createElement("div");
      div.className = "slide";
      div.dataset.index = i;

      const img = document.createElement("img");
      img.className = "slide__img";
      img.src = data.src;
      img.alt = data.nom;

      div.appendChild(img);
      hero.insertBefore(div, dotsNav);

      //dot
      const dot = document.createElement("button");
      dot.className = "hero__dot";
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsNav.appendChild(dot);

      return div;
    });
    const dotElements = dotsNav.querySelectorAll(".hero__dot");

    // Update project's name and location
    function updateProjectInfo(data) {
      projectName.style.opacity = 0;
      projectLocation.style.opacity = 0;

      setTimeout(() => {
        projectName.textContent = data.nom;
        projectLocation.textContent = data.localisation;
        projectName.style.opacity = 1;
        projectLocation.style.opacity = 1;
      }, 500); // correspond à la durée de la transition
    }

    // Dots

    function setDot(idx) {
      dotElements.forEach((dot, i) =>
        dot.classList.toggle("is-active", i === idx),
      );
    }
    function goTo(next) {
      if (current === next) return;

      // Kill the current autoplay
      if (timeline) timeline.kill();

      const from = slideElements[current];
      const to = slideElements[next];

      to.classList.add("is-active");
      setDot(next);

      const tl = gsap.timeline({
        onComplete: () => {
          from.classList.remove("is-active");
          current = next;
          updateProjectInfo(slides[current]);
          startAutoplay();
        },
      });
      tl.to(from, { opacity: 0, duration: FADE_TIME, ease: "power1.inOut" }).to(
        to,
        { opacity: 1, duration: FADE_TIME, ease: "power1.inOut" },
        0,
      );

      timeline = tl;
    }

    // Autoplay

    function startAutoplay() {
      const next = (current + 1) % slides.length;

      // on rend la slide courante visible si besoin
      gsap.set(slideElements[current], { opacity: 1 });
      slideElements[current].classList.add("is-active");
      setDot(current);

      // Display project's informations
      updateProjectInfo(slides[current]);

      // attente puis fondu vers la suivante
      timeline = gsap.delayedCall(DURATION, () => {
        const from = slideElements[current];
        const to = slideElements[next];

        to.classList.add("is-active");

        const tl = gsap.timeline({
          onComplete: () => {
            from.classList.remove("is-active");
            gsap.set(from, { opacity: 0 });
            current = next;
            updateProjectInfo(slides[current]);
            startAutoplay();
          },
        });

        tl.to(from, {
          opacity: 0,
          duration: FADE_TIME,
          ease: "power1.inOut",
        }).to(to, { opacity: 1, duration: FADE_TIME, ease: "power1.inOut" }, 0);

        timeline = tl;
      });
    }

    gsap.set(slideElements, { opacity: 0 });
    gsap.set(slideElements[0], { opacity: 1 });

    startAutoplay();
  });

////////////////////////////////
// PROJECT HIGHLIGHT CAROUSEL //
////////////////////////////////

// Get all elements on variables
const cards = document.querySelectorAll(".projects-highlights__carousel__card");
const arrowScrollToRight = document.querySelector(".navigation-scrollToRight");
const arrowScrollToLeft = document.querySelector(".navigation-scrollToLeft");
let activeIndex = 0; // To keep track of the active card - 0 is the first card

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

cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    activeIndex = index;
    setActiveCard(index);
    updateArrows(index);
  });
});

//////////////////////////////////////////////////////////
// GENERATE RANDOM CARDS ON PROJECT HIGHLIGHT CAROUSEL ///
//////////////////////////////////////////////////////////

fetch("../fiche-projets.json")
  .then((response) => response.json())
  .then((data) => {
    // Create a table to store random indexes
    const randomIndexes = [];

    // Get 3 random indexes
    while (randomIndexes.length < 3) {
      const index = Math.floor(Math.random() * data.length);
      if (!randomIndexes.includes(index)) {
        randomIndexes.push(index);
      }
    }
    // Create an array to get indexes of projects
    const randomProjects = randomIndexes.map((index) => data[index]);

    randomProjects.forEach((project, index) => {
      const imageElement = cards[index].querySelector(
        ".projects-highlights__carousel__card__picture-item",
      );
      const titleElement = cards[index].querySelector(
        ".projects-highlights__carousel__card__title",
      );
      const linkElement = cards[index].querySelector(
        ".projects-highlights__carousel-project-link",
      );

      imageElement.src = project.img_1;
      titleElement.textContent = project.programme;
      linkElement.href = `/assets/pages/fiche-projets.html?id=${project.id}`;
    });
  });
