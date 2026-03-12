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

export const docs = [
    {
        section: "Design Work & Analysis",
        toParam: "docs",
        desc: "In this section, I share documents I have created in a previous job or for a GD test",
        projects: [
            {
                name: "Alien Invasion",
				company:"(CrazyLabs)",
                subtitle: "Increase ARPU 30D",
                toParam: "alien",
                img: projectAlien,
                alt: "to Alien Invasion docs",
                desc: ["One of the requirement of this assignment was to increase ARPU30. To help you understand my proposal, you'll find my analysis of the game as a first doc, then the VIP feature doc and wireframes.",
					 ],
                pdf: [
                    {
                        pdfTitle: "Game analysis",
                        pdfDesc: [
                            "After analysing game loop, monetization, player choices and motivation, I tried to guess what could explain a high drop off for players during the first session.",
							"My hypothesis involved 'difficulties to determine what to do next'."
                        ],
                        pdfLink: pdfAlienAnalysis,
                        pdfName: "LaurentDurup_AlienInvasion_GameAnalysis.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: "Feature VIP Status, doc",
                        pdfDesc: ["VIP Status goal is to increase ARPU 30D, targeting low to middle spenders and non-payers on the edge of converting.",
							"It grants the player comfort, not a faster progression, and is mentioned in adaptive offers.",],
                        pdfLink: pdfAlienVipDoc,
                        pdfName: "LaurentDurup_AlienInvasion_VipStatusDoc.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: "Feature VIP Status, wireframes",
                        pdfDesc: ["Please find here the wireframes referenced in the previous document"],
                        pdfLink: pdfAlienVipFrame,
                        pdfName:
                            "LaurentDurup_AlienInvasion_VipStatusWireframes.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "Sky Roller",
				company:"(HOMA)",
                subtitle: "Rewarded videos analysis",
                toParam: "skyroller",
                img: projectRoller,
                alt: "to Sky Roller docs",
                desc: ["For Sky Roller, I did a game breakdown and a data analysis on rewarded videos.",
					"Concerning data analysis part, you'll find the rough data analysis directly in the spreadsheet, the structured analysis, and a feature answering one of the issues"],
                pdf: [
                    {
                        pdfTitle: "Game breakdown",
                        pdfDesc: ["I analysed the first 40 levels to produce this doc.",
							"I tried to describe everything in details: levels & chapters structure, obstacles list, main meta features, ads types and list.",
						"It ends with 2 recommendations."],
                        pdfLink: pdfRollerBreakdown,
                        pdfName: "LaurentDurup_SkyRoller_GameBreakdown.pdf",
                        pdfHeight: 500,
                    },
					{
                        pdfTitle: "Data analysis: spreadsheet",
                        pdfDesc: ["I was given access to a set of data corresponding to all the rewarded videos during the first 7 days.",
							"I first ranked them, and compared their display rank with their watched rank. I also ranked this result.",
						"Then I did specific calculations for each type of rewarded video feature, to make meaningful comparisons."],
                        pdfLink: pdfRollerData,
                        pdfName: "LaurentDurup_SkyRoller_DataAnalysisSpreadsheet.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: "Data analysis: doc",
                        pdfDesc: ["Based on previous doc, I identified 3 important situations that should lead to action.",
							"For each of them, I highlighted the evidences in the data, and suggested a small feature to address it."],
                        pdfLink: pdfRollerDoc,
                        pdfName: "LaurentDurup_SkyRoller_DataAnalysisDoc.pdf",
                        pdfHeight: 500,
                    },
                    {
                        pdfTitle: "Rewardometer, high level doc",
                        pdfDesc: ["This is one of the small features I suggested to implement to address specific situations raised by data"],
                        pdfLink: pdfRollerReco,
                        pdfName: "LaurentDurup_SkyRoller_RewardometerGDHL.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "MONOPOLY GO!",
				company:"(Scopely)",
                subtitle: "Social KPIs",
                toParam: "mgo",
                img: projectMonopoly,
                alt: "to MONOPOLY GO! docs",
                desc: ["The initial question leading to this doc was 'If you were in charge of social features, which KPIs would you monitor and why, and what would be your first features?'"],
                pdf: [
                    {
                        pdfTitle: "Social KPIs High Level",
                        pdfDesc: ["In the context of a mobile free-to-play game, what does Social or Friends mean?",
							"Which existing KPIs should we monitor? Which new ones should we create? Why?",
							"Depending on the first data results, how should we react?"
						],
                        pdfLink: pdfMonopoly,
                        pdfName: "LaurentDurup_MonopolyGo_SocialKPIsHL.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "Blast Raiders",
				company:"(PlaySoft)",
                subtitle: "Clan feature UI",
                toParam: "blast",
                img: projectBlast,
                alt: "to Blast Raiders docs",
                desc: ["I worked on Blast Raiders several years, I created dozens of doc; I chose this one to illustrate a 'live production' situation: clear documentation, evolving to include recent implementations."],
                pdf: [
                    {
                        pdfTitle: "Clan feature UI",
                        pdfDesc: ["This doc describes with wireframes all the needed screens for clan feature.",
							"It includes references to our benchmarks, and result (validated screens done by artists) when available"
						],
                        pdfLink: pdfBlast,
                        pdfName:
                            "LaurentDurup_Blastraiders_ClanFeatureWireframes.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
            {
                name: "Royal Match",
				company:"(Dream Games)",
                subtitle: "Simplified Game Economy",
                toParam: "rm",
                img: projectRM,
                alt: "to Royal Match docs",
                desc: [
                    "For this test, a company asked me to choose a game from a list, and re-create a simplified version of the Game Economy.",
                    "I chose Royal Match",
                ],
                pdf: [
                    {
                        pdfTitle: "Simplified Game Economy",
                        pdfDesc: ["Starting from my assumptions on the game economy, I mapped core values and event planning to estimate average revenue per player level.",
							"Based on this, I created a progression projection to identify pain points and HC purchase opportunities."],
                        pdfLink: pdfRM,
                        pdfName:
                            "LaurentDurup_RoyalMatch_SimplifiedGameEconomy.pdf",
                        pdfHeight: 500,
                    },
                ],
            },
        ],
    },
];
