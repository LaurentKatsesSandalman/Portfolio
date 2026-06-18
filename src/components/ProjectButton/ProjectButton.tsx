import { Link } from "react-router-dom";
import styles from "./ProjectButton.module.css"
import { useParams } from "react-router-dom";
import { useModeLang } from "../../hooks/useModeLang";

interface ProjectButtonProps {
    img: string;
    name: string;
    to: string;
    alt: string
}

function ProjectButton({img, name, to, alt}:ProjectButtonProps){
    const{section}=useParams()
    const { mode, lang } = useModeLang();

    return(
        <Link to={to} className={styles.projectLink} state={{ from: `/${mode}/${lang}/portfolio/${section}` }}>
        <h3 className={styles.projectName}>{name}</h3>
		<img className={styles.projectImage} src={img} alt={alt}/>
        </Link>
    )
}

export default ProjectButton