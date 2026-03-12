import styles from "./PdfComponent.module.css"

interface PdfComponentProps {
	pdfTitle: string;
		pdfDesc: string[];
    pdfLink: string;
    pdfHeight: number;

}

function PdfComponent( { pdfTitle, pdfDesc, pdfLink, pdfHeight }: PdfComponentProps ) {

	return (<>
	 <h3 className={styles.pdfTitle}>{pdfTitle}</h3>
	 {pdfDesc.map((item, index) => (
                               (item.startsWith("http")?<a className={styles.anchor} href={item} target="_blank" key={index}>{item}</a> :<p key={index}>{item}</p>)
                            ))}
	<iframe
	title={pdfTitle}
	src={pdfLink}
	loading="lazy"
	style={{height:pdfHeight}}
	className={styles.pdfContainer}
	></iframe>
	</>)
}

export default PdfComponent