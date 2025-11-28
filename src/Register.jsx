import { useState } from 'react'
import './App.css'
import './login.css'

function Register() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [mensaje, setMensaje] = useState('');

    const verificarCampos = () => {
        if (user && password && name && team) {
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

            <div className='RegisterCard'>
                <h1 className='title-login'> Account Register</h1>
                <div className='inside-card-register'>
                    <h3 className='subtitle-register'>User: </h3>

                    <input
                        type='text'
                        placeholder='Enter your user...'
                        value={user}
                        onChange={(e) => setUser(e.target.value)} />

                    <h3 className='subtitle-register'>Name: </h3>

                    <input
                        type='text'
                        placeholder='Enter your name...'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <h3 className='subtitle-register'>Favorite team: </h3>

                    <input
                        type='text'
                        placeholder='Enter your favorite team...'
                        value={team}
                        onChange={(e) => setTeam(e.target.value)} />

                    <h3 className='subtitle-register'>Password: </h3>

                    <input
                        type='password'
                        placeholder='Enter your password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div className='button-register'>
                    <button onClick={verificarCampos}> Register </button>
                </div>
            </div>
        </div>
    )
}

export default Register