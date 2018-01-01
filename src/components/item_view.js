import React from 'react';
import Nav from './nav';
import Header from './header';

const ItemView = () => {
  return (
    <div className="landing_page item_view">
      <Nav />
      <Header currentLocation="Item" />
    </div>
  );
}

export default ItemView;
