import projectSbu from "../assets/img/projects/super-brawl-universe-21525-1.jpg";
import projectTdf from "../assets/img/projects/tour-de-france-2020-official-game-11.jpg";
import projectTdfDesktop from "../assets/img/projects/tour-de-france-2020-official-game-11 - Copie.jpg";
import projectMgg from "../assets/img/projects/mgg_cover.jpg";

export const docs = [
    {
        section: "Design Work & Analysis",
        toParam: "docs",
        desc: "In this section, I share documents I have created in a previous job or for a GD test",
        projects: [
            {
                name: "Super Brawl Universe",
                toParam: "sbu",
                img: projectSbu,
                alt: "Super Brawl Universe loading page",
                link: "https://www.youtube.com/embed/5DqP_E5xtQI?si=aC3Hr4A6nuQds22A",
                projectType: "Mobile Game - Production",
                role: "Lead Game Designer",
                place: "Playsoft - Poland - Remote",
                starting: "2020",
                desc: [
                    "A previous launched version already existed",
                    "As a Lead Game Designer with 2 younger designers, my main task was to change the meta, from one similar to Marvel : Contest of Champions to a new one closer to Looney Tunes World of Mayhem",
                    "We also enriched the core game with addition of special powers (shield, freeze, etc.)",
                ],
            },
            {
                name: "Tour de France 2020 & 2021",
                toParam: "tdf",
                img: projectTdf,
				desktopImg:projectTdfDesktop,
                alt: "Tour de France advertisement sample",
                link: "https://www.youtube.com/embed/6mb5lzdHihM?si=ufP1O5GeeL9p3fg8",
                projectType: "Mobile Game - Production & Live Ops",
                role: "Lead Game Designer",
                place: "Playsoft - Poland - Remote",
                starting: "2020",
                desc: [
                    "For TDF 2020, a younger GD and I were in charge of the adaptation of TDF 2019. A lot of small things, but the main ones were: addition of a camp, new level-up system, distinction between riders and bikes (previously, bikes were a sub-attribute of riders), addition of a technology tree.",
                    "For TDF 2021, I designed a slightly different live-ops system and handled all the live-ops, based on existing official competitions (planning, implementation, new communication features…).",
                ],
            },
            {
                name: "Mutants: Genetic Gladiators",
                toParam: "mgg",
                img: projectMgg,
                alt: "Mutant Genetic Gladiators advertisement sample",
                link: "https://www.youtube.com/embed/gpGOVU2-JqM?si=FoQXMB9Bssi_HGLw",
                projectType: "Mobile Game - Concept to Live Ops",
                role: "Original Game Designer",
                place: "Kobojo - France",
                starting: "2013",
                desc: [
                    "MGG is a turn based fighting/breeding game.",
                    "On this Facebook/Mobile game, I was the main Game Designer and worked on the project from concept to Live Ops.",
                    "I mainly worked on the FB version, but except some UI adaptation, it was exactly the same game including balancing.",
                    "The game is still live, more than 10 yrs later!",
                    "https://play.google.com/store/apps/details?id=com.kobojo.mutants&hl=en",
                ],
            },
        ],
    }

];
