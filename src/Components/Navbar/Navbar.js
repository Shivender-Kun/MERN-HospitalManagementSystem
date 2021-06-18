import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./styles";
import "./Navbar.css";

const Navbar = () => {

  const signed = useSelector((state) => state.signInReducer.userSignedIn);

  const show = useSelector((state) => state.navbarReducer.showNavbar);

  const menuStyles = {
    show: { ...styles.links, ...styles.show },
    hide: { ...styles.links, ...styles.hide },
  };

  return (
    <nav style={styles.navbar} id="navbar">
      <div
        style={show ? menuStyles.show : menuStyles.hide}
        className="links bg-primary text-white"
        id={show ? "show" : "hide"}
      >
        <div style={styles.routes} className="routes">
          <h5>
            <Link to="">Home</Link>
          </h5>
        </div>
        <div style={styles.routes} className="routes">
          <h5>
            <Link to="/doctors">Doctors</Link>
          </h5>
        </div>
        <div style={styles.routes} className="routes">
          <h5>
            <Link to={signed === "" ? "/signin" : "/myaccount"}>
              My Account
            </Link>
          </h5>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
