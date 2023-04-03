import React, { useState } from 'react'
import Link from 'next/link';
export default function main() {

    const handleArticleOpen = (id) => {

    }
    //console.log(articleView);

    const article = [
        {
            id: 1,
            title: "Lorem Ipsum",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            title: "Dolor Sit Amet",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 3,
            title: "Consectetur Adipiscing Elit",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-4 gap-4 bg-green-100 mt-10">

                {article.map(article => (
                    <li key={article.id}>
                        <Link href={`/article/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </div>

        </>
    )
}
