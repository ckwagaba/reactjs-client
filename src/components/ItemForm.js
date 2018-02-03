import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import SubmitButton from './SubmitButton';
import ServerResponse from './ServerResponse';
import { BASEURL } from '../Config.js';
import store from '../store/Store';

class ItemForm extends Component {
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
    if(this.props.match.params.itemName){
      this.setState(
        {
          name: this.props.match.params.itemName,
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

  // create or update item
  createOrUpdateItem = (requestData, url, method) => {
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
        this.props.history.push('/bucketlists/' + this.props.match.params.bucketlistId + '/items/');
      }
    });
  }

  // add item to bucketlist
  addItem = (event) => {
    event.preventDefault();
    const requestData = {
      'name': this.state.name
    }
    const ENDPOINT = BASEURL + '/bucketlists/' + this.props.match.params.bucketlistId + '/items/';
    // for an update
    if(this.props.match.params.itemId){
      this.createOrUpdateItem(requestData, ENDPOINT + this.props.match.params.itemId, 'PUT');
    }
    // for a creation
    else {
      this.createOrUpdateItem(requestData, ENDPOINT, 'POST');
    }
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
            <Link to={'/bucketlists/' + this.props.match.params.bucketlistId + '/items/'}>
              <div className="round_button cancel_button">+</div>
            </Link>
          </div>
        </header>
        <main className="entry_form">
          <form onSubmit={this.addItem}>
            <ServerResponse serverResponse={this.state.APIResponse} />
            <input type="text" className="text_input" placeholder="Item Name" value={this.state.name} onChange={this.handleNameInput} />
            <SubmitButton buttonText={this.state.buttonText} />
          </form>
        </main>
      </div>
    );
  }
}

export default ItemForm;
