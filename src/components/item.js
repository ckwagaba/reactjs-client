import React from 'react';
import Button from './button';

const Item = (props) => {
  return (
    <div className="item">
      <span className="item_name">{props.itemName}</span>
      <span className="item_bucket">{props.itemBucket}</span>
      <span className="item_actions">
        <Button buttonText="Edit" className="edit_button" />
        <Button buttonText="Delete" className="delete_button" />
      </span>
    </div>
  );
}

export default Item;
