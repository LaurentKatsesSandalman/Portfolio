import projectMemory from "../assets/img/dev/projects/project_memory_complete.png";
import projectDipiri from "../assets/img/dev/projects/project_dipiri_complete.png";
import projectQuicky from "../assets/img/dev/projects/project_quicky.png";
import projectFlash from "../assets/img/dev/projects/project_flash.jpg";
import projectSolorush1 from "../assets/img/dev/projects/project_solorush1.png";
import projectMdb from "../assets/img/dev/projects/project_mdb_complete.png";
import projectPortfolio from "../assets/img/dev/projects/project_portfolio.jpg";
import jeannedarc from "../assets/img/dev/projects/jeannedarc.png";
import logoPro from "../assets/img/dev/logos/logo_pro.jpg";
import logoGroupe from "../assets/img/dev/logos/logo_groupe_wcs.png";
import logoSolo from "../assets/img/dev/logos/logo_solo_sandales.png";
import type { DevSection } from "../interfaces/allInterfaces";

// NOTE (Dev/GD merge, step 2): `en` fields below currently mirror `fr` (the original language) as
// placeholders. The actual English translation pass is step 5 of the merge plan
// (see .tmp-session-handoff.md) — not done yet.

export const devLogos = {
    pro: logoPro,
    groupe: logoGroupe,
    solo: logoSolo,
};

const jeannedarcDesc = [
    "Refonte complète du site WordPress en Next.js en totale autonomie (architecture, développement, déploiement)",
    "Conception et implémentation d'un système d'édition en contexte : modification du contenu directement sur les pages concernées sans back-office complexe, pour une expérience d'administration intuitive",
    "Architecture fullstack complète sous contrainte budget zéro : base de données (PostgreSQL), authentification, hébergement, gestion de médias",
    "Respect des normes (RGPD, accessibilité, SEO) et amélioration des performances web",
];

const memoryDesc = [
    "Mon premier projet en groupe, en duo (sur approximativement 7 journées de travail)",
    "Je me suis occupé du JavaScript (initialisation, gestion de la partie, sauvegarde et affichage des records...) ainsi que des animations de cartes (apparition, retournement, disparition).",
    "Il s'agit toujours d'un projet AI-free !",
    "Note: confetti.js est un module npm, nous ne l'avons pas codé",
];

const dipiriDesc = [
    "Le deuxième projet en groupe, à trois sur une douzaine de jours.",
    "Il s'agit de DiPiRi, un site de voyage (sans réservation) accès sur la rêvasserie, les souvenirs... et la météo !",
    "Chacun a travaillé sur tous les aspects du projet, mais je me suis plus spécifiquement concentré sur :",
    "o La création, la mise en place et la mise à jour des filtres",
    "o La mise en relation du jeu de données de pays avec celui de météo",
    'o Le fetch de "current temperature in capital city" sur l\'API open-meteo.com.',
    "Il s'agit d'un projet \"quasiment\" AI-free, puisque malheureusement, alors que le projet tournait sur main, nous avons eu besoin d'aide pour finaliser la publication sur Github pages.",
];

const quickyDesc = [
    "Quicky était notre troisième projet, réalisé à trois (le quatrième a été absent la majeure partie du temps).",
    "Il s'agit d'un site de création de formulaire avec Client, Serveur, et Base de Données.",
    "Malheureusement, à ce stade de la formation, nous n'avions pas encore appris à mettre en ligne un site qui comporte un Back, et le site ne tourne qu'en local.",
    "A part ça, le site est fonctionnel et permet de créer des questionnaires avec un nombre variable de champs, chaque champ pouvant avoir son propre type parmi les plus courants: texte, QCM, nombre, email, date, ...",
    "Le formulaire peut ensuite être partagé, les réponses sont enregistrées et aggrégées dans une Tab spécifique de résultats.",
    "Sur ce projet j'ai un peu touché à tout, mais ce dont je suis le plus fier, c'est le Service FullForm.",
    "Lorsque nous avons discuté en équipe, nous avons décidé qu'il ne serait pas professionnel de multiplier les appels à la base : sauvegarder le formulaire ne devait générer qu'un appel.",
    'Nous avons donc créé côté Client un gros objet Formulaire (Form{}) qui contenait non seulement les informations du Formulaire (Table "Form"), mais aussi les informations de tous ses Champs (Table "Field") et pour chaque Champ de type QCM, toutes ses Propositions (Table "FieldOption"); puis cet objet était envoyé via un seul PATCH.',
    "Nous avons dû ajouter côté serveur un service entre le contrôleur et les différents modèles pour décomposer la donnée selon qu'il s'agissait de traiter le Form, les Fields, les FieldOptions, et de réaliser des créations, des mises à jour, ou des suppression",
    "C'est moi qui ai créé ce service, ainsi qu'une partie des modèles utilisés par celui-ci.",
];

const flashDesc = [
    "C'est notre quatrième projet en groupe et le plus gros. Toute la promo était impliquée.",
    "Il s'agit d'un site de réalisation de \"Flash-Cards\" ou cartes de révision, avec possibilité de chercher parmi les \"Decks\" de la communauté.",
    "Le projet s'appuie sur un Back NestJS en micro-services avec un Front en React.",
    "Sur ce projet, je me suis occupé principalement du micro-service Deck côté Back, et de la page DeckDetails avec création/modification de cartes et de quiz côté Front.",
];

const solorush1Desc = [
    "Voici mon premier projet, un \"solo rush\" qui consistait à créer seul (maquette figma + html + css) une page internet unique, le tout en moins d'une journée, sans IA.",
    "Voici le résultat, d'une qualité éditoriale discutable, mais conforme à la maquette et responsive (2 versions: mobile et desktop)",
];

const solorush2Desc = [
    "Le thème du SoloRush2 était les années 80, et la contrainte de créer un site front+back+BDD en deux jours max (Mercredi 9h => Vendredi 9h pour les présentations).",
    "J'ai décidé de faire un retro game de type Livre-dont-vous-êtes-le-héros.",
    "Le jeu gère via la BDD un système d'évènement mais aussi un inventaire qui conditionnent l'apparition ou non de certains \"boutons\" parmi les solutions.",
    "La BDD permet aussi de gérer les combattants et l'impact des évènements sur les points de vie ou de communisme.",
    "Pour aller vite, j'ai fait un Front en React et en back j'ai utilisé Express, qui est typiquement fait pour ce genre de situation : développer rapidement un back solide pour une petite appli structurée en Model-View-Controller.",
    "Plus tard, j'ai refactoré le jeu pour pouvoir le mettre en ligne plus facilement (mais il s'agit du même jeu)",
];

const portfolioDescDev = [
    "Contrairement à ce que je pensais (Qu'on est bête quand on est jeune !), il n'était pas possible de trouver un stage semble-t-il sans un portfolio.",
    "J'ai donc essayé, à côté de la formation, du Projet P4 (MémoFlash), de la recherche de stage, du dossier professionnel requis par l'Etat, ... de réaliser ce site, avec la contrainte que ce soit rapide mais pas trop amateur.",
    "J'espère avoir réussi, et qu'il s'enrichira bientôt des nouveaux projets que vous voudrez bien me confier.",
];

export const devPortfolio: DevSection[] = [
    {
        section: { en: "Professionnel", fr: "Professionnel" },
        toParam: "pro",
        desc: { en: "Voici les projets que j'ai réalisé dans le cadre professionnel", fr: "Voici les projets que j'ai réalisé dans le cadre professionnel" },
        projects: [
            {
                name: "Ecole Jeanne d'Arc",
                toParam: "jeannedarc",
                img: jeannedarc,
                alt: "Fronton de l'école Jeanne d'Arc",
                link: "https://github.com/LaurentKatsesSandalman/jeanne_darc",
                technos:
                    "HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS 16 (App Router, Server Components), PostgreSQL",
                duration: { en: "3 mois (décembre 2025 -février 2026)", fr: "3 mois (décembre 2025 -février 2026)" },
                desc: { en: jeannedarcDesc, fr: jeannedarcDesc },
            },
        ],
    },
    {
        section: { en: "En groupe", fr: "En groupe" },
        toParam: "groupe",
        desc: { en: "Voici tous les projets que j'ai réalisé en groupe à la Wild Code School, lors de ma formation de Concepteur Développeur d'Applications.", fr: "Voici tous les projets que j'ai réalisé en groupe à la Wild Code School, lors de ma formation de Concepteur Développeur d'Applications." },
        projects: [
            {
                name: "Memory",
                toParam: "memory",
                img: projectMemory,
                alt: "image du site Memory",
                link: "https://laurentkatsessandalman.github.io/memoryCard/",
                technos: "HTML Vanilla, CSS, JavaScript",
                duration: { en: "Approximativement 7 jours, fin mars 2025 ", fr: "Approximativement 7 jours, fin mars 2025 " },
                desc: { en: memoryDesc, fr: memoryDesc },
            },
            {
                name: "DiPiRi",
                toParam: "dipiri",
                img: projectDipiri,
                alt: "image du site DiPiRi",
                link: "https://laurentkatsessandalman.github.io/Project-2-pages/",
                technos: "HTML, CSS, JavaScript, TypeScript, ReactJS",
                duration: { en: "Approximativement 12 jours, fin avril-début mai 2025 ", fr: "Approximativement 12 jours, fin avril-début mai 2025 " },
                desc: { en: dipiriDesc, fr: dipiriDesc },
            },
            {
                name: "Quicky",
                toParam: "quicky",
                img: projectQuicky,
                alt: "image du site Quicky",
                link: "https://github.com/LaurentKatsesSandalman/Project-3",
                technos:
                    "HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL",
                duration: { en: "Un peu moins de 15 jours répartis sur 6 semaines, mi mai-fin juin 2025", fr: "Un peu moins de 15 jours répartis sur 6 semaines, mi mai-fin juin 2025" },
                desc: { en: quickyDesc, fr: quickyDesc },
            },
            {
                name: "MémoFlip",
                toParam: "flash",
                img: projectFlash,
                alt: "image du site MémoFlip",
                link: "https://remote-9.wilders.dev/",
                technos:
                    "HTML, CSS, JavaScript, TypeScript, ReactJS, NestJS, MySQL, MicroORM",
                duration: { en: "Une quarantaine de jours, de début août à fin novembre 2025", fr: "Une quarantaine de jours, de début août à fin novembre 2025" },
                desc: { en: flashDesc, fr: flashDesc },
            },
        ],
    },
    {
        section: { en: "En solo", fr: "En solo" },
        toParam: "solo",
        desc: { en: "Voici quelques projets que j'ai réalisé en solo, que ce soit en formation ou sur mon temps libre.", fr: "Voici quelques projets que j'ai réalisé en solo, que ce soit en formation ou sur mon temps libre." },
        projects: [
            {
                name: "SoloRush1 : Sandalman",
                toParam: "solorush1",
                img: projectSolorush1,
                alt: "image du site Qui est Sandalman ?",
                link: "https://laurentkatsessandalman.github.io/soloRush1/",
                technos: "HTML Vanilla, CSS",
                duration: { en: "Moins d'un jour, début mars 2025", fr: "Moins d'un jour, début mars 2025" },
                desc: { en: solorush1Desc, fr: solorush1Desc },
            },
            {
                name: "SoloRush2 : RETRO MdB",
                toParam: "solorush2",
                img: projectMdb,
                alt: "image du site RETRO MdB",
                link: "https://laurentkatsessandalman.github.io/soloRush2_MdB_Hard/",
                technos:
                    "HTML, CSS, JavaScript, TypeScript, ReactJS, ExpressJS, MySQL",
                duration: { en: "Deux jours, mi juin 2025", fr: "Deux jours, mi juin 2025" },
                desc: { en: solorush2Desc, fr: solorush2Desc },
            },
            {
                name: "Portfolio",
                toParam: "portfolio",
                img: projectPortfolio,
                alt: "image de la home du site où vous vous trouvez",
                link: "",
                technos: "HTML, CSS, JavaScript, TypeScript, ReactJS",
                duration: { en: "En constante évolution", fr: "En constante évolution" },
                desc: { en: portfolioDescDev, fr: portfolioDescDev },
            },
        ],
    },
];
