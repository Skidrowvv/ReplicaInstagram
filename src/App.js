import React from 'react';
import Header from './component/Header/Header.js';
import Feeds from './component/Feeds/Feeds.js';
import Profile from './component/Profile/Profile.js';
import {BrowserRouter as Router,Route} from 'react-router-dom'


function App() {
  return (
   <Router>

    <div className='App'>

   		<Header/>
   		<Route path='/' component={Feeds} exact/>
   		<Route path='/profile' component={Profile} exact/>

    </div></Router>
  );
}

export default App;
