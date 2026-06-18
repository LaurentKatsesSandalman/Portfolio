import type { Localized } from "../interfaces/i18n";

// Shared UI chrome text — labels/strings that mean the same thing regardless of mode (Dev/GD),
// only translated. Mode-specific copy (NavBar tagline, Footer blurb, Home hero/bio, the "Portfolio"
// vs "Projets" home heading, etc.) lives in per-mode profile data instead (step 3), not here.

export const uiStrings: Localized<{
    home: string;
    whatIDid: string;
    technologies: string;
    duration: string;
    projectType: string;
    role: string;
    place: string;
    startingDate: string;
    sectionNotFound: string;
    projectNotFound: string;
    backArrowAlt: string;
    availableRemote: string;
}> = {
    en: {
        home: "Home",
        whatIDid: "What I did",
        technologies: "Technologies",
        duration: "Duration",
        projectType: "Project Type",
        role: "Role",
        place: "Place",
        startingDate: "Starting Date",
        sectionNotFound: "Section not found",
        projectNotFound: "Project not found",
        backArrowAlt: "Back arrow icon",
        availableRemote: "Available for remote work",
    },
    fr: {
        home: "Accueil",
        whatIDid: "Ce que j'ai fait",
        technologies: "Technos",
        duration: "Durée",
        projectType: "Type de projet",
        role: "Rôle",
        place: "Lieu",
        startingDate: "Date de début",
        sectionNotFound: "Section non trouvée",
        projectNotFound: "Projet non trouvé",
        backArrowAlt: "Picto flèche retour",
        availableRemote: "Disponible en télétravail",
    },
};
