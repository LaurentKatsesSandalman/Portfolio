import styles from "./Home.module.css";
import SectionButton from "../../components/SectionButton/SectionButton";
import photo from "../../assets/img/temp_profil_3.png";
import mobile from "../../assets/img/logos/logo-mobile.png";
import fb from "../../assets/img/logos/logo-fb.png";
import unreleased from "../../assets/img/logos/logo-unreleased.png";
import docs from "../../assets/img/logos/logo-docs1.jpg"
import { devLogos } from "../../data/devProjects";
import { profiles } from "../../data/profile";
import { useModeLang } from "../../hooks/useModeLang";

function HomePage() {
    const { mode, lang } = useModeLang();
    const profile = profiles[mode];

    return (
        <div className={styles.mainContainer} >
            <div className={styles.presentationContainer}>
                <div>
                    <img
                        className={styles.avatar}
                        src={photo}
                        alt="Laurent Sandalman Durup picture"
                    />
                </div>
                <div className={styles.presentationText}>
                    <h1 className={styles.h1top}>{profile.heroTitle[lang]}</h1>
                    {profile.heroSubtitle && (
                        <h2 className={styles.h2top}>
                            {profile.heroSubtitle[lang]}
                        </h2>
                    )}
                    {profile.badges && (
                        <div className={styles.badgeRow}>
                            {profile.badges[lang].map((badge) => (
                                <span className={styles.badge} key={badge}>{badge}</span>
                            ))}
                        </div>
                    )}
                    {profile.bio[lang].map((paragraph, index) => (
                        <p className={styles.pblock} key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className={styles.portfolioIntro}>
                <h2 className={styles.h2middle}>{profile.portfolioHeading[lang]}</h2>
                {profile.portfolioIntro[lang].map((paragraph, index) => (
                    <p className={styles.pblock} key={index}>{paragraph}</p>
                ))}
            </div>
            <div className={styles.projectsContainer}>
                {mode === "gd" ? (
                    <>
                        <SectionButton
                            image={mobile}
                            name="Released Mobile Games"
                            to="portfolio/mobile"
                            ariaLabel="to Released Mobile Games section"
                        />
                        <SectionButton
                            image={unreleased}
                            name="Soft-launched or unreleased"
                            to="portfolio/unreleased"
                            ariaLabel="to soft-launched or unreleased Mobile Games section"
                        />
                        <SectionButton
                            image={fb}
                            name="Facebook Social Games"
                            to="portfolio/fb"
                            ariaLabel="to Facebook Social Games section"
                        />
                        <SectionButton
                            image={docs}
                            name="Design Work & Analysis"
                            to="docs/docs"
                            ariaLabel="to Design Docs section"
                        />
                    </>
                ) : (
                    <>
                        <SectionButton
                            image={devLogos.pro}
                            name="Professionnel"
                            to="portfolio/pro"
                            ariaLabel="vers la section projets professionnels"
                        />
                        <SectionButton
                            image={devLogos.groupe}
                            name="En groupe"
                            to="portfolio/groupe"
                            ariaLabel="vers la section projets en groupe"
                        />
                        <SectionButton
                            image={devLogos.solo}
                            name="En solo"
                            to="portfolio/solo"
                            ariaLabel="vers la section projets en solo"
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default HomePage;
