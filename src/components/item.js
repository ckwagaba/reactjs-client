import React from 'react';
import Button from './button';

const Item = (props) => {
  return (
    <tr className="item">
      <td>{props.itemName}</td>
      <td>{props.itemBucket}</td>
      <td>
        <Button buttonText="Edit" className="edit_button" />
        <Button buttonText="Delete" className="delete_button" />
      </td>
    </tr>
  );
}

export default Item;
