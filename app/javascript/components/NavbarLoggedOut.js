import React from 'react'
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

const NavbarLoggedOut = props => {

  return(
    <>
      <Router>
        <Switch>
          <Link to="/users/sign_in" data-method="GET" class="sign-in-btn">
            Sign In
          </Link>
        </Switch>
      </Router>
    </>
  )

}

export default NavbarLoggedOut;
