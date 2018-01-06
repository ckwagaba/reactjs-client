import React from 'react';
import Nav from './nav';
import SubmitButton from './submit_button';
import { Link } from 'react-router-dom';
import ServerResponse from './server_response';

const BucketlistForm = (props) => {
  return (
    <div className="landing_page bucketlist_view">
      <Nav handleLogout={props.handleLogout} />
      <header>
        <div className="header_left">
          <span>Bucketlist</span>
        </div>
        <div className="header_right">
          <Link to="/bucketlists/">
            <div className="round_button cancel_button">+</div>
          </Link>
        </div>
      </header>
      <main className="entry_form">
        <form onSubmit={props.addBucketlist}>
          <ServerResponse serverResponse={props.APIResponse} />
          <input type="text" className="text_input" placeholder="Bucketlist Name" value={props.value} onChange={props.handleNameInput} />
          <SubmitButton buttonText="Submit" />
        </form>
      </main>
    </div>
  );
}

export default BucketlistForm;
