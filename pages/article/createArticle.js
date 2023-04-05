import axios from 'axios'
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react'
export default function CreateArticle() {

    const router = useRouter();
    const [postData, setPostData] = useState({
        name: "",
        email: "",
        title: "",
        details: "",
        role: ""
    })
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  //  const [role, setRole] = useState('')
    useEffect(() => {
        const dataName = window.localStorage.getItem('userName');
        const dataEmail = window.localStorage.getItem('userEmail');
        const dataRole = window.localStorage.getItem('userRole');
        setName(dataName)
        setEmail(dataEmail)
       // setRole(dataRole)

        setPostData({
            name: name,
            email: email,
            title: title,
            details: details,
            role:"super-admin"
           })
     
    }, [ title, details])
//console.log(postData, "post data");
    const handlePost = async() => {
        
   //console.log(postData, "data");
await axios.post("/api/articles/createArticle", postData)
.then((res)=>{
    alert(res.data.msg)
     router.push('/');})
.catch((err)=>console.log(err))


    }

    return (
        <div className='flex flex-col'>
        <input
          className='px-4 py-2 rounded-md border border-gray-300 mb-2'
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <input
          className='px-4 py-2 rounded-md border border-gray-300 mb-2'
          onChange={(e) => setDetails(e.target.value)}
          placeholder='Post details'
        />
        <button
          className='px-4 py-2 rounded-md bg-blue-500 text-white font-medium'
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    )
}
