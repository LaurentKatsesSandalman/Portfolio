import { Link } from "react-router-dom";
import styles from "./ProjectButton.module.css"
import { useParams } from "react-router-dom";
import { useModeLang } from "../../hooks/useModeLang";

interface ProjectButtonProps {
    img: string;
    name: string;
	company: string;
	subtitle:string;
    to: string;
    alt: string
}

function DocProjectButton({img, name, company, subtitle, to, alt}:ProjectButtonProps){
    const{section}=useParams()
    const { mode, lang } = useModeLang();

    return(
        <Link to={to} className={styles.projectLink} state={{ from: `/${mode}/${lang}/docs/${section}` }}>
        <h3 className={styles.projectName}>{name}</h3>
		<h3 className={styles.projectName}>{company}</h3>
		<img className={styles.projectImage} src={img} alt={alt}/>
		<p className={styles.projectSub}>{subtitle}</p>
        </Link>
    )
}

export default DocProjectButton