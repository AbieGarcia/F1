import { useState, useEffect } from "react";
import "./App.css";
import "./Fantasy.css";

import PIA from "./assets/drivers/OscarPiastri.png";
import VER from "./assets/drivers/Verstappen.png";
import LEC from "./assets/drivers/Leclerc.png";
import NOR from "./assets/drivers/Norris.png";
import TSU from "./assets/drivers/Tsunoda.png";
import HAM from "./assets/drivers/Hamilton.png";
import ALO from "./assets/drivers/Alonso.png";
import STR from "./assets/drivers/Stroll.png";
import ANT from "./assets/drivers/Antonelli.png";
import RUS from "./assets/drivers/Russell.png";
import GAS from "./assets/drivers/Gasly.png";
import COL from "./assets/drivers/ColLapinto.png";
import SAI from "./assets/drivers/Sainz.png";
import ALB from "./assets/drivers/Albon.png";
import OCO from "./assets/drivers/Ocon.png";
import BEA from "./assets/drivers/Bearman.png";
import LAW from "./assets/drivers/Lawson.png";
import HAD from "./assets/drivers/Hadjar.png";
import BOR from "./assets/drivers/Bortoleto.png";
import HUL from "./assets/drivers/Nico.png";

import ferrari from "./assets/logos/ferrari_logo.png";
import alpine from "./assets/logos/alpine_logo.png";
import aston from "./assets/logos/aston_logo.png";
import haas from "./assets/logos/haas_logo.png";
import mclaren from "./assets/logos/mclaren_logo.png";
import mercedes from "./assets/logos/mercedes_logo.png";
import rb from "./assets/logos/rb_logo.png";
import redbull from "./assets/logos/redbull_logo.png";
import sauber from "./assets/logos/sauber_logo.png";
import williams from "./assets/logos/williams_logo.png";

import ferrari_car from "./assets/cars/ferrari_car.png";
import alpine_car from "./assets/cars/alpine_car.png";
import aston_car from "./assets/cars/am_car.png";
import haas_car from "./assets/cars/haas_car.png";
import mclaren_car from "./assets/cars/mclaren_car.png";
import mercedes_car from "./assets/cars/mercedes_car.png";
import rb_car from "./assets/cars/rb_car.png";
import redbull_car from "./assets/cars/redbull_car.png";
import sauber_car from "./assets/cars/sauber_car.png";
import williams_car from "./assets/cars/williams_car.png";

function Fantasy() {
    const [drivers, setDrivers] = useState([]);
    const [constructors, setConstructors] = useState([]);
    const [query, setQuery] = useState("");
    const [query_constructors, setQueryConstructors] = useState("");

    const [selectedDrivers, setSelectedDrivers] = useState([null, null, null, null, null]);
    const [selectedConstructors, setSelectedConstructors] = useState([null, null]);

    const driverImages = {
        max_verstappen: VER,
        oscar_piastri: PIA,
        lando_norris: NOR,
        charles_leclerc: LEC,
        lewis_hamilton: HAM,
        yuki_tsunoda: TSU,
        fernando_alonso: ALO,
        lance_stroll: STR,
        andrea_kimi_antonelli: ANT,
        george_russell: RUS,
        pierre_gasly: GAS,
        franco_colapinto: COL,
        carlos_sainz: SAI,
        alex_albon: ALB,
        esteban_ocon: OCO,
        oliver_bearman: BEA,
        liam_lawson: LAW,
        isack_hadjar: HAD,
        gabriel_bortoleto: BOR,
        nico_hulkenberg: HUL,
    };

    const constructorsAssets = {
        mclaren: { img: mclaren_car, team: mclaren },
        mercedes: { img: mercedes_car, team: mercedes },
        ferrari: { img: ferrari_car, team: ferrari },
        red_bull: { img: redbull_car, team: redbull },
        williams: { img: williams_car, team: williams },
        rb: { img: rb_car, team: rb },
        haas: { img: haas_car, team: haas },
        aston_martin: { img: aston_car, team: aston },
        sauber: { img: sauber_car, team: sauber },
        alpine: { img: alpine_car, team: alpine },
    };

    const valor_drivers = {
        max_verstappen: 29.8,
        oscar_piastri: 25.4,
        lando_norris: 30.4,
        charles_leclerc: 23.3,
        lewis_hamilton: 22.2,
        yuki_tsunoda: 11.2,
        fernando_alonso: 4.5,
        lance_stroll: 7.3,
        andrea_kimi_antonelli: 17.5,
        george_russell: 23.6,
        pierre_gasly: 5.9,
        franco_colapinto: 4.5,
        carlos_sainz: 7.1,
        alex_albon: 13.2,
        esteban_ocon: 7.3,
        oliver_bearman: 9.5,
        liam_lawson: 5.3,
        isack_hadjar: 6.3,
        gabriel_bortoleto: 6.1,
        nico_hulkenberg: 5.6,
    };

    useEffect(() => {
        async function fetchDrivers() {
            const res = await fetch(
                "https://f1api.dev/api/current/drivers-championship?limit=20"
            );
            const data = await res.json();

            const DriversDetailsArray = data.drivers_championship.map((d) => {
                const name = d.driver.name;
                const surname = d.driver.surname;
                const imgKey = `${name}_${surname}`.toLowerCase().replace(/\s+/g, "_");
                return {
                    name,
                    surname,
                    team: d.team.teamName,
                    number: d.driver.number,
                    nationality: d.driver.nationality,
                    wins: d.wins,
                    points: d.points,
                    position: d.position,
                    shortName: d.driver.shortName,
                    driverId: d.driver.driverId ?? d.driver.number,
                    imgKey,
                    teamId: d.team.teamId,
                };
            });

            setDrivers(DriversDetailsArray);
        }
        fetchDrivers();
    }, []);

    useEffect(() => {
        async function fetchConstructors() {
            const res = await fetch(
                "https://f1api.dev/api/current/constructors-championship"
            );
            const data = await res.json();
            setConstructors(data.constructors_championship);
        }
        fetchConstructors();
    }, []);

    const filteredDrivers = drivers.filter((d) => {
        const fullName = `${d.name ?? ""} ${d.surname ?? ""}`.toLowerCase();
        return fullName.includes(query.toLowerCase());
    });

    const filteredConstructors = constructors.filter((k) => {
        const fullName = `${k.name ?? ""} ${k.surname ?? ""}`.toLowerCase();
        return fullName.includes(query_constructors.toLowerCase());
    });


    function addDriver(d) {
        const empty = selectedDrivers.findIndex((x) => x === null);
        if (empty === -1) return;

        setSelectedDrivers((arr) => {
            const copy = [...arr];
            copy[empty] = d;
            return copy;
        });
    }

    function addConstructor(c) {
        const empty = selectedConstructors.findIndex((x) => x === null);
        if (empty === -1) return;

        setSelectedConstructors((arr) => {
            const copy = [...arr];
            copy[empty] = c;
            return copy;
        });
    }

    return (
        <div className="body">
            <div className="fantasy-banner">
                <h1 className="title">Fantasy</h1>
            </div>

            <div className="controls">
                <div className="cost-cap">
                    <strong>Cost cap:</strong> 100M
                </div>

                <input
                    className="team-name"
                    placeholder="Enter team name..."
                />
            </div>

            <div className="fantasy-main">
                <aside className="selector-grid">

                    {selectedDrivers.map((d, i) => (
                        <div key={i} className="add-slot">
                            {d ? (
                                <>
                                    <img
                                        className="slot-img"
                                        src={(() => {
                                            const imgKey = `${d.name}_${d.surname}`
                                                .toLowerCase()
                                                .replace(/\s+/g, "_");
                                            return driverImages[imgKey] ?? "";
                                        })()}
                                    />
                                    <div className="slot-label">{d.name} {d.surname}</div>
                                </>
                            ) : (
                                <>
                                    <div className="plus">+</div>
                                    <div className="slot-label">Add Driver</div>
                                </>
                            )}
                        </div>
                    ))}

                    {selectedConstructors.map((c, i) => {
                        const key = c ? c.teamId : null;
                        return (
                            <div key={i} className="add-slot constructor">
                                {c ? (
                                    <>
                                        <img
                                            className="slot-img"
                                            src={constructorsAssets[key]?.img}
                                        />
                                        <div className="slot-label">{c.team.teamName}</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="plus">+</div>
                                        <div className="slot-label">Add Constructor</div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </aside>

                <section className="lists">
                    <div className="panel drivers-panel">
                        <div className="panel-header">
                            <h3 className="letrero">Drivers</h3>
                            <span className="col-title">Value</span>
                        </div>

                        <div className="buscador">
                            <input
                                className="team-name"
                                placeholder="Search driver..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>

                        <div className="panel-body">
                            {filteredDrivers.map((d, i) => (
                                <div key={i} className="driver-item">
                                    <img
                                        className="driver-thumb"
                                        src={driverImages[d.imgKey] ?? ""}
                                    />
                                    <div className="driver-meta">
                                        <div className="driver-name">
                                            {d.name} {d.surname}
                                        </div>
                                    </div>
                                    <div className="driver-button-div">
                                    </div>
                                    <button className="add-button-driver" onClick={() => addDriver(d)}>
                                        +
                                    </button>


                                    <div className="driver-value">{valor_drivers[d.imgKey] ?? "M"} </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="panel constructors-panel">
                        <div className="panel-header">
                            <h3>Constructors</h3>
                        </div>

                        <div className="buscador">
                            <input
                                className="team-name"
                                placeholder="Search constructor..."
                                value={query_constructors}
                                onChange={(e) => setQueryConstructors(e.target.value)}
                            />
                        </div>
                        {filteredConstructors.map((d, i) => (
                            <div className="panel-body">
                                {constructors.map((c, i) => (
                                    <div key={i} className="constructor-item">
                                        <img
                                            className="constructor-thumb"
                                            src={constructorsAssets[c.teamId]?.img}
                                        />
                                        <div className="constructor-name">{c.team.teamName}</div>
                                        <button
                                            className="add-button"
                                            onClick={() => addConstructor(c)}
                                        >
                                            +
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section >
            </div >
        </div >
    );
}

export default Fantasy;
