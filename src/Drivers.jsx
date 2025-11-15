import { useState } from 'react'
import './App.css'
import PIA from './assets/OscarPiastri.png';

function Drivers() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='Title'><h1>Drivers</h1></div>
            <input type='text' placeholder='Look for a driver...'></input>

            <div className='ContenedorCards'>

                <div className='DriverCard' id='McLaren'>
                    <img src={PIA}></img>
                    <div className='DriverInfo'>
                        <div className='DriverName'>
                            <h3>Oscar Piasrti</h3>
                            <div className='DriverTeam'>
                                <p>McLaren</p>
                            </div>
                            <h2>81</h2>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Drivers