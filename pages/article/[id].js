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
            <input 
              className="border rounded-md p-2 mb-4 w-full" 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder='Title' 
              name={article.title}
            /> 
            <br />
            <textarea 
              className="border rounded-md p-2 mb-4 w-full" 
              onChange={(e) => setDetails(e.target.value)} 
              placeholder='Post details' 
              name={article.details}
            />
            <br />
            <button 
              className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 mr-2" 
              onClick={() => handleEdit(article._id)}
            >
              Update
            </button>
            <button 
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-md py-2 px-4" 
              onClick={() => setUpdatedArticle(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 mr-2" 
              onClick={() => setUpdatedArticle(true)}
            >
              Edit
            </button>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4" 
              onClick={() => handleDelete(article._id)}
            >
              Delete
            </button>
            <p className="text-2xl font-bold mb-4">Author name:  {article.name}</p>
            <h1 className="flex items-end text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-700">{article.details}</p>
  
            <div className='bg-green-300 mt-20 p-4'>
              <div className="flex items-center mb-4">
                <input 
                  className="border rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400 flex-1" 
                  type="text" 
                  onChange={(e) => setChatTitle(e.target.value)} 
                  placeholder="Enter message" 
                />
                <button 
                  className="bg-green-500 hover:bg-green-600 text-white rounded-r-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                  onClick={handleChat}
                >
                  Post
                </button>
              </div>
              <div>
                {chatData.map((elem) => {
                  return (
                    <div key={elem._id} className="mb-2">
                      <h3 className="text-lg font-medium"><span>{elem.user}:</span> {elem.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    ) : (
        <div>
        <h2 className="flex items-end text-4xl font-bold mb-4">{article.title}</h2>
        <p className="text-gray-700">{article.details}</p>
      
        {/* <div className="bg-green-300 mt-20 p-4">
          <div className="flex items-center mb-4">
            <input 
              className="px-2 py-1 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400 flex-1" 
              type="text" 
              onChange={(e) => setChatTitle(e.target.value)} 
              placeholder="Enter message" 
            />
            <button 
              className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={handleChat}
            >
              Post
            </button>
          </div>
          <div>
            {chatData.map((elem) => {
              return (
                <div key={elem._id} className="mb-2">
                  <h3 className="text-lg font-medium"><span>{elem.user}:</span> {elem.title}</h3>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      

      )}
    </div>
  );
}

export default Article;
