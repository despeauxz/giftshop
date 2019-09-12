import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '@components/pages/welcome';

const Routes = () => 
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  </BrowserRouter>;

export default Routes;