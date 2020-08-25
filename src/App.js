import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Research } from "./pages/Research";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import * as routes from "./routes.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/* <Jumbotron /> */}

          <Switch>
            <ScrollToTop>
              <Route exact path={routes.HOME} component={Home} />

              <Layout>
                <Route path={routes.ABOUT} component={About} />
                <Route path={routes.WORK} component={Work} />
                <Route path={routes.RESEARCH} component={Research} />
                <Route path={routes.CONTACT} component={Contact} />
              </Layout>
            </ScrollToTop>
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default App;
