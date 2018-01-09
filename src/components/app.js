import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../css/main.css';
import RegisterView from './register_view';
import LoginView from './login_view';
import BucketlistView from './bucketlist_view';
import ItemView from './item_view';
import BucketlistForm from './bucketlist_form';
import ItemForm from './item_form';

const App = (props) =>  {
    // access protected routes
    if (localStorage.getItem('userHasAuthenticated') === 'true') {
      return (
        <Switch>
          <Route path='/createbucketlist' component={BucketlistForm} />
          <Route path='/createitem/:bucketlistId' render={(props) => (
            <ItemForm {...props} />
          )} />
          <Route path='/bucketlists/:bucketlistId/items/' render={(props) => (
            <ItemView {...props} />
          )} />
          <Route path='/bucketlists/' component={BucketlistView} />
          <Redirect to="/bucketlists/" />
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
          <Redirect to="/" />
        </Switch>
      );
    }
}

export default App;
