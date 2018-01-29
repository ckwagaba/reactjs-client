import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from './Button';
import { BASEURL } from '../Config.js';

const Item = (props) => {
  // redirect to bucketlist form
  const callItemForm = (bucketlistId, itemName, itemId) => {
    props.history.push('/itemform/' + bucketlistId + '/' + itemName + '/' + itemId);
  }

  // handle item delete
  const handleDelete = (bucketlistId) => {
    fetch(BASEURL + '/bucketlists/' + props.bucketlistId + '/items/' + props.itemId, {
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
      // on successful delete: re-render ItemtView component
      props.getItems();
    });
  }

  return (
    <div className="item">
      <span className="item_name">{props.itemName}</span>
      <span className="item_bucket">{props.itemBucket}</span>
      <span className="item_actions">
        <Button buttonText="Edit" className="edit_button" onClick={() => callItemForm(props.bucketlistId, props.itemName, props.itemId)} />
        <Button buttonText="Delete" className="delete_button" onClick={() => handleDelete(props.itemId)} />
      </span>
    </div>
  );
}

export default withRouter(Item);
