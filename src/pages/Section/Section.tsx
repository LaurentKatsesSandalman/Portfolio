import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { portfolio } from "../../data/projects";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import styles from "./Section.module.css"
import arrowIcon from "../../assets/icons/arrow.png";

function SectionPage(){
    const{section}=useParams()

    const currentSection = portfolio.find((item)=>item.toParam === section)

    const location = useLocation();
    const initialPage = location.state?.from || "/";

    if(!currentSection){
        return (
            <p>Section not found</p>
        )
    }

    return(
        <>
        <Link  to={initialPage} className={styles.arrow}><img  className={styles.arrowimg} alt="Arrow back pictogram" src={arrowIcon} />Home</Link>
        <div className={styles.main}>
        <h2 className={styles.h2}>{currentSection.section}</h2>
        <p className={styles.desc}>{currentSection.desc}</p>
        <div className={styles.projectsList}>
        {currentSection.projects.map((project)=>(
            <ProjectButton
            key={project.toParam}
            to={project.toParam}
            img={project.img}
            name={project.shorterName ?? project.name}
            alt={project.alt}
            />
        ))}
        </div>
        </div>
        </>
    )

}

export default SectionPage
