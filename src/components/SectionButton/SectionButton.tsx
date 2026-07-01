import { Link } from "react-router-dom";
import styles from "./SectionButton.module.css"
import { useModeLang } from "../../hooks/useModeLang";

interface SectionButtonProps {
    image: string;
    name: string;
    to: string;
    ariaLabel: string
}

function SectionButton({image, name, to, ariaLabel}:SectionButtonProps){
    const { mode, lang } = useModeLang();

    return(
        <Link to={to} className={styles.sectionLink} state={{ from: `/${mode}/${lang}` }} aria-label={ariaLabel}>
        <h3 className={styles.sectionName}>{name}</h3>
		<img className={styles.sectionImage} src={image} alt=""/>
        </Link>
    )
}

export default SectionButton