import { useState, useEffect } from 'react'
import './App.css'
import './Fantasy.css'
import PIA from './assets/drivers/OscarPiastri.png';
import VER from './assets/drivers/Verstappen.png';
import LEC from './assets/drivers/Leclerc.png';
import NOR from './assets/drivers/Norris.png';
import TSU from './assets/drivers/Tsunoda.png';
import HAM from './assets/drivers/Hamilton.png';
import ALO from './assets/drivers/Alonso.png';
import STR from './assets/drivers/Stroll.png';
import ANT from './assets/drivers/Antonelli.png';
import RUS from './assets/drivers/Russell.png';
import GAS from './assets/drivers/Gasly.png';
import COL from './assets/drivers/ColLapinto.png';
import SAI from './assets/drivers/Sainz.png';
import ALB from './assets/drivers/Albon.png';
import OCO from './assets/drivers/Ocon.png';
import BEA from './assets/drivers/Bearman.png';
import LAW from './assets/drivers/Lawson.png';
import HAD from './assets/drivers/Hadjar.png';
import BOR from './assets/drivers/Bortoleto.png';
import HUL from './assets/drivers/Nico.png';

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

function Fantasy() {
    const [drivers, setDrivers] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [addDriver, setAddDriver] = useState(null);

    const [constructors, setConstructors] = useState([]);
    const [addConstructor, setAddConstructor] = useState(null);

    const driversAssets = {
        "PIA": {
            img: PIA,
            team: mclaren,
        },
        "NOR": {
            img: NOR,
            team: mclaren,
        },
        "VER": {
            img: VER,
            team: redbull,

        },
        "TSU": {
            img: TSU,
            team: redbull,

        },
        "LEC": {
            img: LEC,
            team: ferrari,
        },
        "HAM": {
            img: HAM,
            team: ferrari,

        },
        "LAW": {
            img: LAW,
            team: rb,

        },
        "HAD": {
            img: HAD,
            team: rb,

        },
        "SAI": {
            img: SAI,
            team: williams,

        },
        "ALB": {
            img: ALB,
            team: williams,

        },
        "BEA": {
            img: BEA,
            team: haas,

        },
        "OCO": {
            img: OCO,
            team: haas,

        },
        "COL": {
            img: COL,
            team: alpine,

        },
        "GAS": {
            img: GAS,
            team: alpine,

        },
        "ALO": {
            img: ALO,
            team: aston,

        },
        "STR": {
            img: STR,
            team: aston,

        },
        "BOR": {
            img: BOR,
            team: sauber,

        },
        "HUL": {
            img: HUL,
            team: sauber,

        },
        "RUS": {
            img: RUS,
            team: mercedes,

        },
        "ANT": {
            img: ANT,
            team: mercedes,

        },
    };
    
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
        async function fetchDrivers() {
            setLoading(true);
            setError('');
            try {
                const response = await fetch('https://f1api.dev/api/current/drivers-championship?limit=20');
                if (!response.ok) throw new Error('No se pudieron obtener los datos');
                const DriversListData = await response.json();
                setDrivers(DriversListData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDrivers();
    }, []);

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

    

    const filteredDrivers = Array.isArray(drivers)
        ? drivers.filter((driver) => (driver?.surname || '').toLowerCase().includes(query.toLowerCase()))
        : [];

    return (
        <div className='body'>
            <div className='fantasy-banner'>
                <h1 className='title' id='drivers_title'>Fantasy</h1>
            </div>

            <div className='controls'>
                <div className='cost-cap'>
                    <strong>Cost cap:</strong>
                    <span className='cap-value'> 100 M</span>
                </div>

                <div className='input-equipo'>
                    <input className='team-input' type='text' placeholder='Team Name...' value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
                <button className='save-btn'>Save team</button>
            </div>

            <div className='fantasy-main'>
                <aside className='selector-grid'>
                    {[...Array(5)].map((_, i) => (
                        <button key={`d-${i}`} className='add-slot'>
                            <div className='plus'>+</div>
                            <div className='slot-label'>Add Driver</div>
                        </button>
                    ))}

                    <div></div>

                    {[...Array(2)].map((_, i) => (
                        <button key={`c-${i}`} className='add-slot constructor'>
                            <div className='plus'>+</div>
                            <div className='slot-label'>Add Constructor</div>
                        </button>
                    ))}
                </aside>

                <section className='lists'>
                    <div className='panel drivers-panel'>
                        <div className='panel-header'>
                            <h3>Drivers</h3>
                            <span className='col-title'>Value</span>
                        </div>

                        <div className='panel-body'>
                            {filteredDrivers.map((driver, idx) => {
                                const sname = `${driver.shortName}`;
                                const asset = driversAssets[sname];
                                return (
                                    <div key={driver.id || `${driver.name}-${driver.surname}-${idx}`} className='driver-item' onClick={() => setAddDriver(driver)}>
                                        <img className='driver-thumb' src={asset?.img} alt={driver.surname} />
                                        <div className='driver-meta'>
                                            <div className='driver-name'>{driver.name} <span className='surname'>{driver.surname}</span></div>
                                        </div>
                                        <div className='driver-value'>$30.5M</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='panel constructors-panel'>
                        <div className='panel-header'>
                            <h3>Constructors</h3>
                        </div>
                        <div className='panel-body'>
                            {/* constructors list placeholder */}
                        </div>
                    </div>
                </section>
            </div>

            {/*
            {filteredDrivers.length === 0 && !loading && !error && (
                <p>No se encontraron resultados</p>
            )} 

            */}

            {/*Modal de detalles*/}
            {addDriver && (
                <div className='modal-overlay' onClick={() => setAddDriver(null)}>
                    <div className={`modal ${addDriver.teamID}`} onClick={(e) => e.stopPropagation()}>
                        <button className='close-btn' onClick={() => setAddDriver(null)}> X </button>

                        <h1 className='modalName'>{`${addDriver.name} ${addDriver.surname}`}</h1>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Fantasy