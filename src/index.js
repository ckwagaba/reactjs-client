import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import RegisterView from './components/register_view';
//import LoginView from './components/login_view';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <div>
      <RegisterView />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
