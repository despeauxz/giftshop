import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '@components/pages/welcome';
import Auth from '@components/pages/Auth';

const Routes = () => 
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/signup" render={props => <Auth {...props} type="signup" />} />
      <Route exact path="/login" render={props => <Auth {...props} type="login" />} />
    </Switch>
  </BrowserRouter>;

export default Routes;