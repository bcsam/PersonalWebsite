import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/* <Jumbotron /> */}
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Layout>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Layout>
            </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
