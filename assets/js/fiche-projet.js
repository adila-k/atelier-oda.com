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
  localisation.innerText = projet.localisation ?? "";
  sectionFiche.appendChild(localisation);

  // Images — on boucle sur img_1 à img_7
  for (let i = 1; i <= 7; i++) {
    const src = projet[`img_${i}`];
    if (src) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = projet.nom;
      sectionFiche.appendChild(img);
    }
  }

  const detail_title = document.createElement("div");
  detail_title.classList.add("detail_projet");
  detail_title.textContent = "Detail du projet";
  sectionFiche.appendChild(detail_title);

  /*   
=============================================
------------DETAIL DES PROJETS---------------
=============================================
 */

  // Programme
  const programmeContainer = document.createElement("div");
  programmeContainer.classList.add("detail_container");
  const programme = document.createElement("div");
  programme.classList.add("detail_title");
  programme.textContent = "Programme";
  const programme_detail = document.createElement("div");
  programme_detail.classList.add("detail_info");
  programme_detail.innerText = projet.programme ?? "";

  // Maitrise d'ouvrage
  const maitriseContainer = document.createElement("div");
  maitriseContainer.classList.add("detail_container");
  const maitrise = document.createElement("div");
  maitrise.classList.add("detail_title");
  maitrise.textContent = "Maitrise d'Ouvrage";
  const maitrise_detail = document.createElement("div");
  maitrise_detail.classList.add("detail_info");
  maitrise_detail.innerText = projet.maitrise_ouvrage ?? "";

  // Mission
  const missionContainer = document.createElement("div");
  missionContainer.classList.add("detail_container");
  const mission = document.createElement("div");
  mission.classList.add("detail_title");
  mission.textContent = "Mission";
  const mission_detail = document.createElement("div");
  mission_detail.classList.add("detail_info");
  mission_detail.innerText = projet.mission ?? "";

  // Prix
  const prixContainer = document.createElement("div");
  prixContainer.classList.add("detail_container");
  const prix = document.createElement("div");
  prix.classList.add("detail_title");
  prix.textContent = "Prix";
  const prix_detail = document.createElement("div");
  prix_detail.classList.add("detail_info");
  prix_detail.innerText = projet.prix ?? "";

  // Surface
  const surfaceContainer = document.createElement("div");
  surfaceContainer.classList.add("detail_container");
  const surface = document.createElement("div");
  surface.classList.add("detail_title");
  surface.textContent = "Surface";
  const surface_detail = document.createElement("div");
  surface_detail.classList.add("detail_info");
  surface_detail.innerText = projet.surface ?? "";

  // Equipe
  const equipeContainer = document.createElement("div");
  equipeContainer.classList.add("detail_container");
  const equipe = document.createElement("div");
  equipe.classList.add("detail_title");
  equipe.textContent = "Equipe";
  const equipe_detail = document.createElement("div");
  equipe_detail.classList.add("detail_info");
  equipe_detail.innerText = projet.equipe ?? "";

  // Image
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("detail_container");
  const image = document.createElement("div");
  image.classList.add("detail_title");
  image.textContent = "Image";
  const image_detail = document.createElement("div");
  image_detail.classList.add("detail_info");
  image_detail.innerText = projet.image ?? "";

  // On imbrique les deux dans la div parente
  programmeContainer.appendChild(programme);
  programmeContainer.appendChild(programme_detail);

  maitriseContainer.appendChild(maitrise);
  maitriseContainer.appendChild(maitrise_detail);

  missionContainer.appendChild(mission);
  missionContainer.appendChild(mission_detail);

  prixContainer.appendChild(prix);
  prixContainer.appendChild(prix_detail);

  surfaceContainer.appendChild(surface);
  surfaceContainer.appendChild(surface_detail);

  equipeContainer.appendChild(equipe);
  equipeContainer.appendChild(equipe_detail);

  imageContainer.appendChild(image);
  imageContainer.appendChild(image_detail);

  // On ajoute le conteneur au DOM
  sectionFiche.appendChild(programmeContainer);
  sectionFiche.appendChild(maitriseContainer);
  sectionFiche.appendChild(missionContainer);
  sectionFiche.appendChild(prixContainer);
  sectionFiche.appendChild(surfaceContainer);
  sectionFiche.appendChild(equipeContainer);
  sectionFiche.appendChild(imageContainer);
}
