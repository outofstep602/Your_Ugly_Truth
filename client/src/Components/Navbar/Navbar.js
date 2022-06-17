import React from 'react';
import Logout from '../Logout/Logout';
import '../Navbar/Navbar.css'
import DeleteAll from '../Deleteuser/Deleteuser';

const Navbar = () => {

  return (
    <div>

      <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">

          <div className="header">
            <h2>Your Ugly Truth</h2>
          </div>
          <ul className="navbar-nav">
            <Logout />
            <DeleteAll />
            <a className='nav-link' href='/changepassword'>Change Password</a>
          </ul>
        </div>

      </nav>
    </div>
  )
}
export default Navbar