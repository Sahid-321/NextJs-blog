import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "./header";
export default function main() {
  const [articleData, setArticleData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`/api/articles/createArticle/?page=${page}&limit=4&search=${searchTerm}`)
      .then((res) => setArticleData(res.data.data))
      .catch((err) => console.log(err));
  }, [page, searchTerm]);

  const filteredArticleData = articleData.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {/* search */}
    <Header setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-4 gap-4 bg-green-100 mt-10">
        {filteredArticleData.map((article) => (
          <li key={article._id}>
            <Link href={`/article/${article._id}`}>{article.title}</Link>
          </li>
        ))}
      </div>

      <div className="flex gap-20">
        <button onClick={() => setPage(page - 1)}>previous</button>
        <button onClick={() => setPage(page + 1)}>next</button>
      </div>

    
    </>
  );
}
