import styles from "./singlepPost.module.css"
import Image from "next/image"
import PostUser from './../../../components/postUser/postUser';
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getData = async(slug) =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//     if (!res.ok){
//         throw new Error("Something went wrong")
//     }
//     return res.json()
// }

const singlepost = async ({params}) =>{
    const {slug} = params;
    const post= await getPost(slug) 
        return(
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image 
                        src="https://images.pexels.com/photos/24879621/pexels-photo-24879621/free-photo-of-thanh-ph-k-ngh-khach-s-n-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
                        alt=""
                        fill 
                        className={styles.img}
                    />
                </div>
                    <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post?.title}</h1>
                    <div className={styles.detail}>
                        <Image 
                            className={styles.avatar} 
                            src="https://images.pexels.com/photos/24879621/pexels-photo-24879621/free-photo-of-thanh-ph-k-ngh-khach-s-n-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt=""
                            width={50}
                            height={50}
                        />
                        {post && (
                            <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId}/>
                        </Suspense>
                        )}
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published:</span>
                    <span className={styles.detailValue}> 01.01.1990</span>
                </div>
                </div>
                <div className={styles.content}>{post?.body}
                </div>
            </div>
        </div>
        )
    }
    export default singlepost