import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavigationBar } from "./NavigationBar";
import * as routes from "../routes.js";
import Home from "../pages/Home";
import About from "../pages/About";
import Research from '../pages/Research';
import Work from "../pages/Work";
import { Contact } from '../pages/Contact';
import { Footer } from "./Footer";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <Switch>
                    <Route exact path={routes.HOME} component={Home}/>
                    <Route path={routes.ABOUT} component={About} />
                    <Route path={routes.WORK} component={Work} />
                    <Route path={routes.RESEARCH} component={Research} />
                    <Route path={routes.CONTACT} component={Contact} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;