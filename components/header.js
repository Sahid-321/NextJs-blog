

import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
    return (
        <header className="bg-gray-100 flex gap-20">
            <div>
                <input type="text" placeholder="Search..." className="border "/>

            </div>
            <Link href='./article/createArticle'>Create Article</Link>
            <Link href='./auth'>Login/Signup</Link>
        </header>
    )
}