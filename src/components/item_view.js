import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Item from './item';
import Footer from './footer';
import { BASEURL } from '../config.js';

class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToRender: [],
      searchTerm: '',
      bucketlistName: '',
      totalItems: 0,
      limit: 3,
      currentPage: 1,
      totalPages: 1
    }
  }

  // initial component render
  componentDidMount() {
    this.getItems();
  }

  // when component re-renders
  componentDidUpdate(prevProps, prevState) {
    // get as required
    if(prevState.currentPage !== this.state.currentPage || prevState.searchTerm !== this.state.searchTerm) {
      this.getItems();
    }
  }

  // update currentPage
  setCurrentPage = (currentPage) => {
    this.setState({
      currentPage: currentPage
    });
  }

  // fetch bucketlist items
  getItems = () => {
    this.getTotalItems();
    fetch(BASEURL + '/bucketlists/' + this.props.match.params.bucketlistId + '/items/?q=' + this.state.searchTerm + '&limit=' + this.state.limit + '&page=' + this.state.currentPage, {
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
        this.setState({
          listToRender: responseData.bucketlist_items_on_page,
          bucketlistName: secondaryResponseData.name,
          totalPages: Math.ceil(this.state.totalItems / this.state.limit)
        });
      });
    });
  }

  // get total items
  getTotalItems = () => {
    fetch(BASEURL + '/bucketlists/' + this.props.match.params.bucketlistId + '/items/?q=' + this.state.searchTerm, {
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
        totalItems: responseData.number_of_bucketlist_items_on_page
      });
    });
  }

  // search API for items
  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value,
      currentPage: 1 //this is a hack. needs a solution
    });
  }

  render () {
    // get items
    //this.getItems();

    const rows = this.state.listToRender.map((item) =>
      <Item key={item.id} itemName={item.name} bucketlistId={item.bucketlist_id} itemId={item.id} getItems={this.getItems} />
    );

    // create pageButtons
    const pageButtons = [];
    for (let i = 0; i < this.state.totalPages; i++) {
      pageButtons.push(<span className="page_button" key={i+1} onClick={() => this.setCurrentPage(i+1)}>{i+1}</span>);
    }

    return (
      <div className="landing_page item_view">
        <Nav handleLogout={this.props.handleLogout} />
        <Header currentLocation="Items" itemForm={'/itemform/' + this.props.match.params.bucketlistId} searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} bucketlistName={this.state.bucketlistName} />
        <Main componentToRender={rows} />
        <Footer pageButtons={pageButtons} />
      </div>
    );
  }
}

export default ItemView;
