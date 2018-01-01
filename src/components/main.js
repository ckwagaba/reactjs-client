import React, { Component } from 'react';
import Bucketlist from './bucketlist';

class Main extends Component {
  render () {
    return (
      <main>
        <Bucketlist bucketlistName="Career" />
        <Bucketlist bucketlistName="Family" />
        <Bucketlist bucketlistName="Lifestyle" />
        <Bucketlist bucketlistName="Health" />
        <Bucketlist bucketlistName="BucketlistName" />
        <Bucketlist bucketlistName="BucketlistName" />
        <Bucketlist bucketlistName="BucketlistName" />
        <Bucketlist bucketlistName="BucketlistName" />
      </main>
    );
  }
}

export default Main;
