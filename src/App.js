import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://www.uokpl.rs/fpng/f/80-804768_owl-vector-logo.png" alt=""/>
      </header>
      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://i.ytimg.com/vi/RmNhHLsDXHw/maxresdefault.jpg" alt=""/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New posts
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
