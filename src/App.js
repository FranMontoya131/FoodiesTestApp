import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
} from 'react-router-dom';


import Layout from '../src/layout/Main';

import Home from '../src/pages/home/index';

const App = () => (
  <Router>
    
      <Switch>
        <Redirect exact from='/' to='home' />
        <Route exact path='/home' component={Home} />
      </Switch>
    
  </Router>
)


export default App;
