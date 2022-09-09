import React from 'react'
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

const NavbarLoggedIn = props => {

  return(
    <>
    {/* <Link> usage down below uses HTTP verb GET not DELETE, so it does not work */}
        <li class="nav-item dropdown">
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Router>
              <Switch>
                <Link to="/users/sign_out" class="sign-out-btn">
                  Sign Out
                </Link>
              </Switch>
            </Router>
            </div>
          </li>
    </>
  )

};

export default NavbarLoggedIn;
