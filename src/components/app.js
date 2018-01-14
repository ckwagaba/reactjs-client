import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/main.css';
import RegisterView from './register_view';
import LoginView from './login_view';
import BucketlistView from './bucketlist_view';
import ItemView from './item_view';
import BucketlistForm from './bucketlist_form';
import ItemForm from './item_form';

const App = (props) =>  {
    // access protected routes: apparently localStorage does not accept BOOLEANS
    if (localStorage.getItem('userHasAuthenticated') === 'true') {
      return (
        <Switch>
          <Route exact path='/bucketlists/' component={BucketlistView} />
          <Route exact path='/bucketlistform' component={BucketlistForm} />
          <Route exact path='/itemform/:bucketlistId' component={ItemForm} />
          <Route exact path='/bucketlists/:bucketlistId/items/' component={ItemView} />
          <Route exact path='/itemform/:bucketlistId/:itemName/:itemId' component={ItemForm} />
          <Route exact path='/bucketlistform/:bucketlistId/:bucketlistName' component={BucketlistForm} />
        </Switch>
      );
    }
    // logged out
    else {
      return (
        <Switch>
          <Route exact path='/auth/register' component={RegisterView} />
          <Route exact path='/auth/login' component={LoginView} />
          <Route exact path='/' component={RegisterView} />
        </Switch>
      );
    }
}

export default App;
