import React from 'react';
import Button from './button';

const Bucketlist = (props) => {
  return (
    <div className="bucketlist">
      <div className="bucketlist_thumbnail">
        {props.bucketlistName}
      </div>
      <div className="bucketlist_actions">
        <Button buttonText="Edit" className="edit_button" />
        <Button buttonText="Delete" className="delete_button" />
      </div>
    </div>
  );
}

export default Bucketlist;
