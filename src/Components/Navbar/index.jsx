import React from 'react';
import "./app.css";

import NavbarDropDownComponent from '../NavbarDropDown/index.jsx';



function Navbar() {
  return (
    <div className='navbar-div'>
      <div className='navbar-brand d-flex align-items-center'>
        <div className='navbar-brand-A'>A</div>
        <div className='navbar-ppmax'>ppmax</div>
      </div>

      <NavbarDropDownComponent />

      <div className='Login-Singup-Navbar'>
        <button className='LS-Navbar-Btn'>Login</button>
        <button className='LS-Navbar-Btn'>Sign-Up</button>
      </div>
    </div>
  )
}

export default Navbar;