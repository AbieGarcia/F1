import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { UserContext } from "./UserContext";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import f1Logo from './assets/formula-1-logo.png';
import settings from './assets/Settings.png';
import Drivers from './Drivers';
import Login from './login';
import Register from './Register';
import Fantasy from './Fantasy';
import Constructors from './Constructors';
import Profile from './profile';
import Settings from './settings';
import tabla from './assets/tabla.jpg';
import imgcard1 from './assets/img-card1.png';
import imgcard2 from './assets/img-card2.png';
import Logout from './logout';
import './App.css';
import './home.css';

function App() {

  const [usuarioLogeado, setUsuarioLogeado] = useState(null);

  useEffect(() => {
    try {
      const usuarioGuardado = localStorage.getItem("usuarioLogeado");
      if (usuarioGuardado) {
        setUsuarioLogeado(JSON.parse(usuarioGuardado));
      }
    } catch (error) {
      console.error("Error al leer usuario del localStorage:", error);
    }
  }, []);

  return (
    <>
      <div className="header">
        <img className='LogoF1' src={f1Logo} />
        <div className="menu">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Home</NavLink>
          <NavLink to="/drivers" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Drivers</NavLink>
          <NavLink to="/constructors" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Constructors</NavLink>
          <NavLink to="/fantasy" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Fantasy</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >LOG IN</NavLink>
          <NavLink to="/profile" ><img className='settingIMG' src={settings}></img></NavLink>
        </div>
      </div>
      <UserContext.Provider value={{ usuarioLogeado, setUsuarioLogeado }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='body'>
                  <div className='home'>
                    <div>
                      <h3 className='title' id='calendar'>Calendar</h3>
                      <img className='tabla-home' src={tabla} />
                    </div>
                    <div className='information'>
                      <h3 className='title' id='about'>About F1</h3>
                      <p className='paragraph'> Formula 1 (F1) is the highest level of international car racing. Ten teams, each with two drivers, compete in fast, high-tech cars across global Grand Prix events.
                        Drivers earn points based on race results to win the Drivers’ and Constructors’ Championships. Races involve speed, strategy, pit stops, and tire choices.
                        F1 cars reach over 300 km/h and use advanced aerodynamics and hybrid engines.
                        The sport combines cutting-edge engineering, driver skill, and global excitement, making it one of the most thrilling and watched competitions in the world.</p>
                    </div>
                  </div>
                  <div className='cardh' id='card1'>
                    <img className='imgcard' src={imgcard1} />
                    <h4 className='title-card'>Jolyon Palmer's Analysis: Piastri's weekend to forget in Sao Paulo</h4>
                    <p className='pcard'>F1 TV's Jolyon Palmer looks at the two major incidents at Interlagos involving Oscar Piastri,
                      who consequently slipped further behind his McLaren teammate Lando Norris in the drivers' championship.</p>
                  </div>
                  <div className='cardh' id='card2'>
                    <img className='imgcard' src={imgcard2} />
                    <h4 className='title-card'>2025 Sao Paulo Grand Prix: Every Max Verstappen overtake</h4>
                    <p className='pcard'>Watch as we highlight Max Verstappen's heroic recovery from starting in the pit lane to finishing
                      P3 in Sao Paulo.</p>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/constructors" element={<Constructors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fantasy" element={<Fantasy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;