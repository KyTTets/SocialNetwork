import React from 'react';
// eslint-disable-next-line
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friendspage/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MusicContainer from './components/Music/MusicContainer';

function App(props) {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar  />

      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer dispatch={props.dispatch} 
          store={props.store} />} />
        <Route path='/profile'
          render={() => <Profile store={props.store}/>} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <MusicContainer />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/friends' render={() => <Friends />} />
      </div>

    </div>

  )
}

export default App;
