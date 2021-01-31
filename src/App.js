import './App.css';
import React from 'react'
import { CssBaseline } from '@material-ui/core';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/home';
import Resume from './pages/experience/resume';
import Contacts from './pages/contacts/contacts';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Header from './component/header/header';



function App() {

  return (
    <BrowserRouter>

      <div className='app-wrapper'>
        <CssBaseline />
        <div className='app-wrapper-content'>
          <Header />
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
