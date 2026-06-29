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
    technos: string[];
    duration: Localized<string>;
    desc: Localized<string[]>;
}

export interface DevSection {
    section: Localized<string>;
    toParam: string;
    desc: Localized<string>;
    projects: DevProject[];
}

export interface DocSection {
    section: Localized<string>;
    toParam: string;
    desc: Localized<string>;
    projects: DocProject[];
}

export interface DocProject {
    name: string;
    company: string;
    subtitle: Localized<string>;
    toParam: string;
    img: string;
    alt: string;
    desc: Localized<string[]>;
    pdf: pdfBloc[];
}

export interface pdfBloc {
    pdfTitle: Localized<string>;
    pdfDesc: Localized<string[]>;
    pdfLink: string;
    pdfName: string;
    pdfHeight: number;
}
