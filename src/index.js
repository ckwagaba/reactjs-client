import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './components/register.js';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <div>
      <Register />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
