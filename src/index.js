import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from './Redux/state';

export let rerenderEntireTree = (state) => {
  debugger;
  ReactDOM.render(
      <React.StrictMode>
          <App
            state={state}
          />
      </React.StrictMode>,
      document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)