import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import SubmitButton from './SubmitButton';
import ServerResponse from './ServerResponse';
import { BASEURL } from '../Config.js';
import store from '../store/Store';

class BucketlistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      APIResponse: '',
      name: '',
      buttonText: 'Add'
    }
  }

componentDidMount() {
  // load with a name value for update case
  if(this.props.match.params.bucketlistName){
    this.setState(
      {
        name: this.props.match.params.bucketlistName,
        buttonText: 'Update'
      }
    );
  }
}

  // handleNameInput
  handleNameInput = (event) => {
    this.setState(
      {
        name: event.target.value
      }
    );
  }

  // create or update bucketlist
  createOrUpdateBucketlist = (requestData, url, method) => {
    fetch(url, {
      method: method,
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': store.getState().authView.ACCESSTOKEN
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseData => {
      // display message in case of an error
      if(responseData.message) {
        this.setState(
          {
            APIResponse: responseData.message,
            name: ''
          }
        );
      }
      else {
        this.props.history.push('/bucketlists/');
      }
    });
  }

  // add bucketlist
  addBucketlist = (event) => {
    event.preventDefault();
    const requestData = {
      'name': this.state.name
    };
    const ENDPOINT = BASEURL + '/bucketlists/';
    // for an update
    if(this.props.match.params.bucketlistId){
      this.createOrUpdateBucketlist(requestData, ENDPOINT + this.props.match.params.bucketlistId, 'PUT');
    }
    // for a creation
    else {
      this.createOrUpdateBucketlist(requestData, ENDPOINT, 'POST');
    }
  }

  render () {
    return (
      <div className="landing_page bucketlist_view">
        <Nav handleLogout={this.props.handleLogout} />
        <header>
          <div className="header_left">
            <span>Bucketlist</span>
          </div>
          <div className="header_right">
            <Link to="/bucketlists/">
              <div className="round_button cancel_button">+</div>
            </Link>
          </div>
        </header>
        <main className="entry_form">
          <form onSubmit={this.addBucketlist}>
            <ServerResponse serverResponse={this.state.APIResponse} />
            <input type="text" className="text_input" placeholder="Bucketlist Name" value={this.state.name} onChange={this.handleNameInput} />
            <SubmitButton buttonText={this.state.buttonText} />
          </form>
        </main>
      </div>
    );
  }
}

export default BucketlistForm;
