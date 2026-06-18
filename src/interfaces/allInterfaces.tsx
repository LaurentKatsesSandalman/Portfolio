import type { Localized } from "./i18n";

export interface GDProject {
    name: string;
	shorterName?: string;
    toParam: string;
    img: string;
	desktopImg?:string;
    alt: string;
    link: string;
    projectType: Localized<string>;
	role: Localized<string>;
	place: Localized<string>;
    starting: string;
    desc: Localized<string[]>;
}

export interface GDSection {
    section: Localized<string>;
    toParam: string;
    desc: Localized<string>;
    projects: GDProject[];
}

export interface DevProject {
    name: string;
    toParam: string;
    img: string;
    alt: string;
    link: string;
    technos: string;
    duration: Localized<string>;
    desc: Localized<string[]>;
}

export interface DevSection {
    section: Localized<string>;
    toParam: string;
    desc: Localized<string>;
    projects: DevProject[];
}

// Docs (GD-only, no Dev equivalent) — not yet part of the bilingual merge, stays English-only for now.
export interface DocSection {
    section: string;
    toParam: string;
    desc: string;
    projects: DocProject[];
}

export interface DocProject {
    name: string;
	company:string;
	subtitle: string;
    toParam: string;
    img: string;
    alt: string;
    desc: string[];
	pdf: pdfBloc[];
}

export interface pdfBloc {
    pdfTitle: string;
	pdfDesc: string[];
    pdfLink: string;
    pdfHeight: number;
}
