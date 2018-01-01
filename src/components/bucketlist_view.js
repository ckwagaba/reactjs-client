import React from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';

const BucketlistView = () => {
  return (
    <div className="landing_page bucketlist_view">
      <Nav />
      <Header currentLocation="Bucketlist" />
      <Main />
    </div>
  );
}

export default BucketlistView;
