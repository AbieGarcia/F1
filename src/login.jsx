import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
import './login.css'

function Login() {


    const navigate = useNavigate();
    const goToRegister = () => {
        navigate('/register');
    };


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const verificarCampos = () => {
        if (user && password) {
            //Verifica que todos los campos estén llenos.
            setMensaje('');
        } else {
            setMensaje('Por favor, completa todos los campos antes de agregar.');
        }
    };

    return (
        <div className='body'>
            {/*Mostrar el mensaje*/}
            {mensaje && <p className='mesaje'>{mensaje}</p>}

            <div className='LoginCard'>
                <h1 className='title-login'> Account Login</h1>
                <div className='inside-card'>
                    <h3 className='subtitle-login'>User: </h3>

                    <input
                        type='text'
                        placeholder='Enter your user...'
                        value={user}
                        onChange={(e) => setUser(e.target.value)} />

                    <h3 className='subtitle-login'>Password: </h3>

                    <input
                        type='password'
                        placeholder='Enter your password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <div className='button-register'>
                        <button onClick={goToRegister}>Register</button>
                        <button onClick={verificarCampos}> Login </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login