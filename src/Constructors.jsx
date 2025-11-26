import { useState, useEffect } from 'react'
import './App.css'
import './Drivers.css'

import ferrari_car from './assets/cars/ferrari_car.png';
import alpine_car from './assets/cars/alpine_car.png';
import aston_car from './assets/cars/am_car.png';
import haas_car from './assets/cars/haas_car.png';
import mclaren_car from './assets/cars/mclaren_car.png';
import mercedes_car from './assets/cars/mercedes_car.png';
import rb_car from './assets/cars/rb_car.png';
import redbull_car from './assets/cars/redbull_car.png';
import sauber_car from './assets/cars/sauber_car.png';
import williams_car from './assets/cars/williams_car.png';

import ferrari from './assets/logos/ferrari_logo.png';
import alpine from './assets/logos/alpine_logo.png';
import aston from './assets/logos/aston_logo.png';
import haas from './assets/logos/haas_logo.png';
import mclaren from './assets/logos/mclaren_logo.png';
import mercedes from './assets/logos/mercedes_logo.png';
import rb from './assets/logos/rb_logo.png';
import redbull from './assets/logos/redbull_logo.png';
import sauber from './assets/logos/sauber_logo.png';
import williams from './assets/logos/williams_logo.png';

function Constructors() {
    const [constructors, setConstructors] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedConstructor, setSelectedConstructor] = useState(null);

    const constructorsAssets = {
        "mclaren": {
            img: mclaren_car,
            team: mclaren,
            d1: "Lando Norris",
            d2: "Oscar Piastri",
            d1Num: "4",
            d2Num: "81",
        },
        "mercedes": {
            img: mercedes_car,
            team: mercedes,
            d1: "George Russell",
            d2: "Kimi Antonelli",
            d1Num: "63",
            d2Num: "12",
        },
        "ferrari": {
            img: ferrari_car,
            team: ferrari,
            d1: "Charles Leclerc",
            d2: "Lewis Hamilton",
            d1Num: "16",
            d2Num: "44",
        },
        "red_bull": {
            img: redbull_car,
            team: redbull,
            d1: "Max Verstappen",
            d2: "Yuki Tsunoda",
            d1Num: "1",
            d2Num: "22",
        },
        "williams": {
            img: williams_car,
            team: williams,
            d1: "Alex Albon",
            d2: "Carlos Sainz",
            d1Num: "23",
            d2Num: "55",
        },
        "rb": {
            img: rb_car,
            team: rb,
            d1: "Isack Hadjar ",
            d2: "Liam Lawson",
            d1Num: "6",
            d2Num: "30",
        },
        "haas": {
            img: haas_car,
            team: haas,
            d1: "Oliver Bearman",
            d2: "Esteban Ocon",
            d1Num: "87",
            d2Num: "31",
        },
        "aston_martin": {
            img: aston_car,
            team: aston,
            d1: "Fernando Alonso",
            d2: "Lance Stroll",
            d1Num: "14",
            d2Num: "18",
        },
        "sauber": {
            img: sauber_car,
            team: sauber,
            d1: "Gabriel Bortoleto",
            d2: "Nico Hulkenberg",
            d1Num: "5",
            d2Num: "27",
        },
        "alpine": {
            img: alpine_car,
            team: alpine,
            d1: "Pierre Gasly",
            d2: "Franco Colapinto",
            d1Num: "10",
            d2Num: "43",
        },

    };

    useEffect(() => {
        async function fetchConstructors() {
            setLoading(true);
            setError('');
            try {
                const response = await fetch('https://f1api.dev/api/current/constructors-championship');
                if (!response.ok) throw new Error('No se pudieron obtener los datos');
                const ConstructorsListData = await response.json();

                const ConstructorsDetailsArray = await Promise.all(
                    ConstructorsListData.constructors_championship.map(async (c) => {
                        return {
                            name: c.team.teamName,
                            nationality: c.team.country,
                            teamID: c.teamId,
                            points: c.points,
                            position: c.position,
                            wins: c.wins,
                            cChampionships: c.team.constructorsChampionships,
                            dChampionships: c.team.driversChampionships,
                        };
                    })
                );

                setConstructors(ConstructorsDetailsArray);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchConstructors();
    }, []);

    const filteredConstructors = constructors.filter((constructor) => constructor.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className='body'>
            <h1 className='title' id='constructors_title'>Constructors</h1>
            <input className='inputD' type='text' placeholder='Look for a constructor...' value={query} onChange={(e) => setQuery(e.target.value)} />

            {loading && <p className='loading'>Loading Constructors...</p>}
            {error && <p className='error'> Error: {error}</p>}

            <div className='ContenedorCards'>

                {filteredConstructors.map((constructor) => {
                    const sname = `${constructor.teamID}`;
                    const asset = constructorsAssets[sname];

                    return (
                        <div className={`DriverCard ${constructor.teamID}`} onClick={() => setSelectedConstructor(constructor)}>
                            <img className='imgDriver' src={asset?.img}></img>
                            <div className='DriverInfo'>

                                <div className='DriverSec'>
                                    <div className='DriverName'>
                                        <h3 id='cName'> {constructor.name} </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                )}

            </div>

            {filteredConstructors.length === 0 && !loading && !error && (
                <p>No se encontraron resultados</p>
            )}

            {/*Modal de detalles*/}
            {selectedConstructor && (
                <div className='modal-overlay' onClick={() => setSelectedConstructor(null)}>
                    <div className={`modal ${selectedConstructor.teamID}`} onClick={(e) => e.stopPropagation()}>
                        <button className='close-btn' onClick={() => setSelectedConstructor(null)}> X </button>

                        <h1 className='modalName'>{selectedConstructor.name}</h1>

                        <div className='sectInfo'>

                            <div className='info1'>
                                <div className='sectTeam'>
                                    <p>Team Logo</p>
                                    <img className={`teamImg ${selectedConstructor.teamID}`} src={constructorsAssets[selectedConstructor.teamID]?.team}></img>
                                </div>
                                <div className='sectDrivers'>
                                    <p>Drivers:</p>
                                    <div className='teamDriver'>
                                        <h3>{constructorsAssets[selectedConstructor.teamID]?.d1Num}</h3>
                                        <p>{constructorsAssets[selectedConstructor.teamID]?.d1}</p>
                                    </div>
                                    <div className='teamDriver2'>
                                        <h3>{constructorsAssets[selectedConstructor.teamID]?.d2Num}</h3>
                                        <p>{constructorsAssets[selectedConstructor.teamID]?.d2}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='info2'>
                                <p className='info2-p-c'>Nationality: {selectedConstructor.nationality} </p>
                                <p className='info2-p-c'>Season wins: {selectedConstructor.wins} </p>
                                <p className='info2-p-c'>Current points: {selectedConstructor.points} </p>
                                <p className='info2-p-c'>Current position: {selectedConstructor.position} </p>
                                <p className='info2-p-c'>Constructors Championships: {selectedConstructor.cChampionships} </p>
                                <p className='info2-p-c'>Drivers Championships: {selectedConstructor.dChampionships} </p>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Constructors