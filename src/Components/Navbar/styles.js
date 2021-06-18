const styles = {
  navbar: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "7vh",
    height: "100%",
    zIndex: "1",
  },
  signupRoute: {
    textAlign: "right",
    marginRight: "30px !important",
    fontSize: "1.3rem !important",
  },
  routes: {
    padding: "1vw",
    transitionDuration: "300ms",
    marginTop: "2vh",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    paddingTop: "3vh 1vw",
    // backgroundColor: "var(--bs-bg)",
  },
  hide: {
    transform: "translateX(-100%)",
    transitionDuration: "300ms",
  },
  show: {
    width: "fit-content",
    transform: "translateX(0%)",
    transitionDuration: "300ms",
  },
};

export default styles;
