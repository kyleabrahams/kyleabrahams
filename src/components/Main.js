import React from 'react';
import LandingPage from './LandingPage.js';
import Projects from './Projects.js';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Projects" component={Projects} />
    </Switch>
)

export default Main;