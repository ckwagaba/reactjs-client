import React from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Item from './item';

const ItemView = (props) => {
  const rows = props.listToRender.map((item) =>
    <Item key={item.name} itemName={item.name} itemBucket={item.bucketlist} />
  );

  return (
    <div className="landing_page item_view">
      <Nav handleLogout={props.handleLogout} />
      <Header currentLocation="Item" />
      <Main componentToRender={rows} />
    </div>
  );
}

export default ItemView;
