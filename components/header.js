
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function header({ setSearchTerm }) {
    const [name, getName] = useState('')
    useEffect(() => {
        const data = window.localStorage.getItem('userName');
        getName(data)
    }, [])

    return (
        <header className="bg-gray-100 flex gap-20">
            <div>
                <input type="text" placeholder="Search..." className="border" onChange={(e) => setSearchTerm(e.target.value)} />

            </div>
            {name ? <Link href='./article/createArticle'>Create Article</Link> : <p></p>}
            {name ? <h2>{name}</h2> : <Link href='./auth'>Login/Signup</Link>}
        </header>
    )
}