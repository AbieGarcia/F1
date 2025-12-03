import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { NavLink } from 'react-router-dom';


import './App.css';
import './profile.css';

function Profile() {

    const { usuarioLogeado } = useContext(UserContext);

    if (!usuarioLogeado) {
        return (
            <div>
                <p className="title">No se ha logeado a una cuenta</p>
            </div>
        )
    }

    return (
        <div className='body'>
            <h1 className='title' id='profile_title'>Profile</h1>
            <div className="profile-body">
                <aside className="profile-menu">
                    <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link-top active' : 'nav-link-top'} >Profile</NavLink>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Color Theme</NavLink>
                    <NavLink to="/logout" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Log Out</NavLink>
                </aside>
                <div className="user-info">
                    <p><strong>User:</strong> {usuarioLogeado.user}</p>
                    <p>Name: {usuarioLogeado.name}</p>
                    <p>Favorite team: {usuarioLogeado.team}</p>
                    <p>My teams: </p>
                </div>
            </div>

        </div>
    )
}

export default Profile