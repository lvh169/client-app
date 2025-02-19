import Image from "next/image"
import styles from "./about.module.css"
const about = () => {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitile}>About Agency</h2>
                <h1 className={styles.title}>
                    We create digital ideas that are bigger, bolder, braver and better</h1>
                <p className={styles.descrtiption}>We believe in good ideas flexibility and precission. We're world's. Our Sepcial Team best consulting and finance solution provider</p>
        
        <div className={styles.boxes}>
            <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Year of experience</p>
            </div>
            <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Year of experience</p>
            </div>
            <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Year of experience</p>
            </div>
        </div>
        </div>
        <div className={styles.imgContainer}>
            <Image 
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
            />
        </div>
        </div>
    )
}
export default about