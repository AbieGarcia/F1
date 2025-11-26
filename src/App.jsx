import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import f1Logo from './assets/formula-1-logo.png';
import settings from './assets/Settings.png';
import Drivers from './Drivers';
import Login from './login';
import Register from './Register';
import './App.css';
import Constructors from './Constructors';

function App() {
  const [count, setCount] = useState(0);

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
          <NavLink to="/settings" ><img className='settingIMG' src={settings}></img></NavLink>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <body>

              </body>
            </>
          }
        />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/constructors" element={<Constructors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;