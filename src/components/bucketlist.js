import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

const Bucketlist = (props) => {
  // handle bucketlist delete
  const handleDelete = (bucketlistId) => {
    console.log('c');
    fetch('http://127.0.0.1:5000/v1/bucketlists/' + props.bucketlistId, {
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
    });
  }

  return (
    <div className="bucketlist">
      <Link to={"/bucketlists/" + props.bucketlistId + "/items/"} className="bucketlist_thumbnail">
        {props.bucketlistName}
      </Link>
      <div className="bucketlist_actions">
        <Button buttonText="Edit" className="edit_button" />
        <Button buttonText="Delete" className="delete_button" onClick={() => handleDelete(props.bucketlistId)} />
      </div>
    </div>
  );
}

export default Bucketlist;
