import React from 'react';
import './Header.css';
import logo from '../logo.png'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo"/>
      <div className="buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  )
}
export default Header;