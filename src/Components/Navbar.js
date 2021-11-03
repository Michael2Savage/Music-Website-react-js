import React from 'react'
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './static/Navbar.css'
import Logo from './static/michaelsavagecoverartsnippit.png';



export default function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'black'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={Logo} style={{width: '250px', height: '20px'}}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Mashups">Mashups</Link>
        </li>
      </ul>
      
      <ul className="navbar-nav ml-auto mb-2 mb-lg-">
      <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <PersonIcon />User (need to right-align)
          </a>
        
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Signin">Sign In</Link></li>
            <li><Link className="dropdown-item" to="/Signout">Sign Out</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/Createaccount">Create Account</Link></li>
          </ul>
          
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}
