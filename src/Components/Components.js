// Index file for all usable Functions and Components.

// Importing App Default Components.

import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ChatBot from "./ChatBot/ChatBot";

import Protected from "./Protected Routes/ProtectedRoutes";

// Importing Routes Components.

import { Home, Signin, Signup, Doctors } from "./Routes/Routes";

// Importing/Exporting Sub Components.

export * from "../store/index";

export {
  Header,
  Footer,
  Navbar,
  Protected,
  Home,
  Signin,
  Signup,
  Doctors,
  ChatBot,
};
