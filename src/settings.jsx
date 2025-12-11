import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { NavLink } from 'react-router-dom';

import './App.css';
import './profile.css';

import ferrari_theme from './assets/themes/ferrari_theme.png';
import mercedes_theme from './assets/themes/mercedes_theme.png';
import mclaren_theme from './assets/themes/mclaren_theme.png';
import redbull_theme from './assets/themes/redbull_theme.png';


function Settings() {

    const { usuarioLogeado, setUsuarioLogeado } = useContext(UserContext);

    const cambiarTema = (t) => {
        setUsuarioLogeado((prev) => {
            const actualizado = {
                ...prev,
                theme: t
            };
            localStorage.setItem("usuarioLogeado", JSON.stringify(actualizado));
            return actualizado;
        });
    };

    if (!usuarioLogeado) {
        return (
            <div>
                <p className="title">No se ha logeado a una cuenta</p>
            </div>
        )
    }

    return (
        <div className='bodyProfile'>
            <div className="profile-menu">
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link-top active' : 'nav-link-top'} >Profile</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Color Theme</NavLink>
                <NavLink to="/logout" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Log Out</NavLink>
            </div>
            <div className="principalProfile">
                <h1 className='title' id='color_title'>Color Theme</h1>
                <div className="color-theme">
                    <hr></hr>
                    <p>Choose the color of your favorite team!</p>
                    <div className="theme-cards">
                        <img src={ferrari_theme} className="theme-card" onClick={() => cambiarTema("ferrari")}></img>
                        <img src={redbull_theme} className="theme-card" onClick={() => cambiarTema("redbull")}></img>
                        <img src={mclaren_theme} className="theme-card" onClick={() => cambiarTema("mclaren")}></img>
                        <img src={mercedes_theme} className="theme-card" onClick={() => cambiarTema("mercedes")}></img>
                    </div>
                    <button className="default-btn" onClick={() => cambiarTema("default")}>default</button>
                    <hr></hr>
                </div>

            </div>
        </div>
    )
}

export default Settings