import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addPost, updateNewPostText, subscribe } from './Redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
      <React.StrictMode>
          <App
              state={state}
              addPost={addPost}
              updateNewPostText={updateNewPostText}
          />
      </React.StrictMode>,
      document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)