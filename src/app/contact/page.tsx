"use client"
import styles from "./contact.module.css"
import Image from "next/image"

const contact = () => {
    console.log("it work here!")
        return(
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src="/contact.png" alt="" fill className={styles.img}/>
                </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                        <input type="text" placeholder='Name and Surname'/>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='PhoneNumber'/>
                        <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Message"
                        ></textarea>    
                        <button>Send</button>  
                    </form>
                </div>
            </div>
        )
    }

    export default contact