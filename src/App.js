import './App.css';
import React from 'react'
import Header from './component/header';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/home';
import Resume from './pages/resume';
import { Route, BrowserRouter } from 'react-router-dom'
import Contacts from './pages/contacts';
import About from './pages/about';
import Skills from './pages/skills';



function App() {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <CssBaseline />
        <Header />
        <div className='app-wrapper-content'>
          <Route exact path='/' component={Home} />
          <Route path='/resume' component={Resume} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
