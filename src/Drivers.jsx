import { useState, useEffect } from 'react'
import './App.css'
import './Drivers.css'
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

function Drivers() {
    const [drivers, setDrivers] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedDriver, setSelectedDriver] = useState(null);

    const driversAssets = {
        "PIA": {
            img: PIA,
        },
        "NOR": {
            img: NOR,
        },
        "VER": {
            img: VER,
        },
        "TSU": {
            img: TSU,
        },
        "LEC": {
            img: LEC,
        },
        "HAM": {
            img: HAM,
        },
        "LAW": {
            img: LAW,
        },
        "HAD": {
            img: HAD,
        },
        "SAI": {
            img: SAI,
        },
        "ALB": {
            img: ALB,
        },
        "BEA": {
            img: BEA,
        },
        "OCO": {
            img: OCO,
        },
        "COL": {
            img: COL,
        },
        "GAS": {
            img: GAS,
        },
        "ALO": {
            img: ALO,
        },
        "STR": {
            img: STR,
        },
        "BOR": {
            img: BOR,
        },
        "HUL": {
            img: HUL,
        },
        "RUS": {
            img: RUS,
        },
        "ANT": {
            img: ANT,
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
                            shortName: d.driver.shortName,
                            teamID: d.team.teamId,
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
                <h1 className='title' id='drivers_title'>Drivers</h1>
                <input type='text' placeholder='Look for a driver...' value={query} onChange={(e) => setQuery(e.target.value)} />


                {loading && <p className='loading'>Loading Drivers...</p>}
                {error && <p className='error'> Error: {error}</p>}

                <div className='ContenedorCards'>

                    {filteredDrivers.map((driver) => {
                        const sname = `${driver.shortName}`;
                        const asset = driversAssets[sname];

                        return (
                            <div className={`DriverCard ${driver.teamID}`} onClick={() => setSelectedDriver(driver)}>
                                <img className='imgDriver' src={asset?.img}></img>
                                <div className='DriverInfo'>

                                    <div className='DriverSec'>
                                        <div className='DriverName'>
                                            <h3> {driver.name} </h3>
                                            <h3 id='Surname'> {driver.surname} </h3>
                                        </div>
                                        <h2> {driver.number} </h2>
                                    </div>
                                    <p className='DriverTeam'> {driver.team} </p>
                                </div>
                            </div>
                        );
                    }
                    )}

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