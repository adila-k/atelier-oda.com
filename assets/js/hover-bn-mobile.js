/////////////////////
// HOVER ON MOBILE //
/////////////////////

if (windowWidth < 768) {
  const downloadButton = document.querySelector(".btn-portfolio");

  let isVisible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible = true;
      } else {
        isVisible = false;
      }
    },
    { threshold: 0 },
  );

  window.addEventListener("scroll", () => {
    visibleCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = (rect.top + rect.bottom) / 2;
      const screenCenter = window.innerHeight / 2;
      const isNearCenter = Math.abs(cardCenter - screenCenter) < 44;

      if (isNearCenter) {
        card.querySelector(".picture-hover").classList.add("active");
      } else {
        card.querySelector(".picture-hover").classList.remove("active");
      }
    });
  });
}
