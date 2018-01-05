import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

const Bucketlist = (props) => {
  return (
    <div className="bucketlist">
      <Link to={"/bucketlists/" + props.bucketlistId} className="bucketlist_thumbnail">
        {props.bucketlistName}
      </Link>
      <div className="bucketlist_actions">
        <Button buttonText="Edit" className="edit_button" />
        <Button buttonText="Delete" className="delete_button" />
      </div>
    </div>
  );
}

export default Bucketlist;
