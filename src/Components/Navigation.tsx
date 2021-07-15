import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./Style";

function Nav() {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <ul className={classes.navLinks}>
        <Link className={classes.Navstyle} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.Navstyle} to="/Login">
          <li>Login</li>
        </Link>
        <Link className={classes.Navstyle} to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
