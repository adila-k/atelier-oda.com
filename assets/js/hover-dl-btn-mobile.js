/////////////////////////////////////
// DOWNLOAD BUTTON HOVER ON MOBILE //
/////////////////////////////////////
const downloadButton = document.querySelector(".btn-portfolio");
console.log("downloadButton :", downloadButton);
if (downloadButton) {
  console.log("window.innerWidth :", window.innerWidth);
  if (window.innerWidth < 768) {
    console.log("On entre dans le if 768");
    let isVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Observer déclenché", entries[0].isIntersecting);
        if (entries[0].isIntersecting) {
          isVisible = true;
        } else {
          isVisible = false;
        }
      },
      { threshold: 0 },
    );

    observer.observe(downloadButton);
    console.log("Observer actif sur :", downloadButton);

    window.addEventListener("scroll", () => {
      if (isVisible) {
        const rect = downloadButton.getBoundingClientRect();
        const buttonCenter = (rect.top + rect.bottom) / 2;
        const screenCenter = window.innerHeight / 2;
        const isNearCenter = Math.abs(buttonCenter - screenCenter) < 60;

        if (isNearCenter) {
          downloadButton.classList.add("active");
        } else {
          downloadButton.classList.remove("active");
        }
      }
    });
  }
}
