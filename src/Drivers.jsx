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
import COL from './assets/drivers/Collapinto.png';
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

function Drivers() {
    const [drivers, setDrivers] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedDriver, setSelectedDriver] = useState(null);

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
        <div className='body'>
            <h1 className='title' id='drivers_title'>Drivers</h1>
            <input className='inputD' type='text' placeholder='Look for a driver...' value={query} onChange={(e) => setQuery(e.target.value)} />

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
                    <div className={`modal ${selectedDriver.teamID}`} onClick={(e) => e.stopPropagation()}>
                        <button className='close-btn' onClick={() => setSelectedDriver(null)}> X </button>

                        <h1 className='modalName'>{`${selectedDriver.name} ${selectedDriver.surname}`}</h1>

                        <div className='sectInfo'>

                            <div className='info1'>
                                <div className='sectTeam'>
                                    <p>Team: {selectedDriver.team}</p>
                                    <img className={`teamImg ${selectedDriver.teamID}`} src={driversAssets[selectedDriver.shortName]?.team}></img>
                                </div>
                                <div className='sectNum'>
                                    <p>Number:</p>
                                    <h3 className={`sectDriverNum ${selectedDriver.teamID}`}>{selectedDriver.number}</h3>
                                </div>
                            </div>

                            <div className='info2'>
                                <p className='info2-p'>Nationality: {selectedDriver.nationality} </p>
                                <p className='info2-p'>Season wins: {selectedDriver.wins} </p>
                                <p className='info2-p'>Season points: {selectedDriver.points} </p>
                                <p className='info2-p'>Current position: {selectedDriver.position} </p>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Drivers