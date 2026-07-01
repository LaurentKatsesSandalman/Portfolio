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
            <Link to={`/${mode}/${lang}`} aria-label="Back to home page">
                <img className={styles.logo} src={Sandals} alt="Sandales icon"/>
            </Link>

            <div className={styles.h1container}>
                <p className={styles.h1}>Laurent "Sandalman"</p>

                <div className={styles.modeSlider} role="group" aria-label="Switch portfolio mode">
                    <span
                        className={`${styles.sliderLabel} ${mode === "gd" ? styles.sliderLabelActive : styles.sliderLabelInactive}`}
                        onClick={() => switchMode("gd")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && switchMode("gd")}
                        aria-pressed={mode === "gd"}
                    >
                        <span className={styles.labelFull}>{profiles["gd"].navTagline[lang]}</span>
                        <span className={styles.labelShort}>GD</span>
                    </span>
                    <button
                        type="button"
                        className={styles.sliderTrack}
                        onClick={() => switchMode(mode === "gd" ? "dev" : "gd")}
                        aria-label={`Switch to ${mode === "gd" ? "Dev" : "GD"} mode`}
                    >
                        <span className={`${styles.sliderCircle} ${mode === "dev" ? styles.sliderCircleRight : ""}`} />
                    </button>
                    <span
                        className={`${styles.sliderLabel} ${mode === "dev" ? styles.sliderLabelActive : styles.sliderLabelInactive}`}
                        onClick={() => switchMode("dev")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && switchMode("dev")}
                        aria-pressed={mode === "dev"}
                    >
                        <span className={styles.labelFull}>{profiles["dev"].navTagline[lang]}</span>
                        <span className={styles.labelShort}>Dev</span>
                    </span>
                </div>

                <p className={styles.mobileTagline}>{profile.navTagline[lang]}</p>

                <div className={styles.mainFlex}>
                    <p className={styles.pRight}>laurent.durup@proton.me</p>
                    <div className={styles.rowFlex}>
                        <a href="https://www.linkedin.com/in/laurent-durup/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="Linkedin icon" className={styles.pictoLink} />
                        </a>
                        <a href="https://www.github.com/LaurentKatsesSandalman" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub icon" className={styles.pictoLink}/>
                        </a>
                        <p className={styles.pRight}>(+33) 6 76 43 48 08</p>
                    </div>
                </div>
            </div>

            <div className={styles.langSelectWrapper}>
                <select
                    className={styles.langSelect}
                    value={lang}
                    onChange={(e) => switchLang(e.target.value as Lang)}
                    aria-label="Switch language"
                >
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                </select>
            </div>
        </div>
    )
}

export default NavBar
