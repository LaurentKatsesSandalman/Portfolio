import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { portfolio } from "../../data/projects";
import { devPortfolio } from "../../data/devProjects";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import styles from "./Section.module.css"
import arrowIcon from "../../assets/icons/arrow.png";
import { useModeLang } from "../../hooks/useModeLang";
import { uiStrings } from "../../i18n/uiStrings";

function SectionPage(){
    const{section}=useParams()
    const { mode, lang } = useModeLang();
    const strings = uiStrings[lang];

    const currentSection = mode === "gd"
        ? portfolio.find((item)=>item.toParam === section)
        : devPortfolio.find((item)=>item.toParam === section)

    const location = useLocation();
    const initialPage = location.state?.from || `/${mode}/${lang}`;

    if(!currentSection){
        return (
            <p>{strings.sectionNotFound}</p>
        )
    }

    return(
        <>
        <Link  to={initialPage} className={styles.arrow}><img  className={styles.arrowimg} alt={strings.backArrowAlt} src={arrowIcon} />{strings.home}</Link>
        <div className={styles.main}>
        <h2 className={styles.h2}>{currentSection.section[lang]}</h2>
        <p className={styles.desc}>{currentSection.desc[lang]}</p>
        <div className={styles.projectsList}>
        {currentSection.projects.map((project)=>(
            <ProjectButton
            key={project.toParam}
            to={project.toParam}
            img={project.img}
            name={"shorterName" in project ? (project.shorterName ?? project.name) : project.name}
            alt={project.alt}
            />
        ))}
        </div>
        </div>
        </>
    )

}

export default SectionPage
