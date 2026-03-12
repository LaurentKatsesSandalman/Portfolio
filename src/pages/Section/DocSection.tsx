import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { docs } from "../../data/docProjects";
import styles from "./Section.module.css"
import arrowIcon from "../../assets/icons/arrow.png";
import DocProjectButton from "../../components/ProjectButton/DocProjectButton";

function DocSectionPage(){
    const{section}=useParams()

    const currentSection = docs.find((item)=>item.toParam === section)

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
            <DocProjectButton
            key={project.toParam}
            to={project.toParam}
            img={project.img}
            name={project.name}
			company={project.company}
			subtitle={project.subtitle}
            alt={project.alt}
            />
        ))}
        </div>
        </div>
        </>
    )

}

export default DocSectionPage
