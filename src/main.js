import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/pages/Contact';
import LandingPage from './components/pages/LandingPage';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={ LandingPage } />
      <Route path='/contact' component={ Contact } />
      <Route path='/projects' component={ Projects } />
      <Route path='/resume' component={ Resume } />
    </Switch>
  );
};

export default Main;