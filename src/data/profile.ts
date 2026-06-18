import type { Localized, Mode } from "../interfaces/i18n";

// Per-mode hero/bio/portfolio-intro copy for the Home page and NavBar tagline.
// NOTE (Dev/GD merge, step 3): same placeholder convention as projects.ts/devProjects.ts — the
// not-yet-translated language mirrors the original for now (GD: fr = en; Dev: en = fr). Real
// translation is step 5. `heroSubtitle`/`badges` are optional since Dev's original content doesn't
// have an equivalent to GD's subtitle/badge row — ported as-is rather than inventing new copy.

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
        navTagline: { en: "Senior GD Mobile-FTP", fr: "Senior GD Mobile-FTP" },
        heroTitle: { en: "Senior Game Designer", fr: "Senior Game Designer" },
        heroSubtitle: { en: "Free-to-play & Mobile Games", fr: "Free-to-play & Mobile Games" },
        badges: {
            en: ["10+ Years Experience", "Mobile & Facebook F2P", "Concept to Live-Ops"],
            fr: ["10+ Years Experience", "Mobile & Facebook F2P", "Concept to Live-Ops"],
        },
        bio: {
            en: [
                "Hi!",
                "I’m a Senior Game Designer, with 10+ years experience in the Mobile Free-To-Play area, both Casual and MidCore.",
                "I’m able to handle the Game Design of a project from initial concept to live-ops. I’m a generalist/versatile Game designer, but with a stronger analytical/problem-solving side. Bringing consistency is my strong point, especially when it comes to connecting core gameplay with meta.",
            ],
            fr: [
                "Hi!",
                "I’m a Senior Game Designer, with 10+ years experience in the Mobile Free-To-Play area, both Casual and MidCore.",
                "I’m able to handle the Game Design of a project from initial concept to live-ops. I’m a generalist/versatile Game designer, but with a stronger analytical/problem-solving side. Bringing consistency is my strong point, especially when it comes to connecting core gameplay with meta.",
            ],
        },
        portfolioHeading: { en: "GD Portfolio", fr: "GD Portfolio" },
        portfolioIntro: {
            en: [
                "In this section, you’ll find most of the free-to-play games I worked on as a Game Designer.",
                "Games I helped create as a Company Lead are not mentioned, as I wasn’t one of the Main Designers, but more of an unblocker or facilitator.",
                "I have also discarded my early youth gamified animation projects.",
            ],
            fr: [
                "In this section, you’ll find most of the free-to-play games I worked on as a Game Designer.",
                "Games I helped create as a Company Lead are not mentioned, as I wasn’t one of the Main Designers, but more of an unblocker or facilitator.",
                "I have also discarded my early youth gamified animation projects.",
            ],
        },
    },
    dev: {
        navTagline: { en: "Développeur Web Full-stack", fr: "Développeur Web Full-stack" },
        heroTitle: { en: "Développeur Web Full-stack", fr: "Développeur Web Full-stack" },
        bio: {
            fr: [
                "Vous êtes sur le portfolio de Laurent Durup, aka Sandalman. Après plus de 20 ans dans l’univers du jeu vidéo et de l’animation interactive, dont 10+ comme Game Designer Free-To-Play Mobile, me voici à présent “jeune” Développeur Web.",
                "En recherche de d’emploi, de projets, du Graal, du Sens de la Vie, et d’une nouvelle paire de sandales en cuir taille 42, je vous présente ici mes premiers projets.",
            ],
            en: [
                "Vous êtes sur le portfolio de Laurent Durup, aka Sandalman. Après plus de 20 ans dans l’univers du jeu vidéo et de l’animation interactive, dont 10+ comme Game Designer Free-To-Play Mobile, me voici à présent “jeune” Développeur Web.",
                "En recherche de d’emploi, de projets, du Graal, du Sens de la Vie, et d’une nouvelle paire de sandales en cuir taille 42, je vous présente ici mes premiers projets.",
            ],
        },
        portfolioHeading: { en: "Projets", fr: "Projets" },
        portfolioIntro: { en: [], fr: [] },
    },
};
