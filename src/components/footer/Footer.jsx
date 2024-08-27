import styles from "./Footer.module.css"
const Footer = () => 
    {
        return(
            <div className={styles.container}>
                <div className={styles.logo}>Sc</div>
                <div className={styles.text}>
                    All right reserved.
                </div>
            </div>
        )
    }
    export default Footer