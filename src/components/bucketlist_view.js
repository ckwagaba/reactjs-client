import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Bucketlist from './bucketlist';
import { BASEURL } from '../config.js';

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
    // if the current page changes, or the search term changes.
    if(prevState.currentPage !== this.state.currentPage || prevState.searchTerm !== this.state.searchTerm) {
      this.getBucketlists();
    }
  }

  // update currentPage
  setCurrentPage = (currentPage) => {
    this.setState({
      currentPage: currentPage
    });
  }

  // get bucketlists
  getBucketlists = () => {
    this.getTotalItems();
    fetch(BASEURL + '/bucketlists/?q=' + this.state.searchTerm + '&limit=' + this.state.limit + '&page=' + this.state.currentPage, {
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
        listToRender: responseData.bucketlists_on_page,
        totalPages: Math.ceil(this.state.totalItems / this.state.limit)
      });
    });
  }

  // get total items
  getTotalItems = () => {
    fetch(BASEURL + '/bucketlists/?q=' + this.state.searchTerm, {
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
    });
  }

  // search API for items
  handleSearch = (event) => {
    /*
    NOTES
    Neither Search nor pagination has a problem.
    Seeing that they both depend on the limit,
    pagination distributes the item between pages depending on the limit and the total items.
    Having 3 items from a search, and a limit of 5 causes the second page to have nothing because they're all on the first page!
    The solution is to re-render the pagination buttons depending on the search results.
    Meaning we update the total number of items state variable after every search.
    */
    this.setState({
      searchTerm: event.target.value,
      currentPage: 1 //this is a hack. needs a solution
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
        <Footer pageButtons={pageButtons} />
      </div>
    );
  }
}

export default BucketlistView;
