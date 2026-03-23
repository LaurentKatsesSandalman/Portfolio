import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { portfolio } from "../../data/projects";
import styles from "./Project.module.css";
import arrowIcon from "../../assets/icons/arrow.png";
import type { Project, Section } from "../../interfaces/allInterfaces";
import { useEffect, useState } from "react";

function ProjectPage() {
    const { section } = useParams();
    const { project } = useParams();
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

    const currentSection: Section | undefined = portfolio.find(
        (item) => item.toParam === section,
    );
    const currentProject: Project | undefined = currentSection?.projects.find(
        (item) => item.toParam === project,
    );

    const location = useLocation();
    const initialPage = location.state?.from;

    if (!currentSection) {
        return <p>Section not found</p>;
    }
    if (!currentProject) {
        return <p>Project not found</p>;
    }

    return (
        <>
            <Link to={initialPage} className={styles.arrow}>
                <img
                    className={styles.arrowimg}
                    alt="Picto flèche retour"
                    src={arrowIcon}
                />
                {section}
            </Link>
            <div className={styles.main}>
                <h2 className={styles.h2}>{currentProject.name}</h2>

                <div className={styles.mediaBlock}>
                    <div className={styles.imageBlock}>
                        <img
                            className={styles.projectImage}
                            src={
                                !isMobile && currentProject.desktopImg
                                    ? currentProject.desktopImg
                                    : currentProject.img
                            }
                            alt={currentProject.alt}
                        />
                    </div>
                </div>
                <div className={styles.texteBlock}>
                    <div className={styles.h3container}>
                        <h3>Project Type</h3>
                        <p>{currentProject.projectType}</p>
                    </div>
                    <div className={styles.h3container}>
                        <h3>Role</h3>
                        <p>{currentProject.role}</p>
                    </div>
                    <div className={styles.h3container}>
                        <h3>Place</h3>
                        <p>{currentProject.place}</p>
                    </div>
                    <div className={styles.h3container}>
                        <h3>Starting Date</h3>
                        <p>{currentProject.starting}</p>
                    </div>
                    <div className={styles.h3container}>
                        <h3>What I did</h3>
                        {currentProject.desc.map((item, index) =>
                            item.startsWith("http") ? (
                                <>
                                    <a
                                        className={styles.anchor}
                                        href={item}
                                        target="_blank"
                                        key={index}
                                    >
                                        {item}
                                    </a>
                                    <p>
                                        <br />
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p key={index}>{item}</p>
                                    <p>
                                        <br />
                                    </p>
                                </>
                            ),
                        )}
                    </div>
                    {currentProject.link && (
                        <iframe
                            className={styles.projectVideo}
                            width="560"
                            height="315"
                            src={currentProject.link}
                        ></iframe>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectPage;
