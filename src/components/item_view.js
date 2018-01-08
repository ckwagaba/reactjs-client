import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Item from './item';

class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToRender: []
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('http://127.0.0.1:5000/v1/bucketlists/' + this.props.match.params.bucketlistId + '/items/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.ACCESSTOKEN
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

  render () {
    const rows = this.state.listToRender.map((item) =>
      <Item key={item.name} itemName={item.name} itemBucket={item.bucketlist} />
    );
    return (
      <div className="landing_page item_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Item" itemForm='/createitem' />
        <Main componentToRender={rows} />
      </div>
    );
  }
}

export default ItemView;
