import { useContext } from "react";
import { UserContext } from "./UserContext";

import './App.css';

function Profile() {
    const { usuarioLogeado } = useContext(UserContext);

    if (!usuarioLogeado) {
        return (
            <p>No se ha logeado a una cuenta</p>
        )
    }

    return (
        <div className='body'>
            <p>User: {usuarioLogeado.user}</p>
            <p>Name: {usuarioLogeado.name}</p>
            <p>Favorite team: {usuarioLogeado.team}</p>

        </div>
    )
}

export default Profile