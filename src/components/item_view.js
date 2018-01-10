import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Item from './item';

class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToRender: [],
      searchTerm: ''
    }
  }
  componentDidMount() {
    this.getItems();
  }

  // fetch bucketlist items
  getItems = () => {
    fetch('http://127.0.0.1:5000/v1/bucketlists/' + this.props.match.params.bucketlistId + '/items/?q=' + this.state.searchTerm, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('ACCESSTOKEN')
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseData => {
      this.setState({
        listToRender: responseData.bucketlist_items_on_page
      });
    });
  }

  // search API for items
  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
    this.getItems();
  }

  render () {
    const rows = this.state.listToRender.map((item) =>
      <Item key={item.id} itemName={item.name} bucketlistId={item.bucketlist_id} itemId={item.id} getItems={this.getItems} />
    );
    return (
      <div className="landing_page item_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Items" itemForm={'/itemform/' + this.props.match.params.bucketlistId} searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <Main componentToRender={rows} />
      </div>
    );
  }
}

export default ItemView;
