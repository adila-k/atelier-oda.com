const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const reponse = await fetch("/assets/fiche-projets.json");
const fiches = await reponse.json();

const projet = fiches.find((p) => p.id === id);

if (!projet) {
  document.querySelector(".fiche").innerText = "Projet introuvable.";
} else {
  const sectionFiche = document.querySelector(".fiche");

  // Titre et localisation

  const nom = document.createElement("h1");
  nom.innerText = projet.nom ?? "";
  sectionFiche.appendChild(nom);

  const localisation = document.createElement("p");
  localisation.classList.add("localisation");
  localisation.innerText = projet.localisation ?? "";
  sectionFiche.appendChild(localisation);

  /*   
=============================================
------------AFFICHAGE DES IMAGES-------------
=============================================
 */

  //AFFICHAGE DES IMAGES

  for (let i = 1; i <= 10; i++) {
    const src = projet[`img_${i}`];
    if (src) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = projet.nom;

      if (i === 1) {
        img.classList.add("image_principale");
      } else {
        img.classList.add("miniature");

        img.addEventListener("click", () => {
          openOverlay(src, projet.nom);
        });
      }

      sectionFiche.appendChild(img);
    }
  }

  //GENERATION DE L'OVERLAY

  function openOverlay(src, alt) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const imgOverlay = document.createElement("img");
    imgOverlay.src = src;
    imgOverlay.alt = alt;

    overlay.appendChild(imgOverlay);
    document.body.appendChild(overlay);

    // Clic sur l'overlay → fermeture
    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  }

  /*   
==============================================
------------DETAIL DES PROJETS----------------
==============================================
 */

  //TITRE SECTION

  const detail_title = document.createElement("div");
  detail_title.classList.add("detail_projet");
  detail_title.textContent = "Detail du projet";
  sectionFiche.appendChild(detail_title);

  //INFOS PROJETS

  function createDetail(titleText, value, url = null) {
    const container = document.createElement("div");
    container.classList.add("detail_container");

    const title = document.createElement("div");
    title.classList.add("detail_title");
    title.textContent = titleText;

    const info = document.createElement("div");
    info.classList.add("detail_info");
    info.innerText = value ?? "";

    //LIEN CLIQUABLE SI URL

    if (url) {
      const lien = document.createElement("a");
      lien.href = url;
      lien.target = "_blank";
      lien.textContent = value ?? "";
      info.appendChild(lien);
    } else {
      info.innerText = value ?? "";
    }

    // MASQUAGE DU BLOC SI VALEUR VIDE

    if (!value) {
      container.style.display = "none";
    }

    container.appendChild(title);
    container.appendChild(info);
    return container;
  }

  sectionFiche.appendChild(createDetail("Programme", projet.programme));
  sectionFiche.appendChild(
    createDetail("Maitrise d'Ouvrage", projet.maitrise_ouvrage),
  );
  sectionFiche.appendChild(createDetail("Mission", projet.mission));
  sectionFiche.appendChild(createDetail("Prix", projet.prix));
  sectionFiche.appendChild(createDetail("Surface", projet.surface));
  sectionFiche.appendChild(createDetail("Equipe", projet.equipe));
  sectionFiche.appendChild(
    createDetail("Images", projet.images, projet.images_url),
  );
}
