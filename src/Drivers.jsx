import { useState } from 'react'
import './App.css'
import './Drivers.css'
import PIA from './assets/OscarPiastri.png';
import VER from './assets/Verstappen.png';
import LEC from './assets/Leclerc.png';
import NOR from './assets/Norris.png';
import TSU from './assets/Tsunoda.png';
import HAM from './assets/Hamilton.png';

function Drivers() {
    const [count, setCount] = useState(0)

    return (
        <>
            <body>
                <div className='cont1'>
                    <h1 className='title' id='drivers_title'>Drivers</h1>
                    <input type='text' placeholder='Look for a driver...' />
                </div>

                <div className='ContenedorCards'>

                    <div className='DriverCard' id='McLaren'>
                        <img className='imgDriver' src={PIA}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Oscar</h3>
                                <h3 id='Surname'>Piastri</h3>
                                <p className='DriverTeam'>McLaren</p>
                            </div>
                            <h2>81</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='RedBull'>
                        <img className='imgDriver' src={VER}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Max</h3>
                                <h3 id='Surname'>Verstappen</h3>
                                <p className='DriverTeam'>Red Bull</p>
                            </div>
                            <h2>1</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Ferrari'>
                        <img className='imgDriver' src={LEC}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Charles</h3>
                                <h3 id='Surname'>Leclerc</h3>
                                <p className='DriverTeam'>Ferrari</p>
                            </div>
                            <h2>16</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='McLaren'>
                        <img className='imgDriver' src={NOR}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Lando</h3>
                                <h3 id='Surname'>Norris</h3>
                                <p className='DriverTeam'>McLaren</p>
                            </div>
                            <h2>4</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='RedBull'>
                        <img className='imgDriver' src={TSU}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Yuki</h3>
                                <h3 id='Surname'>Tsunoda</h3>
                                <p className='DriverTeam'>Red Bull</p>
                            </div>
                            <h2>22</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Ferrari'>
                        <img className='imgDriver' src={HAM}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Lewis</h3>
                                <h3 id='Surname'>Hamilton</h3>
                                <p className='DriverTeam'>Ferrari</p>
                            </div>
                            <h2>44</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='McLaren'>
                        <img className='imgDriver' src={PIA}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Oscar</h3>
                                <h3 id='Surname'>Piastri</h3>
                                <p className='DriverTeam'>McLaren</p>
                            </div>
                            <h2>81</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='RedBull'>
                        <img className='imgDriver' src={VER}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Max</h3>
                                <h3 id='Surname'>Verstappen</h3>
                                <p className='DriverTeam'>Red Bull</p>
                            </div>
                            <h2>1</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Ferrari'>
                        <img className='imgDriver' src={LEC}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Charles</h3>
                                <h3 id='Surname'>Leclerc</h3>
                                <p className='DriverTeam'>Ferrari</p>
                            </div>
                            <h2>16</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='McLaren'>
                        <img className='imgDriver' src={PIA}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Oscar</h3>
                                <h3 id='Surname'>Piastri</h3>
                                <p className='DriverTeam'>McLaren</p>
                            </div>
                            <h2>81</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='RedBull'>
                        <img className='imgDriver' src={VER}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Max</h3>
                                <h3 id='Surname'>Verstappen</h3>
                                <p className='DriverTeam'>Red Bull</p>
                            </div>
                            <h2>1</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Ferrari'>
                        <img className='imgDriver' src={LEC}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Charles</h3>
                                <h3 id='Surname'>Leclerc</h3>
                                <p className='DriverTeam'>Ferrari</p>
                            </div>
                            <h2>16</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='McLaren'>
                        <img className='imgDriver' src={PIA}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Oscar</h3>
                                <h3 id='Surname'>Piastri</h3>
                                <p className='DriverTeam'>McLaren</p>
                            </div>
                            <h2>81</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='RedBull'>
                        <img className='imgDriver' src={VER}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Max</h3>
                                <h3 id='Surname'>Verstappen</h3>
                                <p className='DriverTeam'>Red Bull</p>
                            </div>
                            <h2>1</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Ferrari'>
                        <img className='imgDriver' src={LEC}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Charles</h3>
                                <h3 id='Surname'>Leclerc</h3>
                                <p className='DriverTeam'>Ferrari</p>
                            </div>
                            <h2>16</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='McLaren'>
                        <img className='imgDriver' src={PIA}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Oscar</h3>
                                <h3 id='Surname'>Piastri</h3>
                                <p className='DriverTeam'>McLaren</p>
                            </div>
                            <h2>81</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='RedBull'>
                        <img className='imgDriver' src={VER}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Max</h3>
                                <h3 id='Surname'>Verstappen</h3>
                                <p className='DriverTeam'>Red Bull</p>
                            </div>
                            <h2>1</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='Ferrari'>
                        <img className='imgDriver' src={LEC}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Charles</h3>
                                <h3 id='Surname'>Leclerc</h3>
                                <p className='DriverTeam'>Ferrari</p>
                            </div>
                            <h2>16</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='RedBull'>
                        <img className='imgDriver' src={VER}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Max</h3>
                                <h3 id='Surname'>Verstappen</h3>
                                <p className='DriverTeam'>Red Bull</p>
                            </div>
                            <h2>1</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Ferrari'>
                        <img className='imgDriver' src={LEC}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Charles</h3>
                                <h3 id='Surname'>Leclerc</h3>
                                <p className='DriverTeam'>Ferrari</p>
                            </div>
                            <h2>16</h2>
                        </div>
                    </div>

                </div>
            </body>

        </>
    )
}

export default Drivers