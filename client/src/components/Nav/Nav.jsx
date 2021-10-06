import './Nav.css'
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
          <Link to="/" className='navlinks'>Home</Link>

    </nav>
  )
}
