import React from 'react'
import '../style/navbar.css'
import { NavLink  } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
         <ul>
            <li>
               <NavLink  to="/">Home</NavLink >
            </li>
            <li>
               <NavLink  to="/Blog">Blog</NavLink >
            </li>
            <li>
               <NavLink  to="/Details">Details</NavLink >
            </li>
            <li>
               <NavLink  to="/Feature">Feature</NavLink >
            </li>
            <li>
               <NavLink  to="/CTA">CTA</NavLink >
            </li>
         </ul>
   </nav>
  )
}

export default Navbar;