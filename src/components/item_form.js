import React, { Component } from 'react';
import Nav from './nav';
import SubmitButton from './submit_button';
import { Link } from 'react-router-dom';
import ServerResponse from './server_response';

class ItemForm extends Component {
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

  // add item to bucketlist
  addItem = (event) => {
    event.preventDefault();
    const requestData = {
      'name': this.state.name
    }
    fetch('http://127.0.0.1:5000/v1/bucketlists/' + this.props.match.params.bucketlistId + '/items/', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.ACCESSTOKEN
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
    });
  }

  render () {
    return (
      <div className="landing_page">
        <Nav handleLogout={this.props.handleLogout} />
        <header>
          <div className="header_left">
            <span>Item</span>
          </div>
          <div className="header_right">
            <Link to="/bucketlists/">
              <div className="round_button cancel_button">+</div>
            </Link>
          </div>
        </header>
        <main className="entry_form">
          <form onSubmit={this.addItem}>
            <ServerResponse serverResponse={this.state.APIResponse} />
            <input type="text" className="text_input" placeholder="Item Name" value={this.state.name} onChange={this.handleNameInput} />
            <SubmitButton buttonText="Submit" />
          </form>
        </main>
      </div>
    );
  }
}

export default ItemForm;
