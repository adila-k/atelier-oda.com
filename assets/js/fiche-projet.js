const reponse = await fetch("/assets/fiche-projets.json");
const fiche = await reponse.json();

const projet = fiche[0];

const nomProjet = document.createElement("h1");
nomProjet.innerText = projet.nom;
const villeProjet = document.createElement("p");
villeProjet.innerText = projet.localisation;
const imageProjet = document.createElement("img");
imageProjet.src = projet.img_1;
const programmeProjet = document.createElement("p");
programmeProjet.innerText = projet.programme;
const missionProjet = document.createElement("p");
missionProjet.innerText = projet.mission;
const prixProjet = document.createElement("p");
prixProjet.innerText = projet.prix;
const surfaceProjet = document.createElement("p");
surfaceProjet.innerText = projet.surface;
const maitriseProjet = document.createElement("p");
maitriseProjet.innerText = projet.maitrise_ouvrage;
const equipeProjet = document.createElement("p");
equipeProjet.innerText = projet.equipe;

const sectionFiche = document.querySelector(".fiche");

sectionFiche.appendChild(nomProjet);
sectionFiche.appendChild(villeProjet);
sectionFiche.appendChild(imageProjet);

sectionFiche.appendChild(programmeProjet);
sectionFiche.appendChild(missionProjet);
sectionFiche.appendChild(prixProjet);
sectionFiche.appendChild(surfaceProjet);
sectionFiche.appendChild(maitriseProjet);
sectionFiche.appendChild(equipeProjet);
