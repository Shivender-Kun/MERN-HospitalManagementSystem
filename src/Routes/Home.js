// Defining the Home ("/") route of the api.
const Home = (req, res) => {
  // Response to be shown at the home page.
  res.render("index", {});
};

export default Home;
