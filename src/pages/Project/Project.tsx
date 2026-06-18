import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { portfolio } from "../../data/projects";
import { devPortfolio } from "../../data/devProjects";
import styles from "./Project.module.css";
import arrowIcon from "../../assets/icons/arrow.png";
import { useEffect, useState } from "react";
import { useModeLang } from "../../hooks/useModeLang";
import { uiStrings } from "../../i18n/uiStrings";

function ProjectPage() {
    const { section } = useParams();
    const { project } = useParams();
    const { mode, lang } = useModeLang();
    const strings = uiStrings[lang];
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        mediaQuery.addEventListener("change", (event) =>
            setIsMobile(!event.matches),
        );

        return () =>
            mediaQuery.removeEventListener("change", (event) =>
                setIsMobile(!event.matches),
            );
    }, []);

    const location = useLocation();
    const initialPage = location.state?.from;

    let sectionTitle: string | undefined;
    let projectName: string | undefined;
    let img: string | undefined;
    let alt = "";
    let link = "";
    let metaItems: { label: string; value: string }[] = [];
    let descParagraphs: string[] = [];

    if (mode === "gd") {
        const currentSection = portfolio.find((item) => item.toParam === section);
        const currentProject = currentSection?.projects.find((item) => item.toParam === project);
        if (currentSection && currentProject) {
            sectionTitle = currentSection.section[lang];
            projectName = currentProject.name;
            img = !isMobile && currentProject.desktopImg ? currentProject.desktopImg : currentProject.img;
            alt = currentProject.alt;
            link = currentProject.link;
            metaItems = [
                { label: strings.projectType, value: currentProject.projectType[lang] },
                { label: strings.role, value: currentProject.role[lang] },
                { label: strings.place, value: currentProject.place[lang] },
                { label: strings.startingDate, value: currentProject.starting },
            ];
            descParagraphs = currentProject.desc[lang];
        }
    } else {
        const currentSection = devPortfolio.find((item) => item.toParam === section);
        const currentProject = currentSection?.projects.find((item) => item.toParam === project);
        if (currentSection && currentProject) {
            sectionTitle = currentSection.section[lang];
            projectName = currentProject.name;
            img = currentProject.img;
            alt = currentProject.alt;
            link = currentProject.link;
            metaItems = [
                { label: strings.technologies, value: currentProject.technos },
                { label: strings.duration, value: currentProject.duration[lang] },
            ];
            descParagraphs = currentProject.desc[lang];
        }
    }

    if (!projectName || !img) {
        return <p>{strings.projectNotFound}</p>;
    }

    return (
        <>
            <Link to={initialPage} className={styles.arrow}>
                <img
                    className={styles.arrowimg}
                    alt={strings.backArrowAlt}
                    src={arrowIcon}
                />
                {sectionTitle}
            </Link>
            <div className={styles.main}>
                <h2 className={styles.h2}>{projectName}</h2>

                <div className={styles.mediaBlock}>
                    <div className={styles.imageBlock}>
                        <img
                            className={styles.projectImage}
                            src={img}
                            alt={alt}
                        />
                    </div>
                </div>
                <div className={styles.texteBlock}>
                    <div className={styles.metaGrid}>
                        {metaItems.map((item) => (
                            <div className={styles.metaItem} key={item.label}>
                                <span className={styles.metaLabel}>{item.label}</span>
                                <span className={styles.metaValue}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.h3container}>
                        <h3>{strings.whatIDid}</h3>
                        {descParagraphs.map((item, index) =>
                            item.startsWith("http") ? (
                                <a
                                    className={styles.anchor}
                                    href={item}
                                    target="_blank"
                                    key={index}
                                >
                                    {item}
                                </a>
                            ) : (
                                <p className={styles.descParagraph} key={index}>
                                    {item}
                                </p>
                            ),
                        )}
                    </div>
                    {link && (
                        <iframe
                            className={styles.projectVideo}
                            width="560"
                            height="315"
                            src={link}
                        ></iframe>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectPage;
