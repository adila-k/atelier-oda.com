const reponse = await fetch("/assets/fiche-projets.json");
const fiche = await reponse.json();

const projet = fiche[0];
