import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {


    return (
        <nav className="navbar">
            <div className="logo"><Link to="/" className='logolink'><h1>True<span className='multicolor-letter'>Value</span></h1></Link></div>
            <ul className="nav-links">
                <li><Link to='/New-cars'>NEW CARS</Link></li>
                <li><Link to='/Old-cars'>USED CARS</Link></li>
                <li><Link to="/Service">SERVICES</Link></li>
                <li><Link to='/News' >NEWS</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                <li><Link to="/Frequently Asked Question">FAQ</Link></li>
                <li><Link to="/Team">TEAM</Link></li>
            </ul>
            <div className="search-signup">
                <FaMapMarkerAlt className="icon" />
                <FaUserCircle className="icon" ></FaUserCircle>
            </div>
        </nav>
    );
};

export default Navbar
