import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-containes">
      <h1>Bienvenido</h1>
      <ul>
        <li>
          <Link to="/about">Inicio</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Registro</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
