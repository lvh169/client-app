"use client";
import NavLink from './navLinks/navLink';
import styles from "./links.module.css"
import { useState } from 'react';


    const links=[
    {
        title:"Home",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Blog",
        path:"/blog",
    },
];
const Links = () => {
const [open,setOpen] = useState(false)
const session = true;
const isAdim = true;

return(
    <div className={styles.container}>
    <div className={styles.links}>
    {links.map(link => (
    <NavLink item={link} key={link.title}/>
    ))}
    {session ? (
            <>
            
                {isAdim && <NavLink item={{title:"Admin", path:"/admin"}} /> }
                <button className={styles.logout}> logout</button>
            
            </>
        ):(
            <NavLink item={{title:"Login",path: "/login"}} />
        ) 
    }
    </div>
    <button className={styles.menuButton} onClick={()=> setOpen ((prev)=> !prev)}>Menu</button>
    {
        open && (
        <div className={styles.mobileLinks}> 
        {links.map((link) => (
        <NavLink item={link} key={link.title}/>
        ))}
        </div>
    )}
    </div>
);
};

export default Links;