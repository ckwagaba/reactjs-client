import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Bucketlist from './bucketlist';

class BucketlistView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listToRender: []
    }
  }

  componentDidMount() {
    this.getBucketlists();
  }

  // get bucketlists
  getBucketlists = () => {
    fetch('http://127.0.0.1:5000/v1/bucketlists/', {
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
        listToRender: responseData.bucketlists_on_page
      });
    });
  }

  render () {
    const rows = this.state.listToRender.map((item) =>
      <Bucketlist key={item.name} bucketlistName={item.name} bucketlistId={item.id} />
    );

    return (
      <div className="landing_page bucketlist_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Bucketlist" itemForm='/createbucketlist' />
        <Main componentToRender={rows} />
      </div>
    );
  }
}

export default BucketlistView;
