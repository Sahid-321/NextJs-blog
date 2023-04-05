import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [updatedArticle, setUpdatedArticle] = useState(false);
  const [chatData, setChatData] = useState([])
  const [chatTitle, setChatTitle] = useState('')
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
      const dataUser = window.localStorage.getItem('userName');
      const dataEmail = window.localStorage.getItem('userEmail');
      const dataRole = window.localStorage.getItem('userRole');
      setEmail(dataEmail)
      setRole(dataRole)
      setUser(dataUser)
    }

    //update data object
    setUpdateData({
      title: title,
      details: details
    })

    fetchArticle();
    //chat get data
    axios.get(`/api/articles/createChat/?id=${id}`)
      .then((res) => setChatData(res.data))
      .catch((err) => console.log(err))


  }, [id, title, details]);

  //console.log(chatData, "chat data");

  const handleEdit = async (id) => {
    //  console.log(updateData);
    await axios.put(`/api/articles/createArticle/?id=${id}`, updateData)
      .then((res) => {
        alert("Post  updated")
        router.push('/')
      })
      .catch((err) => console.log(err))
  }
  const handleDelete = async (id) => {
    await axios.delete(`/api/articles/createArticle/?id=${id}`)
      .then((res) => {
        alert("Post  updated")
        router.push('/')
      })
      .catch((err) => console.log(err))
  }

  //chat post
  const handleChat = async () => {
    const object = {
      user: user,
      title: chatTitle,
      articleId: id
    }
    console.log(chatTitle, "chatTitile");
  
    try {
      await axios.post(`/api/articles/createChat`, object)
        .then((res) => {
          alert("chat added")
          window.reload()
        })
    } catch (error) {
      console.log(error);
    }
  }


  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {article.email == email || article.role == role ? (
        <div>
          {updatedArticle ? (
            <div className=''>
              <input onChange={(e) => setTitle(e.target.value)} placeholder='Title' /> <br></br>
              <input onChange={(e) => setDetails(e.target.value)} placeholder='Post details' /> <br></br>
              <button onClick={() => handleEdit(article._id)}>Update</button>
            </div>
          ) : (
            <>
              <button onClick={() => setUpdatedArticle(true)}>Edit</button>
              <button onClick={() => handleDelete(article._id)}>Delete</button>
              <h1>{article.name}</h1>
              <h2>{article.title}</h2>
              <p>{article.details}</p>

              <div className='bg-green-300 mt-20'>
                <div>
                  <input onChange={(e) => setChatTitle(e.target.value)} placeholder='enter message' />
                  <button onClick={handleChat}>post</button>
                </div>
                <div className='mt-20'>
                  {
                    chatData.map((elem) => {
                      return (
                        <div key={elem._id}>
                          <h3>{elem.title}</h3>
                        </div>
                      )
                    })
                  }
                </div>
              </div>

            </>
          )}
        </div>
      ) : (
        <div>
          <h2>{article.title}</h2>
          <p>{article.details}</p>

          <div className='bg-green-300 mt-20'>
                <div>
                  <input onChange={(e) => setChatTitle(e.target.value)} placeholder='enter message' />
                  <button onClick={handleChat}>post</button>
                </div>
                <div className='mt-20'>
                  {
                    chatData.map((elem) => {
                      return (
                        <div key={elem._id}>
                          <h3>{elem.title}</h3>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
        </div>

      )}
    </div>
  );
}

export default Article;
