let windowWidth = innerWidth;
if (windowWidth < 768) {
  document.addEventListener("DOMContentLoaded", () => {
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
          card.querySelector(".project__picture-hover").classList.add("active");
        } else {
          card
            .querySelector(".project__picture-hover")
            .classList.remove("active");
        }
      });
    });
  });
}
