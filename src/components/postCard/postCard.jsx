import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const postCard =({post}) => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/16820485/pexels-photo-16820485/free-photo-of-th-c-v-t-trai-cay-h-u-c-b-n-d-c.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.1990</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.description}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default postCard