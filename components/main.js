import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useEffect } from 'react';
export default function main() {
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
