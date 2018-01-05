import React from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Bucketlist from './bucketlist';

const listToRender = [
  {name: 'Career'},
  {name: 'Family'},
  {name: 'Lifestyle'},
  {name: 'Spiritual'},
  {name: 'Music'},
  {name: 'Business'},
  {name: 'Leadership'},
  {name: 'Relationship'}
]

const BucketlistView = (props) => {
  const rows = listToRender.map((item) =>
    <Bucketlist key={item.name} bucketlistName={item.name} />
  );

  return (
    <div className="landing_page bucketlist_view">
      <Nav handleLogout={props.handleLogout} />
      <Header currentLocation="Bucketlist" />
      <Main componentToRender={rows} />
    </div>
  );
}

export default BucketlistView;
