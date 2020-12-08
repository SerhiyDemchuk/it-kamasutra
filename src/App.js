import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogues from './components/Dialogues/Dialogues';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile"
            render={() => <Profile
              profilePage={props.state.profilePage} 
              updateNewPostText={props.updateNewPostText}
              addPost={props.addPost}/>} />
          <Route path="/dialogues"
            render={() => <Dialogues
              state={props.state.dialoguePage} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
