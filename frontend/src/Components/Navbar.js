import React from 'react';
import Etlogo from '../../src/Components/Etlogo.png'
import signout from '../../src/Components/signout-icon.png'
import '../App.css';
import ".././Components/css/nav.css"
import RigDetails from '../Components/Rigdetails';
import { Link } from 'react-router-dom';

function Navbar({isLoggedIn,setIsLoggedIn}) {

  const handleSignOut = ()=>{
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(!isLoggedIn)
  }

  return (


    <nav className="navbar navbar-expand-lg bg-white position-fixed top-0 w-100 px-4 pb-0 " style={{zIndex:99}}>
      <div class="container-fluid">
        <div class="navbar-brand bg-white d-flex justify-content-center align-items-center flex-column" >
          <img src={Etlogo} height="49px" width="59px" />
          <div> Jupiter</div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav justify-content-between w-100 ps-3 mb-2 mb-lg-0 border-bottom" >
            <li class="nav-item"><Link to="/dashboard" class="nav-link">Dashboard</Link></li>
            <li class="nav-item"><Link to="/dailytracker" class="nav-link">Daily Tracker</Link></li>
            <li class="nav-item"><Link to="/surveyschedule" class="nav-link">Survey Schedule</Link></li>
            <li className='nav-item dropdown'>
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Reference details
              </a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/rigdetails">Rig Details</Link></li>
                <li><Link class="dropdown-item" to="/toolsregister">Tools Register</Link></li>
                <li><Link class="dropdown-item" to="/legaldetails">Legal Details</Link></li>
                <li><Link class="dropdown-item" to="Templates">Templates</Link></li>
              </ul>
            </li>
            <li class="nav-item"><Link to="/professionaldetails" class="nav-link">Professionals Details</Link></li>
            <li class="nav-item"><Link to="/projects" class="nav-link">Projects</Link></li>
            <li class="nav-item"><Link to="/documents" class="nav-link">Documents</Link></li>
            <li class="nav-item"><Link to="/mobilizations" class="nav-link">Mobilizations</Link></li>
            <li class="nav-item">
              <Link to="/signout" onClick={handleSignOut} class="nav-link">Signout
                <img src={signout} height={"30px"} width={"30px"} alt="Sign out" />
              </Link>
            </li>
            {/* <li><button>Signout<img src={signout} alt="Sign out" /></button></li> */}
          </ul>

        </div>
      </div>
    </nav>
  );
}


export default Navbar;
