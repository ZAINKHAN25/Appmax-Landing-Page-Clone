import React from 'react';
import "./app.css";

import { FaAngleDown } from "react-icons/fa";

import navbarDropDowns from './Navbar-Dropdown.js';



function Navbar() {

  function emirpNum(num) {

    let numString = num.toString().split(" ").reverse().join() - 1 + 1;

    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      } else {

        for (let si = 2; si < numString; si++) {
          if (numString % si === 0) {
            return `${false}, Reverse the Num ${numString} ${si}`;
          }
        }


      }
    }


    return true;
  }

  for(let index = 1; index <= 100; index++){
    if(emirpNum(index) === true){
      console.log(index);
    }
  }

  function openDropDown(i) {

  }

  return (
    <div className='navbar-div'>
      <div className='navbar-brand d-flex align-items-center'>
        <div className='navbar-brand-A'>A</div>
        <div className='navbar-ppmax'>ppmax</div>
      </div>

      <ul className='navbar-drop-down'>

        {
          navbarDropDowns.map((x, i) => {
            return (
              <li className='li-of-Navbar-DropDown' onMouseOver={() => openDropDown(i)} key={i}>
                {
                  `${x.dropDownName} `
                }
                <FaAngleDown />
              </li>
            )
          })
        }

      </ul>

      <div className='Login-Singup-Navbar'>
        <button className='LS-Navbar-Btn'>Login</button>
        <button className='LS-Navbar-Btn'>Sign-Up</button>
      </div>
    </div>
  )
}

export default Navbar