import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';
import LandingPage from './LandingPage';

const Main = () => (
    <Switch>
        <Route exact path ='/' component={LandingPage} />        
        <Route exact path ='/contact' component={Contact} />
        {/* <Route exact path ='/project' component={Project} /> */}
        <Route exact path ='/resume' component={Resume} />
    </Switch>
)

export default Main;