import React, { Component } from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/MainComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Research from "./pages/Research";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import * as routes from "./routes.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
