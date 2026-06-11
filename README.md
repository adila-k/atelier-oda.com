# atelier oda — Site portfolio

Site portfolio pour l'architecte Olivier Duffé · [atelier-oda.com](https://atelier-oda.com)

---

## Présentation

Site vitrine conçu pour présenter les projets et la démarche de l'atelier oda, cabinet d'architecture basé en France.

## Stack technique

- HTML5
- SASS (compilé en CSS)
- JavaScript vanilla
- GSAP (animations)

## Structure du projet

```
atelier-oda.com/
├── assets/
│   ├── css/          # CSS compilé
│   ├── scss/         # Sources SASS
│   ├── js/           # Scripts JavaScript
│   └── images/       # Médias et visuels
├── pages/            # Pages secondaires
├── index.html        # Page d'accueil
└── README.md
```

## Lancer le projet en local

Aucune dépendance à installer. Il suffit d'ouvrir `index.html` dans un navigateur, ou d'utiliser l'extension **Live Server** dans VS Code pour bénéficier du rechargement automatique.

## Compilation SASS

Si tu modifies les fichiers `.scss`, recompile le CSS avec :

```bash
sass assets/scss/style.scss assets/css/style.min.css --watch
```

## Déploiement

> ⚠️ L'hébergement est en cours de réflexion. Cette section sera mise à jour une fois la décision prise.

## Branches

| Branche | Rôle                                |
| ------- | ----------------------------------- |
| `main`  | Branche de production — code stable |
| `adila` | Branche de développement — Adila    |
| `nelly` | Branche de développement — Nelly    |
| `lucas` | Branche de développement — Lucas    |

Les contributions se font via pull request vers `main`.

## Contributeurs

- **Adila Kehlaoui** — Développement & intégration (gestion du dépôt)
- **Nelly Fabre** — Développement & intégration
- **Lucas Merlet** — Développement & intégration

========================================================
-----------------ENGLISH VERSION------------------------
========================================================

# atelier oda — Portfolio Website

Portfolio website for architect Olivier Duffé · [atelier-oda.com](https://atelier-oda.com)

---

## Overview

A showcase website designed to present the projects and approach of atelier oda, an architecture firm based in France.

## Tech Stack

- HTML5
- SASS (compiled to CSS)
- Vanilla JavaScript
- GSAP (animations)

## Project Structure

```
atelier-oda.com/
├── assets/
│   ├── css/          # Compiled CSS
│   ├── scss/         # SASS source files
│   ├── js/           # JavaScript files
│   └── images/       # Media and visuals
├── pages/            # Secondary pages
├── index.html        # Homepage
└── README.md
```

## Running Locally

No dependencies to install. Simply open `index.html` in a browser, or use the **Live Server** extension in VS Code for live reloading.

## Compiling SASS

If you modify any `.scss` files, recompile the CSS with:

```bash
sass assets/scss/style.scss assets/css/style.min.css --watch
```

## Deployment

> ⚠️ Hosting is currently being decided. This section will be updated once a decision has been made.

## Branches

| Branch  | Role                            |
| ------- | ------------------------------- |
| `main`  | Production branch — stable code |
| `adila` | Development branch — Adila      |
| `nelly` | Development branch — Nelly      |
| `lucas` | Development branch — Lucas      |

Contributions are made via pull request into `main`.

## Contributors

- **Adila Kehlaoui** — Development & integration (repository owner)
- **Nelly Fabre** — Development & integration
- **Lucas Merlet** — Development & integration
