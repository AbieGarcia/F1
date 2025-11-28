import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { supabase } from "./lib/supabaseClient"

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

    const loginUsuario = async (user, password) => {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("user", user)
            .eq("password", password)
            .single(); // esperamos un solo resultado

        if (error || !data) {
            return { success: false, message: "Usuario o contraseña incorrectos" };
        }

        return { success: true, message: "Login exitoso", user: data };
    };


    const verificarCampos = async () => {
        if (user && password) {
            await loginUsuario(); // Esperamos a que termine
        } else {
            setMensaje("Por favor, completa todos los campos");
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