import { useState, useEffect } from 'react'
import './App.css'
import './Drivers.css'
import PIA from './assets/OscarPiastri.png';
import VER from './assets/Verstappen.png';
import LEC from './assets/Leclerc.png';
import NOR from './assets/Norris.png';
import TSU from './assets/Tsunoda.png';
import HAM from './assets/Hamilton.png';
import ALO from './assets/Alonso.png';
import STR from './assets/Stroll.png';
import ANT from './assets/Antonelli.png';
import RUS from './assets/Russell.png';
import GAS from './assets/Gasly.png';
import COL from './assets/ColLapinto.png';
import SAI from './assets/Sainz.png';
import ALB from './assets/Albon.png';
import OCO from './assets/Ocon.png';
import BEA from './assets/Bearman.png';
import LAW from './assets/Lawson.png';
import HAD from './assets/Hadjar.png';
import BOR from './assets/Bortoleto.png';
import HUL from './assets/Nico.png';

function Drivers() {
    const [drivers, setDrivers] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedDriver, setSelectedDriver] = useState(null);

    useEffect(() => {
        async function fetchDrivers() {
            setLoading(true);
            setError('');
            try {
                const response = await fetch('https://f1api.dev/api/current/drivers-championship');
                if (!response.ok) throw new Error('No se pudieron obtener los datos');
                const DriversListData = await response.json();

                const DriversDetailsArray = await Promise.all(
                    DriversListData.drivers_championship.map(async (d) => {
                        return {
                            name: d.driver.name,
                            surname: d.driver.surname,
                            team: d.team.teamName,
                            number: d.driver.number,
                            nationality: d.driver.nationality,
                            wins: d.wins,
                            points: d.points,
                            position: d.position,
                        };
                    })
                );

                setDrivers(DriversDetailsArray);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDrivers();
    }, []);

    const filteredDrivers = drivers.filter((driver) => driver.surname.toLowerCase().includes(query.toLowerCase()));

    return (
        <>
            <body>
                <div className='cont1'>
                    <h1 className='title' id='drivers_title'>Drivers</h1>
                    <input type='text' placeholder='Look for a driver...' value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>

                {loading && <p className='loading'>Loading Drivers...</p>}
                {error && <p className='error'> Error: {error}</p>}

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
                    <div className='DriverCard' id='AstonMartin'>
                        <img className='imgDriver' src={ALO}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Fernando</h3>
                                <h3 id='Surname'>Alonso</h3>
                                <p className='DriverTeam' id='teamA'>Aston Martin</p>
                            </div>
                            <h2>14</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Mercedes'>
                        <img className='imgDriver' src={RUS}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>George</h3>
                                <h3 id='Surname'>Russell</h3>
                                <p className='DriverTeam'>Mercedes</p>
                            </div>
                            <h2>63</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Alpine'>
                        <img className='imgDriver' src={GAS}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Pierre</h3>
                                <h3 id='Surname'>Gasly</h3>
                                <p className='DriverTeam'>Alpine</p>
                            </div>
                            <h2>10</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='AstonMartin'>
                        <img className='imgDriver' src={STR}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Lance</h3>
                                <h3 id='Surname'>Stroll</h3>
                                <p className='DriverTeam' id='teamA'>Aston Martin</p>
                            </div>
                            <h2>18</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Mercedes'>
                        <img className='imgDriver' src={ANT}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Kimi</h3>
                                <h3 id='Surname'>Antonelli</h3>
                                <p className='DriverTeam'>Mercedes</p>
                            </div>
                            <h2>12</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Alpine'>
                        <img className='imgDriver' src={COL}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Franco</h3>
                                <h3 id='Surname'>Collapinto</h3>
                                <p className='DriverTeam'>Alpine</p>
                            </div>
                            <h2>43</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='Williams'>
                        <img className='imgDriver' src={ALB}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Alex</h3>
                                <h3 id='Surname'>Albon</h3>
                                <p className='DriverTeam'>Williams</p>
                            </div>
                            <h2>23</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Haas'>
                        <img className='imgDriver' src={OCO}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Esteban</h3>
                                <h3 id='Surname'>Ocon</h3>
                                <p className='DriverTeam'>Haas</p>
                            </div>
                            <h2>31</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='RB'>
                        <img className='imgDriver' src={LAW}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Liam</h3>
                                <h3 id='Surname'>Lawson</h3>
                                <p className='DriverTeam'>RB</p>
                            </div>
                            <h2>30</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='Williams'>
                        <img className='imgDriver' src={SAI}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Carlos</h3>
                                <h3 id='Surname'>Sainz</h3>
                                <p className='DriverTeam'>Williams</p>
                            </div>
                            <h2>55</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Haas'>
                        <img className='imgDriver' src={BEA}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Oliver </h3>
                                <h3 id='Surname'>Bearman</h3>
                                <p className='DriverTeam'>Haas</p>
                            </div>
                            <h2>87</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='RB'>
                        <img className='imgDriver' src={HAD}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Isack</h3>
                                <h3 id='Surname'>Hadjar</h3>
                                <p className='DriverTeam'>RB</p>
                            </div>
                            <h2>6</h2>
                        </div>
                    </div>
                    <div className='DriverCard' id='Sauber'>
                        <img className='imgDriver' src={HUL}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Nico</h3>
                                <h3 id='Surname'>Hülkenberg</h3>
                                <p className='DriverTeam'>Sauber</p>
                            </div>
                            <h2>27</h2>
                        </div>
                    </div>

                    <div className='DriverCard' id='Sauber'>
                        <img className='imgDriver' src={BOR}></img>
                        <div className='DriverInfo'>
                            <div className='DriverName'>
                                <h3>Gabriel</h3>
                                <h3 id='Surname'>Bortoleto</h3>
                                <p className='DriverTeam'>Sauber</p>
                            </div>
                            <h2>5</h2>
                        </div>
                    </div>

                </div>

                {filteredDrivers.length === 0 && !loading && !error && (
                    <p>No se encontraron resultados</p>
                )}

                {/*Modal de detalles*/}
                {selectedDriver && (
                    <div className='modal-overlay' onClick={() => setSelectedDriver(null)}>
                        <div className='modal' onClick={(e) => e.stopPropagation()}>
                            <button className='close-btn' onClick={() => setSelectedDriver(null)}> X </button>

                            <div className='modal-header'>
                                <h1>{selectedDriver.name}</h1>
                                <h1>{selectedDriver.surname}</h1>
                            </div>

                            <div className='sectInfo'>

                                <div className='info1'>
                                    <div className='sectTeam'>
                                        <p>Team: {selectedDriver.team}</p>
                                    </div>
                                    <div className='sectNum'>
                                        <p>Number:</p>
                                        <h3 className='sectDriverNum'>{selectedDriver.number}</h3>
                                    </div>
                                </div>

                                <div className='info2'>
                                    <p>Nationality: {selectedDriver.nationality} </p>
                                    <p>Season wins: {selectedDriver.wins} </p>
                                    <p>Season points: {selectedDriver.points} </p>
                                    <p>Current position: {selectedDriver.position} </p>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </body>

        </>
    )
}

export default Drivers