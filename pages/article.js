import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      const res = await fetch(`/api/articles/${id}`);
      const articleData = await res.json();
      setArticle(articleData);
    }

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
