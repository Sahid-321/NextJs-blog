

import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
    return (
        <header className="bg-gray-50">
            <div>
                <input type="text" placeholder="Search..." />

            </div>

        </header>
    )
}