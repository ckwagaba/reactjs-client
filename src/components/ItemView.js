import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Item from './Item';
import Footer from './Footer';
import { BASEURL } from '../Config.js';
import store from '../store/Store';
import * as ActionTypes from '../actions/ActionTypes'

class ItemView extends Component {
  // initial component render
  componentDidMount() {
    this.getItems();
  }

  // when component re-renders
  componentDidUpdate(prevProps , prevState) {
    // get as required
    if(prevProps.currentPage !== this.props.itemState.currentPage || prevProps.searchTerm !== this.props.itemState.searchTerm) {
      this.getItems();
    }
  }

  // update currentPage
  setCurrentPage = (currentPage) => {
    store.dispatch({
      type: ActionTypes.SET_CURRENT_PAGE,
      payload: currentPage
    });
  }

  // fetch bucketlist items
  getItems = () => {
    this.getTotalItems();
    fetch(BASEURL + '/bucketlists/' + this.props.match.params.bucketlistId + '/items/?q=' + this.props.itemState.searchTerm + '&limit=' + this.props.itemState.limit + '&page=' + this.props.itemState.currentPage, {
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
      // get bucketlist name
      fetch(BASEURL + '/bucketlists/' + this.props.match.params.bucketlistId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('ACCESSTOKEN')
        }
      })
      .then(secondaryResponse => {
        return secondaryResponse.json()
      })
      .then(secondaryResponseData => {
        store.dispatch({
          type: ActionTypes.STORE_LIST,
          payload: {
            listToRender: responseData.bucketlist_items_on_page,
            bucketlistName: secondaryResponseData.name,
            totalPages: Math.ceil(this.props.itemState.totalItems / this.props.itemState.limit)
          }
        });
      });
    });
  }

  // get total items
  getTotalItems = () => {
    fetch(BASEURL + '/bucketlists/' + this.props.match.params.bucketlistId + '/items/?q=' + this.props.itemState.searchTerm, {
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
        type: ActionTypes.SET_TOTAL,
        payload: responseData.number_of_bucketlist_items_on_page
      });
    });
  }

  // search API for items
  handleSearch = (event) => {
    store.dispatch({
      type: ActionTypes.SET_SEARCH_TERM,
      payload: {
        searchTerm: event.target.value,
        currentPage: 1 //this is a hack. needs a solution
      }
    });
  }

  render () {
    // get items
    //this.getItems();

    const rows = this.props.itemState.listToRender.map((item) =>
      <Item key={item.id} itemName={item.name} bucketlistId={item.bucketlist_id} itemId={item.id} getItems={this.getItems} />
    );

    // create pageButtons
    const pageButtons = [];
    for (let i = 0; i < this.props.itemState.totalPages; i++) {
      pageButtons.push(<span className="page_button" key={i+1} onClick={() => this.setCurrentPage(i+1)}>{i+1}</span>);
    }

    return (
      <div className="landing_page item_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Items" itemForm={'/itemform/' + this.props.match.params.bucketlistId} searchTerm={this.props.itemState.searchTerm} handleSearch={this.handleSearch} bucketlistName={this.props.itemState.bucketlistName} />
        <Main componentToRender={rows} />
        <Footer pageButtons={pageButtons} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    itemState: store.itemView
  }
}

export default connect(mapStateToProps)(ItemView);
