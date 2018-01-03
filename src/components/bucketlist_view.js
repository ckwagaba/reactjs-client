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

const BucketlistView = () => {
  const rows = listToRender.map((item) =>
    <Bucketlist key={item.name} bucketlistName={item.name} />
  );

  return (
    <div className="landing_page bucketlist_view">
      <Nav />
      <Header currentLocation="Bucketlist" />
      <Main componentToRender={rows} />
    </div>
  );
}

export default BucketlistView;
