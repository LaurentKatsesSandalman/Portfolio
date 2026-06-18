import Sandals from "../../assets/icons/sandale_icon.png"
import styles from "./NavBar.module.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import linkedInIcon from "../../assets/icons/linkedin.png"
import githubIcon from "../../assets/icons/github.png"
import { useModeLang } from "../../hooks/useModeLang";
import { profiles } from "../../data/profile";
import type { Lang, Mode } from "../../interfaces/i18n";

function NavBar(){
    const { mode, lang } = useModeLang();
    const profile = profiles[mode];
    const location = useLocation();
    const navigate = useNavigate();

    function switchMode(newMode: Mode) {
        if (newMode === mode) return;
        // GD and Dev project slugs don't overlap, so a mode switch always drops to that mode's home.
        navigate(`/${newMode}/${lang}`);
    }

    function switchLang(newLang: Lang) {
        if (newLang === lang) return;
        const prefix = `/${mode}/${lang}`;
        const restOfPath = location.pathname.startsWith(prefix)
            ? location.pathname.slice(prefix.length)
            : "";
        const newPrefix = `/${mode}/${newLang}`;
        const from = location.state?.from as string | undefined;
        navigate(`${newPrefix}${restOfPath}`, {
            state: from ? { from: from.replace(prefix, newPrefix) } : location.state,
        });
    }

    return(
        <div className={styles.navbar}>
       <Link to={`/${mode}/${lang}`} aria-label="Back to home page"> <img className={styles.logo} src={Sandals} alt="Sandales icon"/></Link>
        <div className={styles.h1container}>
		<p className={styles.h1}>Laurent "Sandalman"</p>
		<p className={styles.h2}>{profile.navTagline[lang]}</p>
		<div className={styles.mainFlex}>
			<p className={styles.pRight}>laurent.durup@proton.me</p>
			<div className={styles.rowFlex}>
		                   <a href="https://www.linkedin.com/in/laurent-durup/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="Linkedin icon" className={styles.pictoLink} /></a>
                    <a href="https://www.github.com/LaurentKatsesSandalman" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub icon" className={styles.pictoLink}/></a>


                    <p  className={styles.pRight}>(+33) 6 76 43 48 08</p></div>

                   </div></div>
        <div className={styles.toggleGroup}>
            <div className={styles.toggleRow} role="group" aria-label="Switch portfolio">
                <button
                    type="button"
                    className={mode === "gd" ? styles.toggleButtonActive : styles.toggleButton}
                    onClick={() => switchMode("gd")}
                >
                    GD
                </button>
                <button
                    type="button"
                    className={mode === "dev" ? styles.toggleButtonActive : styles.toggleButton}
                    onClick={() => switchMode("dev")}
                >
                    Dev
                </button>
            </div>
            <div className={styles.toggleRow} role="group" aria-label="Switch language">
                <button
                    type="button"
                    className={lang === "en" ? styles.toggleButtonActive : styles.toggleButton}
                    onClick={() => switchLang("en")}
                >
                    EN
                </button>
                <button
                    type="button"
                    className={lang === "fr" ? styles.toggleButtonActive : styles.toggleButton}
                    onClick={() => switchLang("fr")}
                >
                    FR
                </button>
            </div>
        </div>
        </div>
    )
}

export default NavBar
