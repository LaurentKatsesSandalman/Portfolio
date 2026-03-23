import Sandals from "../../assets/icons/sandale_icon.png"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";
import linkedInIcon from "../../assets/icons/linkedin.png"
import githubIcon from "../../assets/icons/github.png"

function NavBar(){

    return(
        <div className={styles.navbar}>
       <Link to="/" aria-label="Back to home page"> <img className={styles.logo} src={Sandals} alt="Sandales icon"/></Link>
        <div className={styles.h1container}>
		<p className={styles.h1}>Laurent "Sandalman"</p>
		<p className={styles.h2}>Senior GD Mobile-FTP</p>
		<div className={styles.mainFlex}>
			<p className={styles.pRight}>laurent.durup@proton.me</p>
			<div className={styles.rowFlex}>
		                   <a href="https://www.linkedin.com/in/laurent-durup/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="Linkedin icon" className={styles.pictoLink} /></a>
                    <a href="https://www.github.com/LaurentKatsesSandalman" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub icon" className={styles.pictoLink}/></a>
                   
                    
                    <p  className={styles.pRight}>(+33) 6 76 43 48 08</p></div> 
                    
                   </div></div>
        </div>
    )
}

export default NavBar