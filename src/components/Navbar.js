import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <Fragment>
             <nav id="navbar">
                <div className="logo fs-2">
                    <h3> <i className="fas fa-address-book"></i>  Conatct-Keeper</h3>
                </div>
                <ul>
                    <li> <Link to="/home" className="navbar-link fs-2">Home</Link> </li>
                    <li> <Link to="/login" className="navbar-link fs-2">Login</Link> </li>
                    <li> <Link to="/signup" className="navbar-link fs-2">Signup</Link> </li>
                </ul>
            </nav>
        </Fragment>
       
    );
}

export default Navbar;