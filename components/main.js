import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useEffect } from 'react';
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
const [articleData, setArticleData] = useState([]);
useEffect(()=>{
    axios.get("/api/articles/createArticle")
    .then((res)=>setArticleData(res.data))
    .catch((err)=>console.log(err))
},[])
 //  console.log(articleData);

    return (
        <>
            <div className="grid grid-cols-4 gap-4 bg-green-100 mt-10">

                {articleData.map(article => (
                    <li key={article._id}>
                        <Link href={`/article/${article._id}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </div>

        </>
    )
}
