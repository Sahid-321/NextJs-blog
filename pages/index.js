import Main from "../components/main"
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/hello");
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

