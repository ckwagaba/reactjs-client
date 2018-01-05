import React from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Item from './item';

const itemsToRender = [
  {name: 'Track ten learning outcomes.', bucketlist: 'Career'},
  {name: 'Buy football a kit.', bucketlist: 'Lifestyle'},
  {name: 'Play guitar with more confidence.', bucketlist: 'Music'},
  {name: 'Buy a Fender stratocaster.', bucketlist: 'Music'},
  {name: 'Learn to love.', bucketlist: 'Relationship'}
]

const ItemView = (props) => {
  const rows = itemsToRender.map((item) =>
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
