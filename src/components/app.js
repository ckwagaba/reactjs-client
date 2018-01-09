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
          <Route path='/bucketlists/' component={BucketlistView} />
          <Route path='/createbucketlist' component={BucketlistForm} />
          <Route path='/createitem/:bucketlistId' component={ItemForm} />
          <Route path='/bucketlists/:bucketlistId/items/' component={ItemView} />
        </Switch>
      );
    }
    // logged out
    else {
      return (
        <Switch>
          <Route path='/auth/register' component={RegisterView} />
          <Route path='/auth/login' component={LoginView} />
          <Route exact path='/' component={RegisterView} />
        </Switch>
      );
    }
}

export default App;
