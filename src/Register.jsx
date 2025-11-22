import { useState } from 'react'
import './App.css'
import './login.css'

function Register() {

    return (
        <div className='body'>
            <div className='RegisterCard'>
                <h1 className='title-login'> Account Register</h1>
                <div className='inside-card-register'>
                    <h3 className='subtitle-register'>User: </h3>
                    <input type='text' placeholder='Enter your user...' />
                    <h3 className='subtitle-register'>Name: </h3>
                    <input type='text' placeholder='Enter your name...' />
                    <h3 className='subtitle-register'>Favorite team: </h3>
                    <input type='text' placeholder='Enter your favorite team...' />
                    <h3 className='subtitle-register'>Password: </h3>
                    <input type='password' placeholder='Enter your password...' />
                </div>
                <div className='button-register'>
                    <button> Register </button>
                </div>
            </div>
        </div>
    )
}

export default Register