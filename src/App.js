import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
} from 'react-router-dom';


import Layout from '../src/layout/Main';

import Home from '../src/pages/home/index';
import ErrorRoute from '../src/pages/error/notFound';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Redirect exact from='/' to='home' />
        <Route exact path='/home' component={Home} />
        <Route path='/' component={ErrorRoute} />
      </Switch>
    </Layout>
  </Router>
)


export default App;
