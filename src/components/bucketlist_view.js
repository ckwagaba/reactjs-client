import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Bucketlist from './bucketlist';

class BucketlistView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listToRender: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.getBucketlists();
  }

  // get bucketlists
  getBucketlists = () => {
    fetch('http://127.0.0.1:5000/v1/bucketlists/?q=' + this.state.searchTerm, {
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
        listToRender: responseData.bucketlists_on_page
      });
    });
  }

  // search API for items
  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
    this.getBucketlists();
  }

  render () {
    const rows = this.state.listToRender.map((item) =>
      <Bucketlist key={item.id} bucketlistName={item.name} bucketlistId={item.id} getBucketlists={this.getBucketlists} />
    );

    return (
      <div className="landing_page bucketlist_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Bucketlists" itemForm='/bucketlistform' searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <Main componentToRender={rows} />
      </div>
    );
  }
}

export default BucketlistView;
