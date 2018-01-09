import React, { Component } from 'react';
import Nav from './nav';
import SubmitButton from './submit_button';
import { Link } from 'react-router-dom';
import ServerResponse from './server_response';

class BucketlistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      APIResponse: '',
      name: ''
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

  // add new bucketlist
  addBucketlist = (event) => {
    event.preventDefault();
    const requestData = {
      'name': this.state.name
    };

    fetch('http://127.0.0.1:5000/v1/bucketlists/', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('ACCESSTOKEN')
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseData => {
      this.setState(
        {
          APIResponse: responseData.message,
          name: ''
        }
      );
      this.props.history.push('/bucketlists/');
    });
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
            <SubmitButton buttonText="Submit" />
          </form>
        </main>
      </div>
    );
  }
}

export default BucketlistForm;
