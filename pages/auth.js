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
                    window.localStorage.setItem('userRole', res.data.role);
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
        <div className='mt-20 flex justify-center items-center'>
        {checkAuth ? (
          <div className='grid gap-4'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <div>
              <input
                className='border border-gray-400 rounded-md py-2 px-3 w-full'
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder='Enter Email' type="email"
              /><br />
              <input
                className='border border-gray-400 rounded-md py-2 px-3 w-full mt-4'
                onChange={(e) => setLoginPass(e.target.value)}
                placeholder='Enter Password' 
              /><br />
              <button
                onClick={handleLogin}
                className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600'
              >
                Login
              </button><br />
            </div>
            <p className='text-sm mt-4'>
              if you are not registered{' '}
              <span
                onClick={() => setCheckAuth(false)}
                className='bg-blue-500 text-white rounded-md py-1 px-2 cursor-pointer hover:bg-blue-600'
              >
                Register
              </span>
            </p>
          </div>
        ) : (
          <div>
            <h2 className='text-2xl font-bold mb-4'>Signup</h2>
            <div>
              <input
                className='border border-gray-400 rounded-md py-2 px-3 w-full'
                onChange={(e) => setSignupName(e.target.value)}
                placeholder='Enter Your Name' type='text'
              /><br />
              <input
                className='border border-gray-400 rounded-md py-2 px-3 w-full mt-4'
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder='Enter Email' type='email'
              /><br />
              <input
                className='border border-gray-400 rounded-md py-2 px-3 w-full mt-4'
                onChange={(e) => setSignupPass(e.target.value)}
                placeholder='Enter Password' type='password'
              /><br />
              <button
                className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-600'
                onClick={handleSignup}
              >
                Signup
              </button><br />
              <p className='text-sm mt-4'>
                if already has account{' '}
                <span
                  onClick={() => setCheckAuth(true)}
                  className='bg-blue-500 text-white rounded-md py-1 px-2 cursor-pointer hover:bg-blue-600'
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      
    )
}
