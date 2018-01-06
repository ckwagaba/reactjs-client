import React from 'react';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Bucketlist from './bucketlist';

const BucketlistView = (props) => {
  const rows = props.listToRender.map((item) =>
    <Bucketlist key={item.name} bucketlistName={item.name} bucketlistId={item.id} />
  );

  return (
    <div className="landing_page bucketlist_view">
      <Nav handleLogout={props.handleLogout} />
      <Header currentLocation="Bucketlist" itemForm='/createbucketlist' />
      <Main componentToRender={rows} />
    </div>
  );
}

export default BucketlistView;
