import { Link, useLocation } from "react-router-dom";

import useStyles from "./Style";

const Nav: React.FC<any> = (props) => {
  const { userType } = props;
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <nav className={classes.nav}>
      <ul className={classes.navLinks}>
        {pathname.includes("public") ? (
          <>
            <Link className={classes.Navstyle} to="/public/home">
              <li>Home</li>
            </Link>
            <Link className={classes.Navstyle} to="/public/login">
              <li>login</li>
            </Link>
            <Link className={classes.Navstyle} to="/public/register">
              <li>Register</li>
            </Link>
          </>
        ) : userType === "ROLE_USER" ? (
          <>
            <Link className={classes.Navstyle} to="/portal/home">
              <li>Home</li>
            </Link>
            <Link className={classes.Navstyle} to="/portal/cart">
              <li>Cart</li>
            </Link>
            <Link className={classes.Navstyle} to="/portal/my-profile">
              <li>My Profile</li>
            </Link>
          </>
        ) : (
          <>
            <Link className={classes.Navstyle} to="/portal/home">
              <li>Home</li>
            </Link>
            <Link className={classes.Navstyle} to="/portal/cart">
              <li>Cart</li>
            </Link>
            <Link className={classes.Navstyle} to="/portal/admin-panel">
              <li>Admin Panel</li>
            </Link>
            <Link className={classes.Navstyle} to="/portal/my-profile">
              <li>My Profile</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
