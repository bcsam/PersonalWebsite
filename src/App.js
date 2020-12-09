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

      // <React.Fragment>
      //   <Router>
      //     <NavigationBar />
      //     <Switch>
      //       <Route exact path={routes.HOME}>
      //         <Home />
      //       </Route>

      //       <Route path={routes.ABOUT}>
      //         <About />
      //       </Route>

      //       <Route path={routes.WORK}>
      //         <Work />
      //       </Route>

      //       <Route path={routes.RESEARCH}>
      //         <Research />
      //       </Route>

      //       <Route path={routes.CONTACT}>
      //         <Contact />
      //       </Route>

      //       <Route>
      //         <NoMatch />
      //       </Route>
      //     </Switch>
      //     <Footer />
      //   </Router>
      // </React.Fragment>
    );
  }
}

export default App;
