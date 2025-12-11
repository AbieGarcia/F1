import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { NavLink } from 'react-router-dom';


import './App.css';
import './profile.css';
import { supabase } from "./lib/supabaseClient";

function Profile() {

    const [mensaje, setMensaje] = useState("");
    const [teams, setTeams] = useState([]);
    const { usuarioLogeado } = useContext(UserContext);

    useEffect(() => {
        if (usuarioLogeado) {
            getTeams();
        }
    }, [usuarioLogeado]);

    if (!usuarioLogeado) {
        return (
            <div>
                <p className="title">No se ha logeado a una cuenta</p>
            </div>
        )
    }

    const getTeams = async () => {
        const { data, error } = await supabase
            .from("Teams")
            .select("*")
            .eq("user_id", usuarioLogeado.id);

        if (error) setMensaje("Error al buscar");
        else {
            if (data.length > 0) {
                setTeams(data);
            } else {
                setMensaje("No hay equipos guardados");
            }
        }
    };



    return (
        <div className='bodyProfile'>
            <div className="profile-menu">
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link-top active' : 'nav-link-top'} >Profile</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Color Theme</NavLink>
                <NavLink to="/logout" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Log Out</NavLink>
            </div>
            <div className="principalProfile">
                <h1 className='title' id='profile_title'>Profile</h1>
                <div className="profile-body">
                    <div className="user-info">
                        <p><strong>User:</strong> {usuarioLogeado.user}</p>
                        <p>Name: {usuarioLogeado.name}</p>
                        <p>Favorite team: {usuarioLogeado.team}</p>
                        <p>My teams: </p>
                        {mensaje && <p className='mesajeTeams'>{mensaje}</p>}
                        <div className="cont-teams">
                            {teams.map((team) => (
                                <div key={team.id} className="team-card">
                                    <h3 className="t-name">{team.team_name}</h3>
                                    <ul className="t-drivers">
                                        <li>{team.driver1}</li>
                                        <li>{team.driver2}</li>
                                        <li>{team.driver3}</li>
                                        <li>{team.driver4}</li>
                                        <li>{team.driver5}</li>
                                    </ul>
                                    <h5 className="t-constructors">Constructors: {team.constructor1}, {team.constructor2}</h5>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile