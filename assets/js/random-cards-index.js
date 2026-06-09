fetch("../fiche-projets.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
