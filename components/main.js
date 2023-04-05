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

      <div className="grid grid-cols-4 gap-4 bg-green-100 mt-10">
        {paginatedArticleData.map((article) => (
          <li key={article._id}>
            <Link href={`/article/${article._id}`}>{article.title}</Link>
          </li>
        ))}
      </div>

      <div className="flex gap-20">
        <button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1}
        >
          previous
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={endIndex >= filteredArticleData.length}
        >
          next
        </button>
      </div>
    </>
  );
}
