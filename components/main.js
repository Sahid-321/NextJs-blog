import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "./header";

export default function Main() {
    const [articleData, setArticleData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const limit = 4;

    useEffect(() => {
        axios
            .get(`/api/articles/createArticle`)
            .then((res) => setArticleData(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    const filteredArticleData = articleData.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedArticleData = filteredArticleData.slice(startIndex, endIndex);

    return (
        <>
            {/* search */}
            <Header setSearchTerm={setSearchTerm} />

            <div className="">
                {paginatedArticleData.map((article) => (
                    <h1 className="m-10 font-bold" key={article._id}>
                        <Link className="text-3xl h-72 w-82 border-1 text-black-500 hover:text-blue-700 " href={`/article/${article._id}`}>{article.title}</Link>
                    </h1>
                ))}
            </div>

            <div className="flex items-center ">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3"
                    onClick={() => setPage((prevPage) => prevPage - 1)}
                    disabled={page === 1}
                >
                    previous
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 "
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                    disabled={endIndex >= filteredArticleData.length}
                >
                    next
                </button>
            </div>
        </>
    );
}
