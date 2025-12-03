import { useContext } from "react";
import { UserContext } from "./UserContext";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import './App.css';
import './profile.css';

function Logout() {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("usuarioLogeado");
        setUsuarioLogeado(null);
        navigate('/login');
    };

    return (
        <div className='body'>
            <aside className="profile-menu">
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link-top active' : 'nav-link-top'} >Profile</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Color Theme</NavLink>
                <NavLink to="/logout" className={({ isActive }) => isActive ? 'nav-link-p active' : 'nav-link-p'} >Log Out</NavLink>
            </aside>
            <button className="logout-btn" onClick={cerrarSesion}>Log Out</button>
        </div>
    )
}

export default Logout