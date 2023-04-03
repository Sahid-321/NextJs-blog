import React, { useState } from 'react'


export default function auth() {
    const [checkAuth, setCheckAuth] = useState(true)
    return (
        <div className='mt-20 align-center'>
        { checkAuth ?   <div className='grid'>
                <h2>Login</h2>
                <div>
                    <input placeholder='Enter Email' /><br></br>
                    <input placeholder='Enter Password' /><br></br>
                    <button className='bg-blue-400'>Login</button><br></br>
                </div>
                <p>if you are not registered <span onClick={()=>setCheckAuth(false)} className='bg-blue-400'>Register</span></p>
            </div>:

            <div>
                <h2>Signup</h2>
                <div>
                    <input placeholder='Enter Your Name' /><br></br>
                    <input placeholder='Enter Email' /><br></br>
                    <input placeholder='Enter Password' /><br></br>
                    <button className='bg-blue-400'>Signup</button><br></br>
                    <p>if already has account <span onClick={()=>setCheckAuth(true)} className='bg-blue-400'>Login</span></p>

                </div>
            </div>}
        </div>
    )
}
