import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
export default function auth() {
    const router = useRouter();
    const [checkAuth, setCheckAuth] = useState(true)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')

    const [signupName, setSignupName] = useState('')
    const [signupRole, setSignupRole] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPass, setSignupPass] = useState('')
    

    const handleLogin = async () => {
        let loginObj = {
            email: loginEmail,
            password: loginPass
        }
        axios.post('/api/user/login', loginObj)
            .then((res) => {
                if (res.data.msg == "Login Successfull") {
                    alert("Login Successful")
                    window.localStorage.setItem('userName', res.data.name);
                    window.localStorage.setItem('userEmail', res.data.email);
                    router.push('/');
                }
            })
            .catch((err) => {
                console.log(err)
                alert("wrong credential")
            })
    }
    const handleSignup = ()=>{
        let signupObj = {
            name:signupName,
            email: signupEmail,
            password: signupPass,
            role: "admin"
        }
        axios.post('/api/user/signup', signupObj)
            .then((res) => {
                if (res.data.msg == "Account created successfully") {
                    alert("Signup Successful")
                    setCheckAuth(true)
                }
            })
    }
    return (
        <div className='mt-20 align-center'>
            {checkAuth ? <div className='grid'>
                <h2>Login</h2>
                <div>
                    <input onChange={(e) => setLoginEmail(e.target.value)} placeholder='Enter Email' /><br></br>
                    <input onChange={(e) => setLoginPass(e.target.value)} placeholder='Enter Password' /><br></br>
                    <button onClick={handleLogin} className='bg-blue-400'>Login</button><br></br>
                </div>
                <p>if you are not registered <span onClick={() => setCheckAuth(false)} className='bg-blue-400'>Register</span></p>
            </div> :

                <div>
                    <h2>Signup</h2>
                    <div>
                        <input onChange={(e) => setSignupName(e.target.value)} placeholder='Enter Your Name' /><br></br>
                        <input onChange={(e) => setSignupEmail(e.target.value)} placeholder='Enter Email' /><br></br>
                        <input onChange={(e) => setSignupPass(e.target.value)} placeholder='Enter Password' /><br></br>
                        <button className='bg-blue-400' onClick={handleSignup}>Signup</button><br></br>
                        <p>if already has account <span onClick={() => setCheckAuth(true)} className='bg-blue-400'>Login</span></p>

                    </div>
                </div>}
        </div>
    )
}
