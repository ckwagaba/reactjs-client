import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../store/Store';
import * as ActionTypes from '../actions/ActionTypes'

class Nav extends Component {
  // handle logout
  handleLogout = (event) => {
    // reset ACCESSTOKEN and userName in Redux store
    store.dispatch({
      type: ActionTypes.STORE_ACCESSTOKEN,
      payload: {
        ACCESSTOKEN: '',
        userName: '',
        userHasAuthenticated: false
      }
    });
    this.props.history.push('/auth/login');
  }

  render () {
    return (
      <nav>
        <div className="nav_links">
          <ul className="menu">
            <li><Link to="/bucketlists/">Bucketlists</Link></li>
          </ul>
        </div>
        <div className="nav_options">
          <ul className="menu">
            <li className="username">{store.getState().authView.userName}</li>
            <li onClick={this.handleLogout} className="logout_button">Logout</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
