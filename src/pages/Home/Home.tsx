import styles from "./Home.module.css";
import SectionButton from "../../components/SectionButton/SectionButton";
import photo from "../../assets/img/temp_profil_3.png";
import mobile from "../../assets/img/logos/logo-mobile.png";
import fb from "../../assets/img/logos/logo-fb.png";
import unreleased from "../../assets/img/logos/logo-unreleased.png";
import docsImg from "../../assets/img/logos/logo-docs1.jpg";
import { devLogos, devPortfolio } from "../../data/devProjects";
import { portfolio } from "../../data/projects";
import { docs } from "../../data/docProjects";
import { profiles } from "../../data/profile";
import { useModeLang } from "../../hooks/useModeLang";

function HomePage() {
    const { mode, lang } = useModeLang();
    const profile = profiles[mode];

    const gdMobile    = portfolio.find(s => s.toParam === "mobile")!;
    const gdFb        = portfolio.find(s => s.toParam === "fb")!;
    const gdUnreleased = portfolio.find(s => s.toParam === "unreleased")!;

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
                            name={gdMobile.section[lang]}
                            to="portfolio/mobile"
                            ariaLabel="to Released Mobile Games section"
                        />
                        <SectionButton
                            image={unreleased}
                            name={gdUnreleased.section[lang]}
                            to="portfolio/unreleased"
                            ariaLabel="to soft-launched or unreleased Mobile Games section"
                        />
                        <SectionButton
                            image={fb}
                            name={gdFb.section[lang]}
                            to="portfolio/fb"
                            ariaLabel="to Facebook Social Games section"
                        />
                        <SectionButton
                            image={docsImg}
                            name={docs[0].section[lang]}
                            to="docs/docs"
                            ariaLabel="to Design Docs section"
                        />
                    </>
                ) : (
                    <>
                        <SectionButton
                            image={devLogos.pro}
                            name={devPortfolio[0].section[lang]}
                            to="portfolio/pro"
                            ariaLabel="to professional projects section"
                        />
                        <SectionButton
                            image={devLogos.groupe}
                            name={devPortfolio[1].section[lang]}
                            to="portfolio/groupe"
                            ariaLabel="to group projects section"
                        />
                        <SectionButton
                            image={devLogos.solo}
                            name={devPortfolio[2].section[lang]}
                            to="portfolio/solo"
                            ariaLabel="to solo projects section"
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default HomePage;
