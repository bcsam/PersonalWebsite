import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Research } from './pages/Research';
import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';
import * as routes from './routes.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/* <Jumbotron /> */}
          
            <Switch>
              <Route exact path={routes.HOME} component={Home} />

              <Layout>
                <Route path={routes.ABOUT} component={About} />
                <Route path={routes.WORK} component={Work} />
                <Route path={routes.RESEARCH} component={Research} />
                <Route path={routes.CONTACT} component={Contact} />
              </Layout>

              
              <Route component={NoMatch} />
              

            </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}


// <Switch>
// <Route exact path="/">
//   <Home />
// </Route>
// <Route path="/old-match">
//   <Redirect to="/will-match" />
// </Route>
// <Route path="/will-match">
//   <WillMatch />
// </Route>
// <Route path="*">
//   <NoMatch />
// </Route>
// </Switch>

export default App;
