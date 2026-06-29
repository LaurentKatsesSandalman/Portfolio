import type { Localized, Mode } from "../interfaces/i18n";

// Per-mode hero/bio/portfolio-intro copy for the Home page and NavBar tagline.

export interface ModeProfile {
    navTagline: Localized<string>;
    heroTitle: Localized<string>;
    heroSubtitle?: Localized<string>;
    badges?: Localized<string[]>;
    bio: Localized<string[]>;
    portfolioHeading: Localized<string>;
    portfolioIntro: Localized<string[]>;
}

export const profiles: Record<Mode, ModeProfile> = {
    gd: {
        navTagline: { en: "Senior GD Mobile-F2P", fr: "Senior GD Mobile-F2P" },
        heroTitle: { en: "Senior Game Designer", fr: "Senior Game Designer" },
        heroSubtitle: { en: "Free-to-play & Mobile Games", fr: "Jeux Mobile & Free-to-play" },
        badges: {
            en: ["10+ Years Experience", "Mobile & Facebook F2P", "Concept to Live-Ops"],
            fr: ["10+ ans d'expérience", "Mobile & Facebook F2P", "Du concept aux live ops"],
        },
        bio: {
            en: [
                "Hi!",
                "I'm a Senior Game Designer, with 10+ years of experience in the Mobile Free-To-Play area, both Casual and MidCore.",
                "I'm able to handle the Game Design of a project from initial concept to live-ops. I'm a generalist/versatile Game Designer, but with a stronger analytical/problem-solving side. Bringing consistency is my strong point, especially when it comes to connecting core gameplay with the meta.",
            ],
            fr: [
                "Bonjour !",
                "Je suis Senior Game Designer, avec 10+ ans d'expérience dans le domaine du Mobile Free-To-Play, aussi bien Casual que MidCore.",
                "Je suis en mesure de prendre en charge le Game Design d'un projet de son concept initial jusqu'aux live ops. Je suis un Game Designer généraliste polyvalent, orienté analyse et résolution de problèmes. Apporter de la cohérence est mon point fort, notamment pour connecter le core gameplay à la méta.",
            ],
        },
        portfolioHeading: { en: "GD Portfolio", fr: "Portfolio GD" },
        portfolioIntro: {
            en: [
                "In this section, you'll find most of the free-to-play games I worked on as a Game Designer.",
                "Games I helped create as the Lead GD of the company are not mentioned, as I wasn't one of the Main Designers, but more there to support and guide, and as last resort find solutions.",
                "I have also excluded my early career gamified animation projects.",
            ],
            fr: [
                "Dans cette section, vous trouverez la plupart des jeux free-to-play sur lesquels j'ai travaillé en tant que Game Designer.",
                "Les jeux auxquels j'ai contribué en tant que Lead GD de l'entreprise ne sont pas mentionnés, car je n'en étais pas le GD principal, ayant plutôt un rôle d'accompagnement ou de déblocage dans les situations critiques.",
                "J'ai également exclu mes projets d'animation gamifiée de début de carrière.",
            ],
        },
    },
    dev: {
        navTagline: { en: "Full-stack Web Developer", fr: "Développeur Web Full-stack" },
        heroTitle: { en: "Full-stack Web Developer", fr: "Développeur Web Full-stack" },
        bio: {
            fr: [
                "Vous êtes sur le portfolio de Laurent Durup, aka Sandalman. Après plus de 20 ans dans l'univers du jeu vidéo et de l'animation interactive, dont 10+ comme Game Designer Free-To-Play Mobile, me voici à présent “jeune” Développeur Web.",
                "En recherche d'emploi, de projets, du Graal, du Sens de la Vie, et d'une nouvelle paire de sandales en cuir taille 42, je vous présente ici mes premiers projets.",
            ],
            en: [
                "You’re on the portfolio of Laurent Durup, aka Sandalman. After 20+ years in the world of video games and interactive animation, including 10+ as a Free-To-Play Mobile Game Designer, I am now a “junior” Web Developer.",
                "Looking for work, projects, the Holy Grail, the Meaning of Life, and a new pair of size 42 leather sandals — here are my first projects.",
            ],
        },
        portfolioHeading: { en: "Projects", fr: "Projets" },
        portfolioIntro: { en: [], fr: [] },
    },
};
