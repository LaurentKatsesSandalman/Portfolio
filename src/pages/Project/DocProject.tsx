import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styles from "./Project.module.css";
import arrowIcon from "../../assets/icons/arrow.png";
import type { DocProject, DocSection } from "../../interfaces/allInterfaces";
import { docs } from "../../data/docProjects";
import PdfComponent from "../../components/PdfComponent/PdfComponent";

function DocProjectPage() {
    const { section } = useParams();
    const { project } = useParams();

    const currentSection: DocSection | undefined = docs.find(
        (item) => item.toParam === section,
    );
    const currentProject: DocProject | undefined =
        currentSection?.projects.find((item) => item.toParam === project);

    const location = useLocation();
    const initialPage = location.state?.from;

    if (!currentSection) {
        return <p>Section not found</p>;
    }
    if (!currentProject) {
        return <p>Project not found</p>;
    }

    return (
        <>
            <Link to={initialPage} className={styles.arrow}>
                <img
                    className={styles.arrowimg}
                    alt="Picto flèche retour"
                    src={arrowIcon}
                />
                {section}
            </Link>
            <div className={styles.main}>
                <h2 className={styles.h2}>{currentProject.name}</h2>
                {currentProject.desc.map((item, index) =>
                    item.startsWith("http") ? (
                        <a
                            className={styles.anchor}
                            href={item}
                            target="_blank"
                            key={index}
                        >
                            {item}
                        </a>
                    ) : (
                        <p key={index}>{item}</p>
                    ),
                )}
                {currentProject.pdf.map((item, index) => (
                    <PdfComponent
                        key={index}
                        pdfTitle={item.pdfTitle}
                        pdfDesc={item.pdfDesc}
                        pdfLink={item.pdfLink}
                        pdfName={item.pdfName}
                        pdfHeight={item.pdfHeight}
                    />
                ))}
            </div>
        </>
    );
}

export default DocProjectPage;
