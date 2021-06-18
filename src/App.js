import React from "react";
import {
  Header,
  Home,
  Footer,
  Navbar,
  Signin,
  Signup,
  Doctors,
  Protected,
  ChatBot,
} from "./Components/Components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Navbar />
          <div className="topPad">
            <div className="appBody">
              <Route exact path="/" component={Home} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/doctors" component={Doctors} />
              <Protected />
            </div>
            <Footer />
          </div>
        </Router>

        <ChatBot />
      </div>
    </Provider>
  );
};

export default App;
