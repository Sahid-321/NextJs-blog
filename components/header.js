
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function header() {
    const [name, getName] = useState('')
    useEffect(() => {
        const data = window.localStorage.getItem('userName');
        getName(data)
    }, [])

    return (
        <header className="bg-gray-100 flex gap-20">
            <div>
                <input type="text" placeholder="Search..." className="border " />

            </div>
            <Link href='./article/createArticle'>Create Article</Link>
            {name == '' ? <Link href='./auth'>Login/Signup</Link>: <h2>{name}</h2>}
        </header>
    )
}