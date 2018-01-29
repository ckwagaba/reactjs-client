import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from './Button';
import { BASEURL } from '../Config.js';

const Bucketlist = (props) => {
  // redirect to bucketlist form
  const callBucketlistForm = (bucketlistName, bucketlistId) => {
    props.history.push('/bucketlistform/' + bucketlistId + '/' + bucketlistName);
  }

  // handle bucketlist delete
  const handleDelete = (bucketlistId) => {
    fetch(BASEURL + '/bucketlists/' + props.bucketlistId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('ACCESSTOKEN')
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseData => {
      // on successful delete: re-render BucketlistView component
      props.getBucketlists();
    });
  }

  return (
    <div className="bucketlist">
      <Link to={"/bucketlists/" + props.bucketlistId + "/items/"} className="bucketlist_thumbnail">
        {props.bucketlistName}
      </Link>
      <div className="bucketlist_actions">
        <Button buttonText="Edit" className="edit_button" onClick={() => callBucketlistForm(props.bucketlistName, props.bucketlistId)} />
        <Button buttonText="Delete" className="delete_button" onClick={() => handleDelete(props.bucketlistId)} />
      </div>
    </div>
  );
}

export default withRouter(Bucketlist);
