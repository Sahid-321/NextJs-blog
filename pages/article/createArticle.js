import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function createArticle() {
    const [postData, setPostData] = useState({
        name: "",
        email: "",
        title: "",
        details: ""
    })
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        const dataName = window.localStorage.getItem('userName');
        const dataEmail = window.localStorage.getItem('userEmail');
        setName(dataName)
        setEmail(dataEmail)

        setPostData({
            name: name,
            email: email,
            title: title,
            details: details
           })
     
    }, [ title, details])

    const handlePost = () => {
        
   
axios.post("/api/articles/createArticle", postData)
.then((res)=>alert(res.data.msg))
.catch((err)=>console.log(err))


    }

    return (
        <div className=''>
            <input onChange={(e)=>setTitle(e.target.value)} placeholder='Title' /> <br></br>
            <input onChange={(e)=>setDetails(e.target.value)} placeholder='Post details' /> <br></br>
            <button onClick={handlePost}>post</button>
        </div>
    )
}
