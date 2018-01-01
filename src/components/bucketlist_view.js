import React from 'react';
import Nav from './nav';
import Header from './header';

const BucketlistView = () => {
  return (
    <div className="landing_page bucketlist_view">
      <Nav />
      <Header currentLocation="Bucketlist" />
    </div>
  );
}

export default BucketlistView;
