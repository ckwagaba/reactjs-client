import React from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Item from './item';

const itemsToRender = [
  {name: 'Finish my checkpoints this week.', bucketlist: 'Career'},
  {name: 'Track ten learning outcomes.', bucketlist: 'Career'},
  {name: 'Buy football a kit.', bucketlist: 'Lifestyle'},
  {name: 'Play guitar with more confidence.', bucketlist: 'Music'},
  {name: 'Buy a Fender stratocaster.', bucketlist: 'Music'},
  {name: 'Read the Bible atleast once a week.', bucketlist: 'Spiritual'},
  {name: 'Pay all debts by March.', bucketlist: 'Business'},
  {name: 'Learn to love.', bucketlist: 'Relationship'}
]

const ItemView = () => {
  const rows = itemsToRender.map((item) =>
    <Item key={item.name} itemName={item.name} itemBucket={item.bucketlist} />
  );

  const itemTable = <table className="item_table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Bucket</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>

  return (
    <div className="landing_page item_view">
      <Nav />
      <Header currentLocation="Item" />
      <Main componentToRender={itemTable} />
    </div>
  );
}

export default ItemView;
