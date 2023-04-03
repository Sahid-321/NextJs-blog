import React from 'react'

export default function createArticle() {

   const handlePost = ()=>{
alert("Posted")
    }
  return (
    <div className=''>
        <input placeholder='Title' /> <br></br>
        <input placeholder='Post details' /> <br></br>
       <button onClick={handlePost}>post</button>
    </div>
  )
}
