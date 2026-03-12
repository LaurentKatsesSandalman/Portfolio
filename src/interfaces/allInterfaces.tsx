export interface Project {
    name: string;
    toParam: string;
    img: string;
	desktopImg?:string;
    alt: string;
    link: string;
    projectType: string;
	role: string;
	place: string;
    starting: string;
    desc: string[];
}

export interface Section {
    section: string;
    toParam: string;
    desc: string;
    projects: Project[];
}

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
    pdfName: string;
    pdfHeight: number;
}
