import Main from "../components/main"
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Article from "./article/[id]";
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
      
      <Main/>
      {/* <Article/> */}
    </div>
  );
}

