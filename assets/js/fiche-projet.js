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

  // Données texte
  const detail = document.createElement("div");
  detail.classList.add("detail");
  detail.textContent = "Detail du projet";
  sectionFiche.appendChild(detail);

  const champs = [
    { label: "Programme", key: "programme" },
    { label: "Mission", key: "mission" },
    { label: "Prix", key: "prix" },
    { label: "Surface", key: "surface" },
    { label: "Maîtrise d'ouvrage", key: "maitrise_ouvrage" },
    { label: "Équipe", key: "equipe" },
  ];

  champs.forEach(({ label, key }) => {
    if (projet[key]) {
      const p = document.createElement("p");
      p.innerText = `${label} : ${projet[key]}`;
      sectionFiche.appendChild(p);
    }
  });
}
