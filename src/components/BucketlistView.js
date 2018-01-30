import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Bucketlist from './Bucketlist';
import { BASEURL } from '../Config.js';
import store from '../store/Store';

class BucketlistView extends Component {
  // initial component render
  componentDidMount() {
    // get as required
    this.getBucketlists();
  }

  // when component re-renders
  componentDidUpdate(prevProps) {
    // if the current page changes, or the search term changes.
    if(prevProps.bucketlistState.currentPage !== this.props.bucketlistState.currentPage || prevProps.bucketlistState.searchTerm !== this.props.bucketlistState.searchTerm) {
      this.getBucketlists();
    }
  }

  // update currentPage
  setCurrentPage = (currentPage) => {
    store.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: currentPage
    });
  }

  // get bucketlists
  getBucketlists = () => {
    this.getTotalItems();
    fetch(BASEURL + '/bucketlists/?q=' + this.props.bucketlistState.searchTerm + '&limit=' + this.props.bucketlistState.limit + '&page=' + this.props.bucketlistState.currentPage, {
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
      store.dispatch({
        type: 'STORE_BUCKETLISTS',
        payload: {
          listToRender: responseData.bucketlists_on_page,
          totalPages: Math.ceil(this.props.bucketlistState.totalItems / this.props.bucketlistState.limit)
        }
      });
    });
  }

  // get total items
  getTotalItems = () => {
    fetch(BASEURL + '/bucketlists/?q=' + this.props.bucketlistState.searchTerm, {
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
      store.dispatch({
        type: 'SET_TOTAL_BUCKETLISTS',
        payload: responseData.number_of_bucketlists_on_page
      });
    });
  }

  // search API for items
  handleSearch = (event) => {
    store.dispatch({
      type: 'SET_SEARCH_TERM',
      payload: {
        searchTerm: event.target.value,
        currentPage: 1 //this is a hack. needs a solution
      }
    });
  }

  render () {
    // render bucketlists
    const rows = this.props.bucketlistState.listToRender.map((item) =>
      <Bucketlist key={item.id} bucketlistName={item.name} bucketlistId={item.id} getBucketlists={this.getBucketlists} />
    );

    // create pageButtons
    const pageButtons = [];
    for (let i = 0; i < this.props.bucketlistState.totalPages; i++) {
      pageButtons.push(<span className="page_button" key={i+1} onClick={() => this.setCurrentPage(i+1)}>{i+1}</span>);
    }

    return (
      <div className="landing_page bucketlist_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Bucketlists" itemForm='/bucketlistform' searchTerm={this.props.bucketlistState.searchTerm} handleSearch={this.handleSearch} />
        <Main componentToRender={rows} />
        <Footer pageButtons={pageButtons} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    bucketlistState: store.bucketlistView
  };
}

export default connect(mapStateToProps)(BucketlistView);
