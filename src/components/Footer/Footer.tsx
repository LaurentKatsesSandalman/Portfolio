// import linkedInIcon from "../../assets/icons/linkedin.png"
// import githubIcon from "../../assets/icons/github.png"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <>
            <div className={styles.allblocks}>
                <div className={styles.centerblock}>
                    <p className={styles.pCenter}>Laurent Durup, aka Sandalman</p>
                    <p className={styles.pCenter}>FRANCE</p>
                    <p className={styles.pCenter}>Available for remote work</p>
                </div>
                {/* <div className={styles.rightblock}> */}
                    {/* <div className={styles.picto} ><a href="https://www.linkedin.com/in/laurent-durup/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="Linkedin icon" className={styles.pictoLink} /></a>
                    <a href="https://www.github.com/LaurentKatsesSandalman" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub icon" className={styles.pictoLink}/></a>
                    </div>
                    <div className={styles.mailTel}>
                    <p  className={styles.pRight}>(+33) 6 76 43 48 08</p>
                    <p className={styles.pRight}>laurent.durup@proton.me</p>
                    </div> */}
                {/* </div> */}
            </div>
        </>
    );
}

export default Footer;
