import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../css/main.css';
import RegisterView from './register_view';
import LoginView from './login_view';
import BucketlistView from './bucketlist_view';
import ItemView from './item_view';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      accessToken: ''
    }
  }

  render () {
    return (
      <div>
        {
          this.state.accessToken
          ?
          <Switch>
            <Route exact path='/' component={BucketlistView} />
            <Route path='/bucketlists/' component={BucketlistView} />
            <Route path='/bucketlists/:bucketlist_id' component={BucketlistView} />
            <Route path='/items/' component={ItemView} />
            <Route path='/bucketlists/:bucketlist_id/items/' component={ItemView} />
            <Route path='/bucketlists/:bucketlist_id/items/:item_id' component={ItemView} />
          </Switch>
          :
          <Switch>
            <Route exact path='/' component={RegisterView} />
            <Route path='/auth/register' component={RegisterView} />
            <Route path='/auth/login' component={LoginView} />
          </Switch>
        }
      </div>
    );
  }
}

export default App;
