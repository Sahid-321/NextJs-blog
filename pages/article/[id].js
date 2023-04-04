import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [email, setEmail] = useState('')
  const [updatedArticle, setUpdatedArticle] = useState(false);
  //for update
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [updateData, setUpdateData] = useState({
    title: "",
    details: ""
})
//console.log(id, "from article")

  useEffect(() => {
    async function fetchArticle() {
      const res = await fetch(`/api/articles/${id}`);
      const articleData = await res.json();
      setArticle(articleData);
      const dataEmail = window.localStorage.getItem('userEmail');
      setEmail(dataEmail)
    }

    //update data object
    setUpdateData({
      title: title,
      details:details
    })

    fetchArticle();
  }, [id,title, details]);

  const handleEdit = async(id)=>{
  //  console.log(updateData);
   await axios.put(`/api/articles/createArticle/?id=${id}`, updateData)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  const handleDelete = async (id)=>{
   await axios.delete(`/api/articles/createArticle/?id=${id}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  

 
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    {article.email == email ? (
      <div>
        {updatedArticle ? (
        <div className=''>
        <input onChange={(e)=>setTitle(e.target.value)} placeholder='Title' /> <br></br>
        <input onChange={(e)=>setDetails(e.target.value)} placeholder='Post details' /> <br></br>
        <button onClick={()=>handleEdit(article._id)}>Update</button>
    </div>
        ) : (
          <>
            <button onClick={() =>setUpdatedArticle(true)}>Edit</button>
            <button onClick={() => handleDelete(article._id)}>Delete</button>
            <h1>{article.name}</h1>
            <h2>{article.title}</h2>
            <p>{article.details}</p>
          </>
        )}
      </div>
    ) : (
      <div>
        <h2>{article.title}</h2>
        <p>{article.details}</p>
      </div>
    )}
  </div>
  );
}

export default Article;
