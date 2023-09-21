import React from 'react'
import { useRef } from 'react';
import './NavBar.css';
import {FaBars,FaTimes} from "react-icons/fa";
export default function NavBar() {
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
    <h3>JobSymphony</h3>

    <nav ref={navRef}>
    <a href='/Home'>Home</a>
    <a href='/Works'>Our Works</a>
    <a href='/About'>About</a>
    <a href='/Contact'>Contact</a>
    <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
    </nav>
    <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
    </header>
  )
}
