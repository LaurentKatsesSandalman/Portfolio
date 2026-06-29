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

export const devLogos = {
    pro: logoPro,
    groupe: logoGroupe,
    solo: logoSolo,
};

// ─── French desc arrays ────────────────────────────────────────────────────

const jeannedarcDesc = [
    "Refonte complète du site WordPress en Next.js en totale autonomie (architecture, développement, déploiement)",
    "Conception et implémentation d'un système d'édition en contexte : modification du contenu directement sur les pages concernées sans back-office complexe, pour une expérience d'administration intuitive",
    "Architecture fullstack complète sous contrainte budget zéro : base de données (PostgreSQL), authentification, hébergement, gestion de médias",
    "Respect des normes (RGPD, accessibilité, SEO) et amélioration des performances web",
];

const memoryDesc = [
    "Mon premier projet en groupe, en duo (sur approximativement 7 journées de travail)",
    "Je me suis occupé du JavaScript (initialisation, gestion de la partie, sauvegarde et affichage des records...) ainsi que des animations de cartes (apparition, retournement, disparition).",
    "N.B. : confetti.js est un module npm tiers.",
];

const dipiriDesc = [
    "Le deuxième projet en groupe, à trois sur une douzaine de jours.",
    "Il s'agit de DiPiRi, un site de voyage (sans réservation) axé sur la rêvasserie, les souvenirs... et la météo !",
    "Chacun a travaillé sur tous les aspects du projet, mais je me suis plus spécifiquement concentré sur :",
    "- La création, la mise en place et la mise à jour des filtres",
    "- La mise en relation du jeu de données de pays avec celui de météo",
    '- Le fetch de "current temperature in capital city" sur l\'API open-meteo.com.',
    "Il s'agit d'un projet \"quasiment\" AI-free, puisque malheureusement, alors que le projet tournait sur main, nous avons eu besoin d'aide pour finaliser la publication sur Github pages.",
];

const quickyDesc = [
    "Quicky était notre troisième projet, réalisé à trois.",
    "Il s'agit d'un site de création de formulaire avec Client, Serveur, et Base de Données.",
    "À ce stade de la formation, nous n'avions pas encore abordé le déploiement d'un site avec back-end ; le site ne tourne qu'en local.",
    "Pour le reste, le site est fonctionnel et permet de créer des questionnaires avec un nombre variable de champs, chaque champ pouvant avoir son propre type parmi les plus courants : texte, QCM, nombre, email, date, ...",
    "Le formulaire peut ensuite être partagé, les réponses sont enregistrées et agrégées dans un onglet dédié aux résultats.",
    "Sur ce projet j'ai un peu touché à tout, mais ce dont je suis le plus fier, c'est le Service FullForm.",
    "Lorsque nous avons discuté en équipe, nous avons décidé qu'il ne serait pas professionnel de multiplier les appels à la base : sauvegarder le formulaire ne devait générer qu'un appel.",
    'Nous avons donc créé côté Client un gros objet Formulaire (Form{}) qui contenait non seulement les informations du Formulaire (Table "Form"), mais aussi les informations de tous ses Champs (Table "Field") et pour chaque Champ de type QCM, toutes ses Propositions (Table "FieldOption"); puis cet objet était envoyé via un seul PATCH.',
    "Nous avons dû ajouter côté serveur un service entre le contrôleur et les différents modèles pour décomposer la donnée selon qu'il s'agissait de traiter le Form, les Fields, les FieldOptions, et de réaliser des créations, des mises à jour, ou des suppressions.",
    "C'est moi qui ai créé ce service, ainsi qu'une partie des modèles utilisés par celui-ci.",
];

const flashDesc = [
    "C'est notre quatrième projet en groupe et le plus ambitieux. Toute la promo était impliquée.",
    "Il s'agit d'un site de réalisation de \"Flash-Cards\" ou cartes de révision, avec possibilité de chercher parmi les \"Decks\" de la communauté.",
    "Le projet s'appuie sur un back-end NestJS en micro-services avec un front-end React.",
    "Sur ce projet, je me suis occupé principalement du micro-service Deck côté back-end, et de la page DeckDetails avec création/modification de cartes et de quiz côté front-end.",
];

const solorush1Desc = [
    "Voici mon premier projet, un \"solo rush\" qui consistait à créer seul (maquette figma + html + css) une page internet unique, le tout en moins d'une journée, sans IA.",
    "Voici le résultat, avec un contenu prétexte, conforme à la maquette et responsive (2 versions : mobile et desktop).",
];

const solorush2Desc = [
    "Le thème du SoloRush2 était les années 80, avec la contrainte de créer un site full-stack avec base de données en deux jours (mercredi 9h — vendredi 9h pour les présentations).",
    "J'ai décidé de faire un retro game de type Livre-dont-vous-êtes-le-héros.",
    "Le jeu gère via la BDD un système d'événements mais aussi un inventaire qui conditionnent l'apparition ou non de certains \"boutons\" parmi les solutions.",
    "La BDD permet aussi de gérer les combattants et l'impact des évènements sur les points de vie ou de communisme.",
    "Dans un souci d'efficacité, j'ai opté pour un front-end React et un back-end Express, ce dernier étant typiquement adapté à ce type de situation : développer rapidement une petite appli structurée en Model-View-Controller.",
    "Plus tard, j'ai refactoré le jeu pour pouvoir le mettre en ligne plus facilement (mais il s'agit du même jeu).",
];

const portfolioDescDev = [
    "Ce portfolio a été créé pour accompagner ma recherche d'emploi.",
    "Il présente mon double profil : dix ans de Game Design Free-to-Play mobile d'un côté, mes projets de développement web de l'autre — le tout consultable en français et en anglais.",
    "Développé en React avec l'assistance de Claude Code, il est en constante évolution.",
];

// ─── English desc arrays ───────────────────────────────────────────────────

const jeannedarcDescEn = [
    "Complete migration from WordPress to Next.js, handled independently (architecture, development, deployment)",
    "Design and implementation of an in-context editing system: content modified directly on the relevant pages, without a complex back-office, for an intuitive administration experience",
    "Complete full-stack architecture under zero-budget constraints: database (PostgreSQL), authentication, hosting, media management",
    "Compliance with standards (GDPR, accessibility, SEO) and improvement of web performance",
];

const memoryDescEn = [
    "My first group project, built as a pair (over approximately 7 working days).",
    "I handled the JavaScript (initialization, game logic, saving and displaying records...) as well as the card animations (appearance, flip, disappearance).",
    "N.B.: confetti.js is a third-party npm module.",
];

const dipiriDescEn = [
    "The second group project, built as a team of three over about twelve days.",
    "DiPiRi is a travel website (no bookings) focused on daydreaming, memories... and the weather!",
    "Each team member worked on all aspects of the project, but I focused more specifically on:",
    "- Creating, setting up and updating the filters",
    "- Connecting the country dataset with the weather dataset",
    '- Fetching "current temperature in capital city" from the open-meteo.com API.',
    "This is a \"nearly\" AI-free project: unfortunately, while the project was running on main, we needed help to finalize the deployment to GitHub Pages.",
];

const quickyDescEn = [
    "Quicky was our third project, built as a team of three.",
    "It is a form-builder website with a client, server, and database.",
    "At this stage of the training, we had not yet covered deploying a site with a back-end; the site only runs locally.",
    "For the rest, the site is fully functional and allows creating questionnaires with a variable number of fields, each field having its own type from the most common ones: text, multiple choice, number, email, date, ...",
    "The form can then be shared, responses are saved and aggregated in a dedicated results tab.",
    "On this project I touched a little bit of everything, but what I'm most proud of is the FullForm Service.",
    "When we discussed as a team, we decided it would not be professional to multiply database calls: saving the form should generate only one call.",
    'We therefore created on the client side a large Form object (Form{}) containing not only the Form information (Table "Form"), but also the information for all its Fields (Table "Field") and, for each multiple-choice Field, all its Options (Table "FieldOption"); this object was then sent via a single PATCH.',
    "We had to add on the server side a service between the controller and the various models to break down the data depending on whether it was handling the Form, the Fields, the FieldOptions, and whether to perform creations, updates, or deletions.",
    "I created this service, as well as some of the models it uses.",
];

const flashDescEn = [
    "Our fourth and most ambitious group project. The entire cohort was involved.",
    "It is a Flash-Card creation website, with the ability to search among the community's Decks.",
    "The project is built on a NestJS back-end with micro-services and a React front-end.",
    "On this project, I was mainly responsible for the Deck micro-service on the back-end, and the DeckDetails page with card and quiz creation/editing on the front-end.",
];

const solorush1DescEn = [
    "My first project: a \"solo rush\" consisting of creating alone (Figma mockup + HTML + CSS) a single web page, in less than a day, without AI.",
    "Here is the result, with placeholder content, matching the mockup and responsive (2 versions: mobile and desktop).",
];

const solorush2DescEn = [
    "The SoloRush2 theme was the 1980s, with the constraint of creating a full-stack website with a database in two days (Wednesday 9am — Friday 9am for presentations).",
    "I decided to make a retro game in the style of a Choose Your Own Adventure book.",
    "The game manages via the database a system of events as well as an inventory, both of which condition whether certain \"choices\" appear among the solutions.",
    "The database also manages the combatants and the impact of events on life points or communism points.",
    "For efficiency, I opted for a React front-end and an Express back-end, the latter being well-suited to this type of situation: rapidly building a small Model-View-Controller structured application.",
    "Later, I refactored the game to make it easier to deploy online (but it is the same game).",
];

const portfolioDescDevEn = [
    "This portfolio was created to support my job search.",
    "It presents my dual profile: ten years of Free-to-Play mobile Game Design on one side, my web development projects on the other — all available in French and English.",
    "Built with React and Claude Code, it is constantly evolving.",
];

// ─── Export ────────────────────────────────────────────────────────────────

export const devPortfolio: DevSection[] = [
    {
        section: { en: "Professional", fr: "Professionnel" },
        toParam: "pro",
        desc: { en: "Here are the projects I completed in a professional context.", fr: "Voici les projets que j'ai réalisés dans le cadre professionnel." },
        projects: [
            {
                name: "Ecole Jeanne d'Arc",
                toParam: "jeannedarc",
                img: jeannedarc,
                alt: "Fronton de l'école Jeanne d'Arc",
                link: "https://github.com/LaurentKatsesSandalman/jeanne_darc",
                technos: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js 16 (App Router, Server Components)", "PostgreSQL"],
                duration: { en: "3 months (December 2025 – February 2026)", fr: "3 mois (décembre 2025 -février 2026)" },
                desc: { en: jeannedarcDescEn, fr: jeannedarcDesc },
            },
        ],
    },
    {
        section: { en: "Group Projects", fr: "En groupe" },
        toParam: "groupe",
        desc: { en: "Here are all the projects I completed as part of a team at Wild Code School, during my training as an Application Developer.", fr: "Voici tous les projets que j'ai réalisés en groupe à la Wild Code School, lors de ma formation de Concepteur Développeur d'Applications." },
        projects: [
            {
                name: "Memory",
                toParam: "memory",
                img: projectMemory,
                alt: "image du site Memory",
                link: "https://laurentkatsessandalman.github.io/memoryCard/",
                technos: ["HTML Vanilla", "CSS", "JavaScript"],
                duration: { en: "Approximately 7 days, late March 2025", fr: "Approximativement 7 jours, fin mars 2025 " },
                desc: { en: memoryDescEn, fr: memoryDesc },
            },
            {
                name: "DiPiRi",
                toParam: "dipiri",
                img: projectDipiri,
                alt: "image du site DiPiRi",
                link: "https://laurentkatsessandalman.github.io/Project-2-pages/",
                technos: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
                duration: { en: "Approximately 12 days, late April – early May 2025", fr: "Approximativement 12 jours, fin avril-début mai 2025 " },
                desc: { en: dipiriDescEn, fr: dipiriDesc },
            },
            {
                name: "Quicky",
                toParam: "quicky",
                img: projectQuicky,
                alt: "image du site Quicky",
                link: "https://github.com/LaurentKatsesSandalman/Project-3",
                technos: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Express", "MySQL"],
                duration: { en: "Just under 15 days spread over 6 weeks, mid-May to late June 2025", fr: "Un peu moins de 15 jours répartis sur 6 semaines, mi mai-fin juin 2025" },
                desc: { en: quickyDescEn, fr: quickyDesc },
            },
            {
                name: "MémoFlip",
                toParam: "flash",
                img: projectFlash,
                alt: "image du site MémoFlip",
                link: "https://remote-9.wilders.dev/",
                technos: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NestJS", "MySQL", "MikroORM"],
                duration: { en: "Around forty days, from early August to late November 2025", fr: "Une quarantaine de jours, de début août à fin novembre 2025" },
                desc: { en: flashDescEn, fr: flashDesc },
            },
        ],
    },
    {
        section: { en: "Solo Projects", fr: "En solo" },
        toParam: "solo",
        desc: { en: "Here are some projects I completed solo, both during training and in my own time.", fr: "Voici quelques projets que j'ai réalisés en solo, que ce soit en formation ou sur mon temps libre." },
        projects: [
            {
                name: "SoloRush1 : Sandalman",
                toParam: "solorush1",
                img: projectSolorush1,
                alt: "image du site Qui est Sandalman ?",
                link: "https://laurentkatsessandalman.github.io/soloRush1/",
                technos: ["HTML Vanilla", "CSS"],
                duration: { en: "Less than a day, early March 2025", fr: "Moins d'un jour, début mars 2025" },
                desc: { en: solorush1DescEn, fr: solorush1Desc },
            },
            {
                name: "SoloRush2 : RETRO MdB",
                toParam: "solorush2",
                img: projectMdb,
                alt: "image du site RETRO MdB",
                link: "https://laurentkatsessandalman.github.io/soloRush2_MdB_Hard/",
                technos: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Express", "MySQL"],
                duration: { en: "Two days, mid-June 2025", fr: "Deux jours, mi juin 2025" },
                desc: { en: solorush2DescEn, fr: solorush2Desc },
            },
            {
                name: "Portfolio",
                toParam: "portfolio",
                img: projectPortfolio,
                alt: "image de la home du site où vous vous trouvez",
                link: "",
                technos: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Claude Code"],
                duration: { en: "Constantly evolving", fr: "En constante évolution" },
                desc: { en: portfolioDescDevEn, fr: portfolioDescDev },
            },
        ],
    },
];
