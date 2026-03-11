//import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SectionButton from "../../components/SectionButton/SectionButton";
import photo from "../../assets/img/temp_profil_3.png";
import mobile from "../../assets/img/logos/logo-mobile.png";
import fb from "../../assets/img/logos/logo-fb.png";
import unreleased from "../../assets/img/logos/logo-unreleased.png";
import docs from "../../assets/img/logos/logo-docs1.jpg"

function HomePage() {
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
                    <h1 className={styles.h1top}>Senior Game Designer</h1>
                    <h2 className={styles.h2top}>
                        Free-to-play & Mobile Games
                    </h2>
                    <p className={styles.pblock}>
                        Hi!</p>
						<p className={styles.pblock}>
                        I’m a Senior Game Designer, with 10+ years
                        experience in the Mobile Free-To-Play area, both Casual
                        and MidCore.</p>
						  <p className={styles.pblock}>
						I’m able to handle the Game Design of a
                        project from initial concept to live-ops. I’m a
                        generalist/versatile Game designer, but with a stronger
                        analytical/problem-solving side. Bringing consistency is
                        my strong point, especially when it comes to connecting
                        core gameplay with meta.
                    </p>
                </div>
            </div>

            <h2 className={styles.h2middle}>Portfolio</h2>
			<p className={styles.pblock}>
                        In this section, you’ll find most of the free-to-play games I worked on as a Game Designer.</p>
						  <p className={styles.pblock}>
						Games I helped create as a Company Lead are not mentioned, as I wasn’t one of the Main Designers, but more of an unblocker or facilitator.
                    </p>
					<p className={styles.pblock}>
						I have also discarded my early youth gamified animation projects.
                    </p>
            <div className={styles.projectsContainer}>
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
            </div>
        </div>
    );
}

export default HomePage;
