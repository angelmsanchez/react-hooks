import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <h1 className="App-title">React Hooks</h1>
      <nav className="nav-header">
        <ul>
          <li>
            <Link to="/">
              Home
              </Link>
          </li>
          <li>
            <Link to="/counter">
              Counter
            </Link>
          </li>
        </ul>
      </nav>
      {/* <select onChange={this.changeLanguage} value={this.state.value}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select> */}
    </header>
  );
}

