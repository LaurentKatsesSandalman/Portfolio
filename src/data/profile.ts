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
                "I'm able to handle the Game Design of a project from initial concept to live-ops. I'm a generalist/versatile Game Designer, but with a stronger analytical/problem-solving side. Bringing consistency is my strong point, especially when it comes to connecting core gameplay with the meta. I have added full-stack development to my profile, for an even more complete understanding of the product chain.",
            ],
            fr: [
                "Bonjour !",
                "Je suis Senior Game Designer, avec 10+ ans d'expérience dans le domaine du Mobile Free-To-Play, aussi bien Casual que MidCore.",
                "Je suis en mesure de prendre en charge le Game Design d'un projet de son concept initial jusqu'aux live ops. Je suis un Game Designer généraliste polyvalent, orienté analyse et résolution de problèmes. Apporter de la cohérence est mon point fort, notamment pour connecter le core gameplay à la méta. J'ai ajouté le développement full-stack à mon profil, pour une compréhension encore plus complète de la chaîne produit."
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
        heroSubtitle: { en: "From product design to deployment", fr: "De la conception produit au déploiement" },
        badges: {
            en: ["10+ Years Product Experience", "User-Centered Vision", "Front-end & Back-end"],
            fr: ["10+ ans d'expérience produit", "vision centrée utilisateur", "Front-end & Back-end"],
        },
        bio: {
            fr: [
                "Bonjour !",
                "Je suis Laurent Durup, aka Sandalman, développeur web full-stack avec 10+ ans de background comme Senior Game Designer Free-to-Play Mobile.",
                "Ce background n'est pas un détour, il est un atout : j'apporte une vision produit, une sensibilité UX et une capacité de collaboration transverse forgées sur des années de projets live, à un profil technique encore junior mais solide et en progression rapide.",
                "Junior sur la technique, senior sur tout le reste.",
            ],
            en: [
                "Hi!",
                "I'm Laurent Durup, aka Sandalman, a full-stack web developer with 10+ years of background as a Senior Game Designer in Free-to-Play Mobile.",
                "This background isn't a detour, it's an asset: I bring product vision, UX sensibility, and cross-functional collaboration skills built over years of live, shipped projects, to a technical profile that's still junior, but solid and improving fast.",
                "Junior on the tech, senior on everything else.",
            ],
        },
        portfolioHeading: { en: "Dev Portfolio", fr: "Portfolio Dev" },
        portfolioIntro: {
            en: [
                "Here you'll find the projects I built during my training as an Application Developer at Wild Code School, alongside my first professional project and personal projects.",
                "Each one comes with its context and timeframe, so you can follow my progress since I started.",
            ],
            fr: [
                "Vous trouverez ici les projets réalisés pendant ma formation de Concepteur Développeur d'Applications à la Wild Code School, ainsi que mon premier projet professionnel et mes projets personnels.",
                "Ils sont présentés avec leur contexte et leur période de réalisation, pour que vous puissiez suivre ma progression depuis mes débuts.",
            ],
        },
    },
};
