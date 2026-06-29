import claudeIcon from "../assets/icons/claude.svg";

const BASE = "https://raw.githubusercontent.com/devicons/devicon/master/icons";

export const techIconMap: Record<string, { src: string; label: string }> = {
    "HTML":         { src: `${BASE}/html5/html5-original-wordmark.svg`,       label: "HTML5" },
    "HTML Vanilla": { src: `${BASE}/html5/html5-original-wordmark.svg`,       label: "HTML5" },
    "CSS":          { src: `${BASE}/css3/css3-original-wordmark.svg`,         label: "CSS3" },
    "JavaScript":   { src: `${BASE}/javascript/javascript-original.svg`,      label: "JavaScript" },
    "TypeScript":   { src: `${BASE}/typescript/typescript-original.svg`,      label: "TypeScript" },
    "React":        { src: `${BASE}/react/react-original-wordmark.svg`,       label: "React" },
    "Express":      { src: `${BASE}/express/express-original-wordmark.svg`,   label: "Express" },
    "MySQL":        { src: `${BASE}/mysql/mysql-original-wordmark.svg`,       label: "MySQL" },
    "NestJS":       { src: `${BASE}/nestjs/nestjs-original-wordmark.svg`,     label: "NestJS" },
    "PostgreSQL":   { src: `${BASE}/postgresql/postgresql-original-wordmark.svg`, label: "PostgreSQL" },
    "MikroORM":     { src: "https://mikro-orm.io/img/logo.svg",               label: "MikroORM" },
    "Next.js 16 (App Router, Server Components)":
                    { src: `${BASE}/nextjs/nextjs-original-wordmark.svg`,     label: "Next.js" },
    "Claude Code":  { src: claudeIcon, label: "Claude Code" },
};
