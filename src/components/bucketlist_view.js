import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Bucketlist from './bucketlist';

class BucketlistView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listToRender: [],
      searchTerm: '',
      totalItems: 0,
      limit: 5,
      currentPage: 1,
      totalPages: 1
    }
  }

  // initial component render
  componentDidMount() {
    // get as required
    this.getBucketlists();
  }

  // when component re-renders
  componentDidUpdate(prevProps, prevState) {
    // get as required
    if(prevState.currentPage !== this.state.currentPage) {
      this.getBucketlists();
    }
  }

  // pagination
  paginate = () => {
    // first get total items
    fetch('http://127.0.0.1:5000/v1/bucketlists/', {
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
        totalItems: responseData.number_of_bucketlists_on_page
      });
      // get totalPages
      if(this.state.totalItems > this.state.limit) {
        this.setState({
          totalPages: Math.ceil(this.state.totalItems / this.state.limit)
        });
      }
    });
  }

  // update currentPage
  setCurrentPage = (currentPage) => {
    this.setState({
      currentPage: currentPage
    });
  }

  // get bucketlists
  getBucketlists = () => {
    fetch('http://127.0.0.1:5000/v1/bucketlists/?q=' + this.state.searchTerm + '&limit=' + this.state.limit + '&page=' + this.state.currentPage, {
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
  }

  render () {
    // render bucketlists
    const rows = this.state.listToRender.map((item) =>
      <Bucketlist key={item.id} bucketlistName={item.name} bucketlistId={item.id} getBucketlists={this.getBucketlists} />
    );

    // create pageButtons
    const pageButtons = [];
    for (let i = 0; i < this.state.totalPages; i++) {
      pageButtons.push(<span className="page_button" key={i+1} onClick={() => this.setCurrentPage(i+1)}>{i+1}</span>);
    }

    return (
      <div className="landing_page bucketlist_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Bucketlists" itemForm='/bucketlistform' searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <Main componentToRender={rows} />
        <Footer pagination={this.paginate} pageButtons={pageButtons} />
      </div>
    );
  }
}

export default BucketlistView;
