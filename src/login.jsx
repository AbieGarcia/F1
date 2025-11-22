import { useState } from 'react'
import './App.css'
import './login.css'

function Login() {

    return (
        <div className='body'>
            <div className='LoginCard'>
                <h1 className='title-login'> Account Login</h1>
                <div className='inside-card'>
                    <h3 className='subtitle-login'>User: </h3>
                    <input type='text' placeholder='Enter your user...' />
                    <h3 className='subtitle-login'>Password: </h3>
                    <input type='password' placeholder='Enter your password...' />
                    <div className='button-register'>
                        <button>Register</button>
                        <button> Login </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login