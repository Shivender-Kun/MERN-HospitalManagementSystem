import React from "react";
import { Show } from "../Components";
import HamburgerMenu from "react-hamburger-menu";
import { useSelector, useDispatch } from "react-redux";
import healthcare from "../../assets/healthcare.png";

const Header = () => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.navbarReducer.showNavbar);

  const handleClick = () => {
    dispatch(Show());
  };

  return (
    <header className="bg-primary text-white" style={styles.header}>
      <div id="hamburger">
        <HamburgerMenu
          isOpen={show}
          menuClicked={handleClick}
          width={25}
          height={20}
          strokeWidth={2}
          rotate={1}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <div id="container" style={styles.container}>
        <img style={styles.img} src={healthcare} alt="" />
        <h1>Love Health Hospital</h1>
        <img style={styles.img} src={healthcare} alt="" />
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    position: "fixed",
    zIndex: "1",
    width: "100%",
    height: "7vh",
    padding: "1vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    height: "5vh",
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: "1",
  },
  hamburger: {},
};
