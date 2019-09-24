import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logoHotel.png";
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo"><img src={logo} className="App-logo" alt="logo-fake-hotels" style={{maxWidth: "3.5em"}}/> </Link>
                    
                    <ul className="right">
                        <li><Link to="/">Hotels</Link></li>
                        <li><Link to="/cart">Panier</Link></li>
                        <li><Link to="/cart"><i className="material-icons" id="shopping">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;