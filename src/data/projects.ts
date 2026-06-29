import projectSbu from "../assets/img/projects/super-brawl-universe-21525-1.jpg";
import projectTdf from "../assets/img/projects/tour-de-france-2020-official-game-11.jpg";
import projectTdfDesktop from "../assets/img/projects/tour-de-france-2020-official-game-11 - Copie.jpg";
import projectMgg from "../assets/img/projects/mgg_cover.jpg";
import projectAtlantis from "../assets/img/projects/Atlantis-Fantasy-111_small.png";
import projectAtlantisDesktop from "../assets/img/projects/Atlantis-Fantasy-111.png";
import projectTs from "../assets/img/projects/fashion_agents.jpg";
import projectBlast from "../assets/img/projects/blast_raiders.jpg";
import projectBlastDesktop from "../assets/img/projects/maxresdefault.jpg";
import projectTennis from "../assets/img/projects/tennis_manager.jpg";
import projectRivals from "../assets/img/projects/rivals.jpg";
import type { GDSection } from "../interfaces/allInterfaces";

// ─── English desc arrays ───────────────────────────────────────────────────

const sbuDesc = [
    "Super Brawl Universe is a turn-based fighting game developed under the Nickelodeon licence. Despite a very high volume of organic downloads (free, not ad-driven), the game suffered from weak retention and near-zero monetization, leading to a decision made before I joined to pivot from a Marvel: Contest of Champions-inspired model to one closer to Looney Tunes World of Mayhem. I joined the project part-time, alongside Tour de France 2020, to specify and implement this new model.",
    "My first task was a full retro-game-design of LTWM's economy: model analysis, specs, balancing formulas, and implementation scripts directly integrated into the game via Google Sheets. The adaptation was not straightforward: LTWM relies on hundreds of character variants to fuel its lootboxes, whereas SBU had around twenty, with no plans to add more than two or three in the short term. I reworked the lootbox logic entirely: diluting rewards and accelerating the progression of existing characters, so that fragment collection remained satisfying despite the limited roster. I designed the probability formulas and win projections, implemented directly in the game.",
    'I also took over a shelved "powers" feature, under three constraints: rely exclusively on already-coded functions or easily derived ones, be balanced by a central formula capable of comparing heterogeneous effects (freeze, poison, shield, regeneration, acceleration, etc.), and be implementable by GDs via spreadsheet without further developer involvement once the global feature is coded. I adapted the existing spreadsheet to integrate this logic, adding, removing, and restructuring columns as needed.',
    "On the monetization side, I set up a rotating daily pack schedule: three simultaneous offers per day, running on deliberately offset A/B/C cycles to limit repetition and avoid saturation. Each sprint, I analyzed hard currency and real currency sales to refine the schedule: character popularity, optimal delay between two appearances of the same character, synergies between characters from the same universe.",
    "The LTWM model places PvP at the center of progression, which creates specific issues in a skill-based asynchronous game. I therefore worked to strengthen PvE alternatives, offering a satisfying progression path for players reluctant to engage with PvP.",
    "The project was cancelled when Playsoft was acquired by Product Madness, on the assumption that the download volume was largely driven by a younger audience without access to payment methods.",
];

const tdfDesc = [
    "Tour de France is an annual game: same engine, new features, and a hard release deadline tied to the official race start. I was brought in after completing an analysis test on the current version, with the main mission of correcting its weaknesses. I arrived on TDF2020 with a documented list of identified problems and proposed solutions, but the scope ultimately implemented before launch was more limited than planned. On this project, I worked part-time, with the other half dedicated to SBU.",
    "One of the structural changes I introduced was separating the cyclist from their bike, which had previously been linked: a fully upgraded bike could disappear when its associated cyclist was discarded. This change had cascading consequences: the progression system for both entities had to be reworked, resources reassigned, and all offers and packs adapted to the new logic. I also restructured an existing adaptive offers feature, defining spending profiles over 30 days and a logic for presenting offers based on the last offer seen and its purchase status. The balancing of the camp buildings (purchase, upgrades, unlock conditions, effects), each tied to one of the game's main features, was also largely my responsibility, on specs that had often been outlined before my arrival. I also supervised a junior GD on this project who contributed significantly; for example, he managed the technology tree feature in its entirety.",
    "For TDF 2021, resources were limited: one third of my time and roughly one man-month of development. I chose to focus all effort on the live ops feature: reconstructing real race stages on a calendar close to the official one. This involved significant collection and implementation work for each stage: identifying official sources, retrieving and tracing route maps to generate the in-game path, entering data in a spreadsheet (total distance, climbs with category and kilometer, sprint zones), and selecting a royalty-free illustration. I managed the full live ops over the course of the season. The financial outcome covered the licence and staffing costs, without generating significant margin.",
];

const mggMobileDesc = [
    "Mutants: Genetic Gladiators is a fighting and creature-breeding game, built on Kobojo's city-builder engine (previously used for Atlantis Fantasy) and on an initial concept from the CTO and CMO: take inspiration from Dragon City, but make it more midcore, replacing classic elements with creature types. Most of the Atlantis Fantasy team transitioned to MGG, and I was involved from the concept phase. The six types ultimately chosen were: robot, necro, warrior, zoo, magic, and alien, enabling combinations such as robot-necro or alien-warrior.",
    "My first structural contribution was identifying and addressing what I saw as Dragon City's core weakness: its breeding and fighting loops are disconnected, which sidelines combat as a secondary feature and pulls the audience toward casual play. I convinced the team that this was indeed the problem, and that my solution was the right one: linking the two loops through an original mechanic, the mutosterone, a resource tied to each creature that increases with combat and decreases after each breeding. Creatures cannot breed unless they have fought enough beforehand.",
    "Once the concept was validated, I took charge of the full game design: a balancing formula for mutants (built from scratch, automatically calculating hit points and attack value from a single parameter: attack speed), global resource balancing (breeding, level-up, land: cost and output). I also designed and level-designed the entire initial PvE (including energy costs and resource rewards): 60 fights across 6 genes, each fight featuring one to two waves of one to three mutants. To generate the XML scripts needed for implementation without mobilizing developers, I built an Excel matrix from scratch that produced the complete script for all fights from basic inputs, leaving only minimal cleanup in a text editor.",
    "The game launched with 72 initial creatures (six genes, combined two by two, one rare and one common per combination). I level-designed all creatures: stats, genes, positioning within the global balance. The narrative concept of each creature was the result of a collective brainstorm, to which I contributed roughly a third to half of the ideas, such as the Scare Bears for the zoo/necro combination, a zombie version of the Care Bears. I also produced all quests and achievements, including their implementation in the developer-provided tool, a significant portion of the associated dialogues, and all game documentation.",
    "Mutants: Genetic Gladiators (Mobile) is the mobile port of this game. The two versions were first developed sequentially, Facebook first, then in parallel once the mobile version had caught up in terms of features. In practice, it was a single game: same creatures, same balancing values, same PvE, same events at the same time on both platforms. Shortly after the mobile launch, each platform was generating comparable revenue.",
    "The main mobile-specific work was a full UI overhaul for phones and tablets, handled by a dedicated mobile GD.",
    "Live ops followed a regular event rhythm: bi-weekly event quests, regular release of new mutants (some breedable, others not), and ongoing game improvements: FTUE, new secondary features, rebalancing. The game reached 250,000 DAUs and 1.5 million MAUs, and is still live more than ten years after launch.",
];

const mggFbDesc = [
    "Mutants: Genetic Gladiators is a fighting and creature-breeding game, built on Kobojo's city-builder engine (previously used for Atlantis Fantasy) and on an initial concept from the CTO and CMO: take inspiration from Dragon City, but make it more midcore, replacing classic elements with creature types. Most of the Atlantis Fantasy team transitioned to MGG, and I was involved from the concept phase. The six types ultimately chosen were: robot, necro, warrior, zoo, magic, and alien, enabling combinations such as robot-necro or alien-warrior.",
    "My first structural contribution was identifying and addressing what I saw as Dragon City's core weakness: its breeding and fighting loops are disconnected, which sidelines combat as a secondary feature and pulls the audience toward casual play. I convinced the team that this was indeed the problem, and that my solution was the right one: linking the two loops through an original mechanic, the mutosterone, a resource tied to each creature that increases with combat and decreases after each breeding. Creatures cannot breed unless they have fought enough beforehand.",
    "Once the concept was validated, I took charge of the full game design: a balancing formula for mutants (built from scratch, automatically calculating hit points and attack value from a single parameter: attack speed), global resource balancing (breeding, level-up, land: cost and output). I also designed and level-designed the entire initial PvE (including energy costs and resource rewards): 60 fights across 6 genes, each fight featuring one to two waves of one to three mutants. To generate the XML scripts needed for implementation without mobilizing developers, I built an Excel matrix from scratch that produced the complete script for all fights from basic inputs, leaving only minimal cleanup in a text editor.",
    "The game launched with 72 initial creatures (six genes, combined two by two, one rare and one common per combination). I level-designed all creatures: stats, genes, positioning within the global balance. The narrative concept of each creature was the result of a collective brainstorm, to which I contributed roughly a third to half of the ideas, such as the Scare Bears for the zoo/necro combination, a zombie version of the Care Bears. I also produced all quests and achievements, including their implementation in the developer-provided tool, a significant portion of the associated dialogues, and all game documentation.",
    "Live ops followed a regular event rhythm: bi-weekly event quests, regular release of new mutants (some breedable, others not), and ongoing game improvements: FTUE, new secondary features, rebalancing. The game reached 250,000 DAUs and 1.5 million MAUs, and is still live more than ten years after launch.",
];

const atlantisDesc = [
    "Atlantis Fantasy was a fully functional Facebook city-builder when I joined the project. I was the only GD, and my work consisted primarily of live ops, alongside a few improvements: new secondary features, FTUE rework.",
    'The main rhythm is one event every two weeks, most often tied to the calendar (Valentine\'s Day, Olympics, Easter, Christmas): define a theme ("Valentine\'s Day" becomes "The Return of Cupid"), design a series of around ten event quests with dialogues, quests that should not depend (or barely) on the player\'s progress in the main storyline. Each event is built around an item pack created by the art team. The quests follow a progressive difficulty curve: low-level resources accessible to all at the start of the series, increasing investment in time or hard currency for mid-series quests, premium items at the end.',
    "I also designed and implemented the quests and dialogues for the Season 2 of the main storyline, based on political intrigues and love stories between gods.",
];

const tsDesc = [
    "Totally Spies! Fashion Agent is a free-to-play Facebook game developed under the Totally Spies! licence, for which I serve both as lead GD and licence manager. This dual role means guiding the team in respecting the universe, while also defending our creative choices to the licensor, Marathon. I never faced a refusal, drawing on a thorough understanding of the licence's values and codes.",
    "The game is divided into two distinct universes reflecting the characters' double lives: fashion and espionage. The fashion side is itself split in two: a 2D character customization and fashion module, and an isometric 3D home decoration game. The espionage side is also in 3D iso; it is a semi-linear puzzle-adventure game in which the player progresses by spending energy points to overcome obstacles, fight enemies, and solve puzzles based on discovering the correct sequence of actions, chest openings, and key usage. This gameplay system, which I designed from scratch inspired by Farmville's land-clearing mechanic and enriched with a puzzle dimension and spatial progression, was copied in its entirety shortly after our launch by Zynga's Adventure World. A point of pride, and bad news commercially: David rarely survives Goliath's assault.",
    "As the sole GD on the project, I handled all game design: mechanics definition, creation of level design items, implementation of items to produce the level design of the full game, energy and currency balancing (soft and hard currency), and player progression management (some areas requiring a minimum level to unlock). With no data analyst available, I also handled part of the data analysis in Excel, primarily focused on purchase and retention patterns.",
];

const blastDesc = [
    "Blast Raiders is a mobile puzzle game with a match-2 core gameplay in the vein of Toon Blast. Part of the project had already been developed before I joined. The game went through several significant meta pivots over two years, and with each new direction set by the project owner, I took charge of all game design: feature documentation, new level design building blocks, detailed wireframes, and full economy design and implementation (projections, balancing, values implemented via spreadsheet).",
    "The first pivot aimed to blend Toon Blast and Coin Master: a level-based core gameplay combined with attack and raid mechanics allowing players to destroy another player's village. The meta revolved around building isometric 3D villages, funded by a fluid soft currency tied to level performance and stealable by opponents.",
    "The second pivot shifted the game toward a Royal Match meta, with star-based construction (1 completed level = 1 star). I conducted an in-depth feature and economy retro-game-design of Royal Match, including recreating its events adapted to our own economy, and managed the full rebalancing this pivot required. The constraint was to preserve some form of raid: I designed an adaptation in which raiding allows players to steal free boosters, compatible with the new meta without disrupting its balance.",
    "I designed and implemented 450 levels, along with an obstacle matrix: prior to level design, it defined precisely which obstacles appeared in which levels, planned unlocks, calculated distributions, and verified they matched the original intent, itself formalized in a separate sheet defining each obstacle's weight and expected frequency across the first 450 levels.",
    "I also worked on multiple FTUE versions, each iteration informed by per-step data analysis: churn rate at each tutorial step, hypotheses on causes, and implementation of solutions. I also collaborated with artists on the visual themes of events and obstacles: reference sources, moodboard validation.",
    "The game remained in soft launch throughout the project, getting closer with each new version to the monetization and D7 retention targets that would have greenlit a global launch, without ever reaching them.",
];

const tennisDesc = [
    "Tennis Manager Mobile is the first tennis management game on mobile, developed under the Mouratoglou licence, named after the coach of Serena Williams and owner of a tennis academy. The initial brief set two strong constraints: coach only one player at a time, and manage a campus symbolically representing the Mouratoglou Academy.",
    "To ground the game in professional tennis reality, I integrated the full tennis ruleset but also the full ATP ruleset (points calculation, yearly rankings, tournament draw rules based on registered players' rankings, mandatory participation requirements for top-ranked players, etc.); all competitions in the game existed in real life, with the correct surface type and a consistent calendar. I also had two direct exchanges with Patrick Mouratoglou to understand the strategies and priorities of a real high-level coach, which I integrated into the game mechanics.",
    "The game draws inspiration from football management games: training, stat progression, tournament selection, and mostly automated matches. The player can however define strategy by adjusting parameters on an offensive/defensive spectrum, and intervene during the match to change those parameters (with penalties) to adapt to the situation.",
    "I handled all game design: feature documentation, balancing, initial economy. When simulation engine imperfections were identified, our approaches diverged: I advocated for fixing the engine itself, while the studio director opted for overlay fixes, which he designed and implemented himself.",
    "The game was soft-launched but did not find its audience. I left after two years, before its global launch, which happened later with additional features.",
];

const rivalsDesc = [
    "Urban Rivals Squad RPG is a mobile adaptation of Urban Rivals, a collectible card game, into a turn-based squad RPG in the vein of Summoners War: a team of fighters, each with a basic attack and two special abilities with cooldowns, targeting enemies or allies depending on their nature.",
    'The central twist, which I designed, is the synergy system: when a clan member attacks, other members of the same clan in the team have a chance to automatically perform a free attack of lesser power. These synergies can also apply status effects (burn, poison, haste, shield) that feed into clan-specific combos, such as "exploit burn," which amplifies damage on already-burning targets. The combos emerged from a mix of gaming culture references, adaptation of the original card game\'s fighter abilities, and narrative elements from the licence: a fire-oriented clan, for example, naturally develops synergies around burn.',
    "Although I was not the licence manager, I drew on my licence management experience from other projects to integrate as many Urban Rivals lore elements as possible into the gameplay.",
    "I handled all game design on this project for just over a year. The game reached alpha, sought a publisher without success, and was then shelved.",
];

// ─── French desc arrays ────────────────────────────────────────────────────

const sbuDescFr = [
    "Super Brawl Universe est un jeu de combat au tour par tour développé sous licence Nickelodeon. Malgré un volume très élevé de téléchargements organiques (gratuits, sans publicité), le jeu souffrait d'une rétention faible et d'une monétisation quasi nulle, conduisant à la décision — prise avant mon arrivée — de pivoter d'un modèle inspiré de Marvel : Contest of Champions vers un modèle plus proche de Looney Tunes World of Mayhem. J'ai rejoint le projet à mi-temps, en parallèle de Tour de France 2020, pour documenter et implémenter ce nouveau modèle.",
    "Ma première mission a été un rétro-game-design complet de l'économie de LTWM : analyse du modèle, spécifications, formules de balancing et scripts d'implémentation directement intégrés dans le jeu via Google Sheets. L'adaptation n'était pas triviale : LTWM repose sur des centaines de variantes de personnages pour alimenter ses lootboxes, alors que SBU en comptait une vingtaine, sans plans d'en ajouter plus de deux ou trois à court terme. J'ai entièrement retravaillé la logique des lootboxes : dilution des récompenses et accélération de la progression des personnages existants, afin que la collecte de fragments reste satisfaisante malgré le roster limité. J'ai conçu les formules de probabilité et les projections de gains, implémentées directement dans le jeu.",
    "J'ai également repris une fonctionnalité \"pouvoirs\" abandonnée, sous trois contraintes : s'appuyer exclusivement sur des fonctions déjà codées ou facilement dérivables, être équilibrée par une formule centrale capable de comparer des effets hétérogènes (gel, poison, bouclier, régénération, accélération, etc.), et être implémentable par les GDs via tableur sans intervention supplémentaire des développeurs une fois la fonctionnalité globale codée. J'ai adapté le tableur existant pour intégrer cette logique, en ajoutant, supprimant et restructurant les colonnes selon les besoins.",
    "Côté monétisation, j'ai mis en place un calendrier tournant d'offres quotidiennes : trois offres simultanées par jour, fonctionnant sur des cycles A/B/C délibérément décalés pour limiter la répétition et éviter la saturation. Chaque sprint, j'analysais les ventes en Hard Currency et en monnaie réelle pour affiner le calendrier : popularité des personnages, délai optimal entre deux apparitions du même personnage, synergies entre personnages d'un même univers.",
    "Le modèle LTWM place le PvP au cœur de la progression, ce qui crée des problèmes spécifiques dans un jeu asynchrone basé sur la compétence. J'ai donc travaillé à renforcer les alternatives PvE, offrant un chemin de progression satisfaisant aux joueurs réticents à s'engager dans le PvP.",
    "Le projet a été annulé lors du rachat de Playsoft par Product Madness, sur la base de l'hypothèse que le volume de téléchargements était principalement le fait d'un public plus jeune sans accès aux moyens de paiement.",
];

const tdfDescFr = [
    "Tour de France est un jeu annuel : le même moteur, de nouvelles fonctionnalités, et une date de sortie non-négociable liée à celle du départ officiel de la course. J'ai été recruté après avoir réalisé un test d'analyse sur la version en cours, avec pour mission principale de corriger ses points faibles. Je suis arrivé sur TDF2020 avec une liste documentée de problèmes identifiés et de solutions proposées, mais le périmètre finalement implémenté avant le lancement s'est avéré plus limité que prévu. Sur ce projet, je travaillais à mi-temps, l'autre moitié étant consacrée à SBU.",
    "L'un des changements structurels que j'ai introduits a été de dissocier le coureur de son vélo, jusqu'alors liés : un vélo entièrement amélioré pouvait disparaître lorsque le coureur associé était écarté. Ce changement a eu des conséquences en cascade : le système de progression des deux entités a dû être revu, les ressources réattribuées, et toutes les offres et packs adaptés à la nouvelle logique. J'ai également restructuré une fonctionnalité d'offres adaptatives existante, en définissant des profils de dépenses sur 30 jours et une logique de présentation des offres basée sur la dernière offre vue et son statut d'achat. L'équilibrage des bâtiments du camp (achat, améliorations, conditions de déblocage, effets), chacun lié à l'une des principales fonctionnalités du jeu, a également été en grande partie de ma responsabilité, sur des spécifications souvent esquissées avant mon arrivée. J'ai aussi encadré un GD junior sur ce projet qui a contribué de manière significative ; il a par exemple géré la fonctionnalité de l'arbre technologique dans son intégralité.",
    "Pour TDF 2021, les ressources étaient limitées : un tiers de mon temps et environ un homme-mois de développement. J'ai choisi de concentrer tous les efforts sur la fonctionnalité live ops : reconstituer les vraies étapes de la course sur un calendrier proche de l'officiel. Cela a impliqué un travail important de collecte et d'implémentation pour chaque étape : identification des sources officielles, récupération et tracé des cartes de parcours pour générer le chemin en jeu, saisie des données dans un tableur (distance totale, ascensions avec catégorie et kilomètre, zones de sprint), et sélection d'une illustration libre de droits. J'ai géré l'intégralité du live ops tout au long de la saison. Le résultat financier a couvert les coûts de licence et de personnel, sans générer de marge significative.",
];

const mggMobileDescFr = [
    "Mutants : Genetic Gladiators est un jeu de combat et d'élevage de créatures, construit sur le moteur city-builder de Kobojo (précédemment utilisé pour Atlantis Fantasy) et sur un brieffing initial qui était : s'inspirer de Dragon City, mais le rendre plus midcore, en remplaçant les éléments classiques par des types de créatures. La majeure partie de l'équipe d'Atlantis Fantasy a rejoint MGG, et j'ai été impliqué dès la phase de concept. Les six types finalement retenus étaient : robot, nécro, guerrier, zoo, magie et alien, permettant des combinaisons telles que robot-nécro ou alien-guerrier.",
    "Ma première contribution structurelle a été d'identifier et de traiter ce que je considérais comme le principal point faible de Dragon City : ses boucles d'élevage et de combat sont déconnectées, ce qui relègue le combat au rang de fonctionnalité secondaire et tire le public vers un jeu casual. J'ai convaincu l'équipe que c'était bien le problème, et que ma solution était la bonne : relier les deux boucles via une mécanique originale, la mutostérone, une ressource liée à chaque créature qui augmente avec le combat et diminue après chaque union. Les créatures ne peuvent pas se reproduire sans avoir suffisamment combattu au préalable.",
    "Une fois le concept validé, j'ai pris en charge le game design complet : une formule de balancing pour les mutants (construite from scratch, calculant automatiquement les points de vie et la valeur d'attaque à partir du seul paramètre de vitesse), l'équilibrage global des ressources (d'élevage et d'expérience, de coût et de productivité des terrains). J'ai également conçu et level-designé l'intégralité du PvE initial (y compris les coûts en énergie et les récompenses en ressources) : 60 combats répartis sur 6 gènes, chaque combat comportant une à deux vagues d'un à trois mutants. Pour générer les scripts XML nécessaires à l'implémentation sans mobiliser les développeurs, j'ai construit from scratch une matrice Excel qui produisait le script complet de tous les combats à partir de données de base, ne nécessitant qu'un nettoyage minimal dans un éditeur de texte.",
    "Le jeu a été lancé avec 72 créatures initiales (six gènes, combinés deux à deux, une rare et une commune par combinaison). J'ai level-designé toutes les créatures : statistiques, gènes, positionnement dans l'équilibre global. Le concept narratif de chaque créature était le fruit d'un brainstorming collectif, auquel j'ai contribué pour environ un tiers à la moitié des idées, comme les Malinours pour la combinaison zoo/nécro, une version zombie des Bisounours. J'ai également produit l'ensemble des quêtes et succès, y compris leur implémentation dans l'outil fourni par les développeurs, une part significative des dialogues associés, et toute la documentation du jeu.",
    "Mutants : Genetic Gladiators (Mobile) est le portage mobile de ce jeu. Les deux versions ont d'abord été développées séquentiellement (Facebook en premier), puis en parallèle une fois que la version mobile avait rattrapé son retard en termes de fonctionnalités. En pratique, il s'agissait d'un seul jeu : mêmes créatures, mêmes valeurs de balancing, même PvE, mêmes événements en même temps sur les deux plateformes. Peu après le lancement mobile, chaque plateforme générait des revenus comparables.",
    "Le principal travail spécifique au mobile a été une refonte complète de l'interface utilisateur pour téléphones et tablettes, prise en charge par un GD mobile dédié.",
    "Le live ops suivait un rythme d'événements régulier : quêtes événementielles bimensuelles, sorties régulières de nouveaux mutants (certains accessibles via la reproduction, d'autres premium), et améliorations continues du jeu : FTUE, nouvelles fonctionnalités secondaires, rebalancing. Le jeu a atteint 250 000 DAUs et 1,5 million de MAUs, et est toujours en ligne plus de dix ans après son lancement.",
];

const mggFbDescFr = [
    "Mutants : Genetic Gladiators est un jeu de combat et d'élevage de créatures, construit sur le moteur city-builder de Kobojo (précédemment utilisé pour Atlantis Fantasy) et sur un brieffing initial qui était : s'inspirer de Dragon City, mais le rendre plus midcore, en remplaçant les éléments classiques par des types de créatures. La majeure partie de l'équipe d'Atlantis Fantasy a rejoint MGG, et j'ai été impliqué dès la phase de concept. Les six types finalement retenus étaient : robot, nécro, guerrier, zoo, magie et alien, permettant des combinaisons telles que robot-nécro ou alien-guerrier.",
    "Ma première contribution structurelle a été d'identifier et de traiter ce que je considérais comme le principal point faible de Dragon City : ses boucles d'élevage et de combat sont déconnectées, ce qui relègue le combat au rang de fonctionnalité secondaire et tire le public vers un jeu casual. J'ai convaincu l'équipe que c'était bien le problème, et que ma solution était la bonne : relier les deux boucles via une mécanique originale, la mutostérone, une ressource liée à chaque créature qui augmente avec le combat et diminue après chaque union. Les créatures ne peuvent pas se reproduire sans avoir suffisamment combattu au préalable.",
    "Une fois le concept validé, j'ai pris en charge le game design complet : une formule de balancing pour les mutants (construite from scratch, calculant automatiquement les points de vie et la valeur d'attaque à partir du seul paramètre de vitesse), l'équilibrage global des ressources (d'élevage et d'expérience, de coût et de productivité des terrains). J'ai également conçu et level-designé l'intégralité du PvE initial (y compris les coûts en énergie et les récompenses en ressources) : 60 combats répartis sur 6 gènes, chaque combat comportant une à deux vagues d'un à trois mutants. Pour générer les scripts XML nécessaires à l'implémentation sans mobiliser les développeurs, j'ai construit from scratch une matrice Excel qui produisait le script complet de tous les combats à partir de données de base, ne nécessitant qu'un nettoyage minimal dans un éditeur de texte.",
    "Le jeu a été lancé avec 72 créatures initiales (six gènes, combinés deux à deux, une rare et une commune par combinaison). J'ai level-designé toutes les créatures : statistiques, gènes, positionnement dans l'équilibre global. Le concept narratif de chaque créature était le fruit d'un brainstorming collectif, auquel j'ai contribué pour environ un tiers à la moitié des idées, comme les Malinours pour la combinaison zoo/nécro, une version zombie des Bisounours. J'ai également produit l'ensemble des quêtes et succès, y compris leur implémentation dans l'outil fourni par les développeurs, une part significative des dialogues associés, et toute la documentation du jeu.",
    "Le live ops suivait un rythme d'événements régulier : quêtes événementielles bimensuelles, sorties régulières de nouveaux mutants (certains accessibles via la reproduction, d'autres premium), et améliorations continues du jeu : FTUE, nouvelles fonctionnalités secondaires, rebalancing. Le jeu a atteint 250 000 DAUs et 1,5 million de MAUs, et est toujours en ligne plus de dix ans après son lancement.",
];

const atlantisDescFr = [
    "Atlantis Fantasy était un city-builder Facebook entièrement fonctionnel lorsque j'ai rejoint le projet. J'étais le seul GD, et mon travail consistait principalement à faire du live ops, ainsi que quelques améliorations : nouvelles fonctionnalités secondaires, refonte de la FTUE.",
    "Le rythme principal était d'un événement toutes les deux semaines, le plus souvent lié au calendrier (Saint-Valentin, Jeux Olympiques, Pâques, Noël) : définir un thème (\"La Saint-Valentin\" devenait \"Le retour de Cupidon\"), concevoir une série d'une dizaine de quêtes événementielles avec dialogues, des quêtes qui ne devaient pas dépendre (ou très peu) de la progression du joueur dans l'histoire principale. Chaque événement s'articulait autour d'un pack d'objets créé par l'équipe artistique. Les quêtes suivaient une courbe de difficulté progressive : ressources de bas niveau accessibles à tous en début de série, investissement croissant en temps ou en Hard Currency pour les quêtes de milieu de série, objets premium en fin de série.",
    "J'ai également conçu et implémenté les quêtes et dialogues de la Saison 2 de l'histoire principale, basée sur des intrigues politiques et des histoires d'amour entre dieux.",
];

const tsDescFr = [
    "Totally Spies! Fashion Agent est un jeu Facebook free-to-play développé sous la licence Totally Spies!, pour lequel j'assure à la fois le rôle de lead GD et de responsable licence. Ce double rôle signifie guider l'équipe dans le respect de l'univers, tout en défendant nos choix créatifs auprès du licencié, Marathon. Je n'ai jamais essuyé de refus, en m'appuyant sur une compréhension approfondie des valeurs et des codes de la licence.",
    "Le jeu se divise en deux univers distincts reflétant la double vie des personnages : mode et espionnage. Le côté mode se subdivise lui-même en deux : un module de personnalisation et de mode en 2D, et un jeu de décoration intérieure isométrique en 3D. Le côté espionnage est également en 3D iso ; c'est un jeu d'aventure-puzzle semi-linéaire dans lequel le joueur progresse en dépensant des points d'énergie pour surmonter des obstacles, combattre des ennemis et résoudre des puzzles basés sur la découverte de la bonne séquence d'actions, d'ouvertures de coffres et d'utilisation de clés. Ce système de gameplay, que j'ai conçu from scratch en m'inspirant de la mécanique de défrichage des terres de Farmville et en l'enrichissant d'une dimension puzzle et d'une progression spatiale, a été copié dans son intégralité peu après notre lancement par Adventure World de Zynga. Un motif de fierté, et une mauvaise nouvelle commerciale : David survit rarement à l'assaut de Goliath.",
    "En tant que seul GD du projet, j'ai pris en charge tout le game design : définition des mécaniques, création des items de level design, implémentation des items pour un level design complet du jeu, équilibrage de l'énergie et des currencies (Soft et Hard), et gestion de la progression du joueur (certaines zones nécessitant un niveau minimum pour être débloquées). Sans Data Analyst sur le projet, j'ai également géré une partie de l'analyse des données en Excel, principalement axée sur les comportements d'achat et de rétention.",
];

const blastDescFr = [
    "Blast Raiders est un jeu de puzzle mobile avec un core gameplay de type match-2 dans la veine de Toon Blast. Une partie du projet avait déjà été développée avant mon arrivée. Le jeu a traversé plusieurs pivots méta significatifs sur deux ans, et à chaque nouvelle direction fixée par le Project Owner, j'ai pris en charge l'intégralité du game design : documentation des fonctionnalités, nouveaux blocs de construction pour le level design, wireframes détaillés, et conception et implémentation complètes de l'économie (projections, balancing, valeurs implémentées via tableur).",
    "Le premier pivot visait à fusionner Toon Blast et Coin Master : un core gameplay basé sur des niveaux combiné à des mécaniques d'attaque et de raid permettant aux joueurs de détruire le village d'un autre joueur. La méta s'articulait autour de la construction de villages isométriques en 3D, financée par une Soft Currency fluide liée à la performance dans les niveaux et pouvant être volée par les adversaires.",
    "Le deuxième pivot a orienté le jeu vers une méta de type Royal Match, avec une construction basée sur les étoiles (1 niveau complété = 1 étoile). J'ai réalisé un rétro-game-design approfondi des fonctionnalités et de l'économie de Royal Match, incluant la recréation de ses événements adaptés à notre propre économie, et j'ai géré le rebalancing complet qu'impliquait ce pivot. La contrainte était de préserver une forme de raid : j'ai conçu une adaptation permettant aux joueurs de voler des boosters gratuits, compatible avec la nouvelle méta sans en perturber l'équilibre.",
    "J'ai conçu et implémenté 450 niveaux, ainsi qu'une matrice d'obstacles : en amont du level design, elle définissait précisément quels obstacles apparaissaient dans quels niveaux, planifiait les déblocages, calculait les distributions et vérifiait qu'elles correspondaient à l'intention initiale, elle-même formalisée dans une feuille distincte définissant le poids et la fréquence attendue de chaque obstacle sur les 450 premiers niveaux.",
    "J'ai également travaillé sur plusieurs versions de FTUE, chaque itération éclairée par une analyse des données étape par étape : churn à chaque étape du tutoriel, hypothèses sur les causes, et mise en œuvre des solutions. J'ai également collaboré avec les artistes sur les thèmes visuels des événements et des obstacles : sources de référence, validation des moodboards.",
    "Le jeu est resté en soft launch tout au long du projet, se rapprochant à chaque nouvelle version des objectifs de monétisation et de rétention à J7 qui auraient donné le feu vert à un lancement global, sans jamais les atteindre.",
];

const tennisDescFr = [
    "Tennis Manager Mobile est le premier jeu de management de tennis sur mobile, développé sous la licence Mouratoglou, du nom du coach de Serena Williams et propriétaire d'une académie de tennis. Le cahier des charges initial fixait deux contraintes fortes : entraîner un seul joueur à la fois, et gérer un campus symbolisant l'Académie Mouratoglou.",
    "Pour ancrer le jeu dans la réalité du tennis professionnel, j'ai intégré le règlement complet du tennis mais aussi l'intégralité du règlement ATP (calcul des points, classements annuels, règles de tirage au sort des tournois basées sur les classements des joueurs inscrits, obligations de participation pour les joueurs les mieux classés, etc.) ; toutes les compétitions du jeu existaient dans la réalité, avec le bon type de surface et un calendrier cohérent. J'ai également eu deux échanges directs avec Patrick Mouratoglou pour comprendre les stratégies et priorités d'un vrai coach de haut niveau, que j'ai intégrées dans les mécaniques du jeu.",
    "Le jeu s'inspire des jeux de management de football : entraînement, progression des stats, sélection des tournois, et matchs en grande partie automatisés. Le joueur peut cependant définir sa stratégie en ajustant des paramètres sur un spectre offensif/défensif, et intervenir pendant le match pour modifier ces paramètres (avec des pénalités) afin de s'adapter à la situation.",
    "J'ai pris en charge tout le game design : documentation des fonctionnalités, balancing, économie initiale. Lorsque des imperfections du moteur de simulation ont été identifiées, nos approches ont divergé : j'ai plaidé pour corriger le moteur lui-même, tandis que le directeur du studio a opté pour des corrections en surcouche, qu'il a conçues et implémentées lui-même.",
    "Le jeu a eu un soft-launch mais n'a pas trouvé son public. J'ai quitté le projet après deux ans, avant son lancement global, qui s'est produit plus tard avec des fonctionnalités supplémentaires.",
];

const rivalsDescFr = [
    "Urban Rivals Squad RPG est une adaptation de la licence Urban Rivals (un jeu de cartes à collectionner) en Squad RPG au tour par tour dans la veine de Summoners War : une équipe de combattants, chacun avec une attaque de base et deux capacités spéciales avec des temps de recharge, ciblant des ennemis ou des alliés selon leur nature.",
    "Le twist central, que j'ai conçu, est le système de synergies : lorsqu'un membre d'un clan attaque, les autres membres du même clan présents dans l'équipe ont une chance d'effectuer automatiquement une attaque gratuite de moindre puissance. Ces synergies peuvent également appliquer des effets de statut (brûlure, poison, hâte, bouclier) qui alimentent des combos spécifiques au clan, comme \"exploiter la brûlure\", qui amplifie les dégâts sur des cibles déjà en feu. Les combos ont émergé d'un mélange de références à la culture du jeu vidéo, d'adaptation des capacités des combattants du jeu de cartes original, et d'éléments narratifs de la licence : un clan orienté feu, par exemple, développe naturellement des synergies autour de la brûlure.",
    "Bien que je n'aie pas été le responsable licence, j'ai puisé dans mon expérience de gestion de licence d'autres projets pour intégrer autant d'éléments du lore d'Urban Rivals que possible dans le gameplay.",
    "J'ai géré l'intégralité du game design sur ce projet pendant un peu plus d'un an. Le jeu a atteint l'alpha, a cherché un éditeur sans succès, puis a été abandonné.",
];

// ─── Export ────────────────────────────────────────────────────────────────

export const portfolio: GDSection[] = [
    {
        section: { en: "Released Mobile Games", fr: "Jeux Mobile Publiés" },
        toParam: "mobile",
        desc: {
            en: "The mobile free-to-play games I worked on which were released",
            fr: "Les jeux mobile free-to-play sur lesquels j'ai travaillé et qui ont été publiés.",
        },
        projects: [
            {
                name: "Super Brawl Universe",
                toParam: "sbu",
                img: projectSbu,
                alt: "Super Brawl Universe loading page",
                link: "https://www.youtube.com/embed/5DqP_E5xtQI?si=aC3Hr4A6nuQds22A",
                projectType: {
                    en: "Mobile Game - Production",
                    fr: "Jeu Mobile - Production",
                },
                role: { en: "Lead Game Designer", fr: "Lead Game Designer" },
                place: {
                    en: "Playsoft - Poland - Remote",
                    fr: "Playsoft - Pologne - Distanciel",
                },
                starting: "2020",
                desc: { en: sbuDesc, fr: sbuDescFr },
            },
            {
                name: "Tour de France 2020 & 2021",
                toParam: "tdf",
                img: projectTdf,
                desktopImg: projectTdfDesktop,
                alt: "Tour de France advertisement sample",
                link: "https://www.youtube.com/embed/6mb5lzdHihM?si=ufP1O5GeeL9p3fg8",
                projectType: {
                    en: "Mobile Game - Production & Live Ops",
                    fr: "Jeu Mobile - Production & Live Ops",
                },
                role: { en: "Lead Game Designer", fr: "Lead Game Designer" },
                place: {
                    en: "Playsoft - Poland - Remote",
                    fr: "Playsoft - Pologne - Distanciel",
                },
                starting: "2020",
                desc: { en: tdfDesc, fr: tdfDescFr },
            },
            {
                name: "Mutants: Genetic Gladiators",
                toParam: "mgg",
                img: projectMgg,
                alt: "Mutant Genetic Gladiators advertisement sample",
                link: "https://www.youtube.com/embed/gpGOVU2-JqM?si=FoQXMB9Bssi_HGLw",
                projectType: {
                    en: "Mobile Game - Concept to Live Ops",
                    fr: "Jeu Mobile - Concept aux Live Ops",
                },
                role: {
                    en: "Original Game Designer",
                    fr: "Game Designer d'origine",
                },
                place: { en: "Kobojo - France", fr: "Kobojo - France" },
                starting: "2013",
                desc: { en: mggMobileDesc, fr: mggMobileDescFr },
            },
        ],
    },
    {
        section: { en: "Facebook Social Games", fr: "Jeux Sociaux Facebook" },
        toParam: "fb",
        desc: {
            en: "The social games I worked on as Main Game Designer for the Facebook platform.",
            fr: "Les jeux sociaux sur lesquels j'ai officié comme Game Designer principal pour la plateforme Facebook.",
        },
        projects: [
            {
                name: "Mutants: Genetic Gladiators",
                toParam: "mgg",
                img: projectMgg,
                alt: "Mutant Genetic Gladiators advertisement sample",
                link: "https://www.youtube.com/embed/gpGOVU2-JqM?si=FoQXMB9Bssi_HGLw",
                projectType: {
                    en: "Facebook F2P Game - Concept to Live Ops",
                    fr: "Jeu Facebook F2P - Concept à Live Ops",
                },
                role: {
                    en: "Main Game Designer",
                    fr: "Game Designer principal",
                },
                place: { en: "Kobojo - France", fr: "Kobojo - France" },
                starting: "2013",
                desc: { en: mggFbDesc, fr: mggFbDescFr },
            },
            {
                name: "Atlantis Fantasy (city builder)",
                shorterName: "Atlantis Fantasy",
                toParam: "atlantis",
                img: projectAtlantis,
                desktopImg: projectAtlantisDesktop,
                alt: "Atlantis Fantasy city builder",
                link: "https://www.youtube.com/embed/jecQdYcS-sY?si=MkajL9mFCh8mvhDT",
                projectType: {
                    en: "Facebook F2P Game - Live Ops",
                    fr: "Jeu Facebook F2P - Live Ops",
                },
                role: {
                    en: "Live Ops Game Designer",
                    fr: "Game Designer Live Ops",
                },
                place: { en: "Kobojo - France", fr: "Kobojo - France" },
                starting: "2012",
                desc: { en: atlantisDesc, fr: atlantisDescFr },
            },
            {
                name: "Totally Spies! Fashion Agent",
                toParam: "ts",
                img: projectTs,
                alt: "Totally Spies! Fashion Agents banner",
                link: "https://www.youtube.com/embed/WX38ov2i6nw?si=3oY2LgraBq0Ob2Xr",
                projectType: {
                    en: "Facebook F2P Game - Concept to launch",
                    fr: "Jeu Facebook F2P - Concept à Lancement",
                },
                role: {
                    en: "Main Game Designer / Licence Manager",
                    fr: "Game Designer principal / Responsable Licence",
                },
                place: {
                    en: "OUAT Entertainment - France",
                    fr: "OUAT Entertainment - France",
                },
                starting: "2011",
                desc: { en: tsDesc, fr: tsDescFr },
            },
        ],
    },
    {
        section: {
            en: "Soft-launched or unreleased Mobile Games",
            fr: "Jeux mobile en soft-launch ou non publiés",
        },
        toParam: "unreleased",
        desc: {
            en: "The mobile free-to-play games I worked on which were either only soft-launched or globally launched long after I left the company",
            fr: "Les jeux mobile free-to-play sur lesquels j'ai travaillé qui n'ont pas dépassé le soft-launch, ou seulement après mon départ.",
        },
        projects: [
            {
                name: "Blast Raiders (Blast Explorers)",
                shorterName: "Blast Raiders",
                toParam: "blast",
                img: projectBlast,
                desktopImg: projectBlastDesktop,
                alt: "Blast Raiders Google Play image",
                link: "https://www.youtube.com/embed/X7mzMiW8zDM?si=cN_CBptNN9GcqSBW",
                projectType: {
                    en: "Mobile Game - Production (soft-launch)",
                    fr: "Jeu Mobile - Production (soft-launch)",
                },
                role: {
                    en: "Main Game Designer",
                    fr: "Game Designer principal",
                },
                place: {
                    en: "Product Madness - Poland - Remote",
                    fr: "Product Madness - Pologne - Distanciel",
                },
                starting: "2022",
                desc: { en: blastDesc, fr: blastDescFr },
            },
            {
                name: "Tennis Manager Mobile",
                toParam: "tennis",
                img: projectTennis,
                alt: "Tennis Manager loading page",
                link: "https://www.youtube.com/embed/h4tO2lms_Ck?si=zgv0uTyu0NsDoMNJ",
                projectType: {
                    en: "Mobile Game - Preprod to Production (soft-launch)",
                    fr: "Jeu Mobile - Préprod à Production (soft-launch)",
                },
                role: { en: "Lead Game Designer", fr: "Lead Game Designer" },
                place: { en: "Rebound CG - France", fr: "Rebound CG - France" },
                starting: "2017",
                desc: { en: tennisDesc, fr: tennisDescFr },
            },
            {
                name: "Urban Rivals Squad RPG",
                toParam: "rivals",
                img: projectRivals,
                alt: "Some Urban Rivals characters",
                link: "",
                projectType: {
                    en: "Mobile Game - Concept to Alpha",
                    fr: "Jeu Mobile - Concept à Alpha",
                },
                role: {
                    en: "Main Game Designer",
                    fr: "Game Designer principal",
                },
                place: {
                    en: "Boostr/Acute Games - France",
                    fr: "Boostr/Acute Games - France",
                },
                starting: "2015",
                desc: { en: rivalsDesc, fr: rivalsDescFr },
            },
        ],
    },
];
