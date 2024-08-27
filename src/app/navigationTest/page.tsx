"use client"
import { Console } from "console"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams  } from "next/navigation"

const NavigationTest =() =>
    {
        const router = useRouter()
        const pathname=usePathname()
        const searchParams = useSearchParams()
        const q=searchParams.get("q")
        const handleClick= () =>
            {
                console.log("click!")
                router.forward()
            }
        return(
            <div>
                <Link href="/" prefetch={false}>Click here</Link>
                <button onClick={handleClick}>Write and Redirect</button>
            </div>
        )
    }
export default NavigationTest