import React from 'react'
import  { BsHouseDoorFill } from 'react-icons/bs'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import "./index.css"

const Header = () => {
  return (
    <nav className='navbar-list'>
        <h1 className='logo-heading'><BsHouseDoorFill className='logo-icon'/> Estatery</h1>
        <ul className='header-list'>
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Manage Property <MdOutlineArrowDropDown/></li>
            <li>Resources <MdOutlineArrowDropDown/></li>
        </ul>
        <div className='button-container'>
            <button className='log-button'>Login</button>
            <button className='sign-button'>Signup</button>
        </div>
    </nav>
  )
}

export default Header