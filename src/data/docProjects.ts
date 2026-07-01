import projectAlien from "../assets/img/projects/alien.jpg";
import pdfAlienAnalysis from "../assets/pdf/Crazylabs/LaurentDurup_AlienInvasion_GameAnalysis.pdf";
import pdfAlienVipDoc from "../assets/pdf/Crazylabs/LaurentDurup_AlienInvasion_VipStatusDoc.pdf";
import pdfAlienVipFrame from "../assets/pdf/Crazylabs/LaurentDurup_AlienInvasion_VipStatusWireframes.pdf";
import projectRoller from "../assets/img/projects/skyroller.jpg";
import pdfRollerBreakdown from "../assets/pdf/SkyRoller/LaurentDurup_SkyRoller_GameBreakdown.pdf";
import pdfRollerData from "../assets/pdf/SkyRoller/LaurentDurup_SkyRoller_DataAnalysisSpreadsheet.pdf";
import pdfRollerDoc from "../assets/pdf/SkyRoller/LaurentDurup_SkyRoller_DataAnalysisDoc.pdf";
import pdfRollerReco from "../assets/pdf/SkyRoller/LaurentDurup_SkyRoller_RewardometerGDHL.pdf";
import projectMonopoly from "../assets/img/projects/monopolygo.png";
import pdfMonopoly from "../assets/pdf/MonopolyGo/LaurentDurup_MonopolyGo_SocialKPIsHL.pdf";
import projectBlast from "../assets/img/projects/blast_raiders.jpg";
import pdfBlast from "../assets/pdf/BlastRaiders/LaurentDurup_Blastraiders_ClanFeatureWireframes.pdf";
import projectRM from "../assets/img/projects/RoyalMatch.png";
import pdfRM from "../assets/pdf/RoyalMatch/LaurentDurup_RoyalMatch_SimplifiedGameEconomy.pdf";
import type { DocSection } from "../interfaces/allInterfaces";

export const docs: DocSection[] = [
    {
        section: { en: "Design Work & Analysis", fr: "Design Docs & Analyses" },
        toParam: "docs",
        desc: {
            en: "In this section, I share documents I have created in a previous job or for a GD test",
            fr: "Dans cette section se trouvent des documents que j'ai créés en poste ou pour un test de Game Design.",
        },
        projects: [
            {
                name: "Alien Invasion",
                company: "(CrazyLabs)",
                subtitle: { en: "Increase ARPU 30D", fr: "Augmenter l'ARPU J30" },
                toParam: "alien",
                img: projectAlien,
                alt: "to Alien Invasion docs",
                desc: {
                    en: [
                        "One of the requirement of this assignment was to increase ARPU30. To help you understand my proposal, you'll find my analysis of the game as a first doc, then the VIP feature doc and wireframes.",
                    ],
                    fr: [
                        "L'une des exigences de ce test était d'augmenter l'ARPU30. Pour vous aider à comprendre ma proposition, vous trouverez d'abord mon analyse du jeu, puis le doc de la fonctionnalité VIP et ses wireframes.",
                    ],
                },
                pdf: [
                    {
                        pdfTitle: { en: "Game analysis", fr: "Analyse du jeu" },
                        pdfDesc: {
                            en: [
                                "After analysing game loop, monetization, player choices and motivation, I tried to guess what could explain a high drop off for players during the first session.",
                                "My hypothesis involved 'difficulties to determine what to do next'.",
                            ],
                            fr: [
                                "Après avoir analysé la boucle de jeu, la monétisation, les choix et la motivation des joueurs, j'ai cherché à identifier ce qui pourrait expliquer un fort taux d'abandon lors de la première session.",
                                "Mon hypothèse portait sur la 'difficulté à déterminer quoi faire ensuite'.",
                            ],
                        },
                        pdfLink: pdfAlienAnalysis,
                        pdfName: "LaurentDurup_AlienInvasion_GameAnalysis.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: { en: "Feature VIP Status, doc", fr: "Feature Statut VIP, doc" },
                        pdfDesc: {
                            en: [
                                "VIP Status goal is to increase ARPU 30D, targeting low to middle spenders and non-payers on the edge of converting.",
                                "It grants the player comfort, not a faster progression, and is mentioned in adaptive offers.",
                            ],
                            fr: [
                                "L'objectif du Statut VIP est d'augmenter l'ARPU J30, en ciblant les petits et moyens payeurs, ainsi que les non-payeurs sur le point de convertir.",
                                "Il offre au joueur du confort et non une progression accélérée, et apparaît dans les offres adaptatives.",
                            ],
                        },
                        pdfLink: pdfAlienVipDoc,
                        pdfName: "LaurentDurup_AlienInvasion_VipStatusDoc.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: { en: "Feature VIP Status, wireframes", fr: "Feature Statut VIP, wireframes" },
                        pdfDesc: {
                            en: ["Please find here the wireframes referenced in the previous document"],
                            fr: ["Veuillez trouver ici les wireframes référencées dans le document précédent."],
                        },
                        pdfLink: pdfAlienVipFrame,
                        pdfName: "LaurentDurup_AlienInvasion_VipStatusWireframes.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "Sky Roller",
                company: "(HOMA)",
                subtitle: { en: "Rewarded videos analysis", fr: "Analyse des rewarded videos" },
                toParam: "skyroller",
                img: projectRoller,
                alt: "to Sky Roller docs",
                desc: {
                    en: [
                        "For Sky Roller, I did a game breakdown and a data analysis on rewarded videos.",
                        "Concerning data analysis part, you'll find the rough data analysis directly in the spreadsheet, the structured analysis, and a feature answering one of the issues",
                    ],
                    fr: [
                        "Pour Sky Roller, j'ai réalisé un inventaire des mécaniques du jeu et une analyse de données sur les rewarded videos.",
                        "Pour la partie analyse de données, vous trouverez l'analyse brute directement dans le tableur, l'analyse structurée, et une fonctionnalité répondant à l'un des problèmes identifiés.",
                    ],
                },
                pdf: [
                    {
                        pdfTitle: { en: "Game breakdown", fr: "Game breakdown" },
                        pdfDesc: {
                            en: [
                                "I analysed the first 40 levels to produce this doc.",
                                "I tried to describe everything in details: levels & chapters structure, obstacles list, main meta features, ads types and list.",
                                "It ends with 2 recommendations.",
                            ],
                            fr: [
                                "J'ai analysé les 40 premiers niveaux pour produire ce document.",
                                "J'ai cherché à tout décrire en détail : structure des niveaux et chapitres, liste des obstacles, principales fonctionnalités méta, types et liste de publicités.",
                                "Il se conclut par 2 recommandations.",
                            ],
                        },
                        pdfLink: pdfRollerBreakdown,
                        pdfName: "LaurentDurup_SkyRoller_GameBreakdown.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: { en: "Data analysis: spreadsheet", fr: "Analyse de données : tableur" },
                        pdfDesc: {
                            en: [
                                "I was given access to a set of data corresponding to all the rewarded videos during the first 7 days.",
                                "I first ranked them, and compared their display rank with their watched rank. I also ranked this result.",
                                "Then I did specific calculations for each type of rewarded video feature, to make meaningful comparisons.",
                            ],
                            fr: [
                                "J'ai eu accès à un ensemble de données correspondant à toutes les rewarded videos sur les 7 premiers jours.",
                                "Je les ai d'abord classées, puis comparé leur rang d'affichage à leur rang de visionnage. J'ai également classé ce résultat.",
                                "J'ai ensuite effectué des calculs spécifiques pour chaque type de rewarded video, afin d'établir des comparaisons significatives.",
                            ],
                        },
                        pdfLink: pdfRollerData,
                        pdfName: "LaurentDurup_SkyRoller_DataAnalysisSpreadsheet.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: { en: "Data analysis: doc", fr: "Analyse de données : doc" },
                        pdfDesc: {
                            en: [
                                "Based on previous doc, I identified 3 important situations that should lead to action.",
                                "For each of them, I highlighted the evidences in the data, and suggested a small feature to address it.",
                            ],
                            fr: [
                                "À partir du document précédent, j'ai identifié 3 situations importantes nécessitant une action.",
                                "Pour chacune, j'ai mis en évidence les indices dans les données et suggéré une petite fonctionnalité pour y répondre.",
                            ],
                        },
                        pdfLink: pdfRollerDoc,
                        pdfName: "LaurentDurup_SkyRoller_DataAnalysisDoc.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: { en: "Rewardometer, high level doc", fr: "Rewardometer, doc haut niveau" },
                        pdfDesc: {
                            en: ["This is one of the small features I suggested to implement to address specific situations raised by data"],
                            fr: ["Il s'agit de l'une des petites fonctionnalités que j'ai suggéré d'implémenter pour répondre à des situations spécifiques identifiées par les données."],
                        },
                        pdfLink: pdfRollerReco,
                        pdfName: "LaurentDurup_SkyRoller_RewardometerGDHL.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "MONOPOLY GO!",
                company: "(Scopely)",
                subtitle: { en: "Social KPIs", fr: "KPIs Sociaux" },
                toParam: "mgo",
                img: projectMonopoly,
                alt: "to MONOPOLY GO! docs",
                desc: {
                    en: ["The initial question leading to this doc was 'If you were in charge of social features, which KPIs would you monitor and why, and what would be your first features?'"],
                    fr: ["La question initiale à l'origine de ce document était : « Si vous étiez en charge des fonctionnalités sociales, quels KPIs suivriez-vous et pourquoi, et quelles seraient vos premières fonctionnalités ? »"],
                },
                pdf: [
                    {
                        pdfTitle: { en: "Social KPIs High Level", fr: "KPIs Sociaux, haut niveau" },
                        pdfDesc: {
                            en: [
                                "In the context of a mobile free-to-play game, what does Social or Friends mean?",
                                "Which existing KPIs should we monitor? Which new ones should we create? Why?",
                                "Depending on the first data results, how should we react?",
                            ],
                            fr: [
                                "Dans le contexte d'un jeu mobile free-to-play, que signifient les fonctionnalités Sociales ou Amis ?",
                                "Quels KPIs existants devrions-nous suivre ? Lesquels créer ? Pourquoi ?",
                                "En fonction des premiers résultats des données, comment devrions-nous réagir ?",
                            ],
                        },
                        pdfLink: pdfMonopoly,
                        pdfName: "LaurentDurup_MonopolyGo_SocialKPIsHL.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "Blast Raiders",
                company: "(PlaySoft)",
                subtitle: { en: "Clan feature UI", fr: "UI de la fonctionnalité Clan" },
                toParam: "blast",
                img: projectBlast,
                alt: "to Blast Raiders docs",
                desc: {
                    en: ["I worked on Blast Raiders several years, I created dozens of doc; I chose this one to illustrate a 'live production' situation: clear documentation, evolving to include recent implementations."],
                    fr: ["J'ai travaillé sur Blast Raiders pendant plusieurs années et créé des dizaines de documents ; j'ai choisi celui-ci pour illustrer une situation de 'production live' : une documentation claire, évoluant pour intégrer les implémentations récentes."],
                },
                pdf: [
                    {
                        pdfTitle: { en: "Clan feature UI", fr: "UI de la fonctionnalité Clan" },
                        pdfDesc: {
                            en: [
                                "This doc describes with wireframes all the needed screens for clan feature.",
                                "It includes references to our benchmarks, and result (validated screens done by artists) when available",
                            ],
                            fr: [
                                "Ce document décrit avec des wireframes tous les écrans nécessaires à la fonctionnalité Clan.",
                                "Il inclut des références à nos benchmarks, ainsi que le résultat final (écrans validés réalisés par les artistes) lorsque disponible.",
                            ],
                        },
                        pdfLink: pdfBlast,
                        pdfName: "LaurentDurup_Blastraiders_ClanFeatureWireframes.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "Royal Match",
                company: "(Dream Games)",
                subtitle: { en: "Simplified Game Economy", fr: "Économie de jeu simplifiée" },
                toParam: "rm",
                img: projectRM,
                alt: "to Royal Match docs",
                desc: {
                    en: [
                        "For this test, a company asked me to choose a game from a list, and re-create a simplified version of the Game Economy.",
                        "I chose Royal Match",
                    ],
                    fr: [
                        "Pour ce test, une entreprise m'a demandé de choisir un jeu parmi une liste, et de recréer une version simplifiée de son économie.",
                        "J'ai choisi Royal Match.",
                    ],
                },
                pdf: [
                    {
                        pdfTitle: { en: "Simplified Game Economy", fr: "Économie de jeu simplifiée" },
                        pdfDesc: {
                            en: [
                                "Starting from my assumptions on the game economy, I mapped core values and event planning to estimate average revenue per player level.",
                                "Based on this, I created a progression projection to identify pain points and HC purchase opportunities.",
                            ],
                            fr: [
                                "En partant de mes hypothèses sur l'économie du jeu, j'ai cartographié les valeurs clés et la planification des événements pour estimer le revenu moyen par niveau de joueur.",
                                "Sur cette base, j'ai créé une projection de progression pour identifier les points de friction et les opportunités d'achat de Hard Currency.",
                            ],
                        },
                        pdfLink: pdfRM,
                        pdfName: "LaurentDurup_RoyalMatch_SimplifiedGameEconomy.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
        ],
    },
];
