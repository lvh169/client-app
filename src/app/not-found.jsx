import Link from "next/link"

const Notfound = () => 
    {
        return(
            <div>
            <h2>Not Found</h2>
            <p>sorry, the page u looking is not exist</p>
            <Link href="/">Return Home</Link>
            </div>
        )
    }
    export default Notfound