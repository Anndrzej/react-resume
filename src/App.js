import './App.css';
import React from 'react'
import Header from './component/header';
import Footer from './component/footer';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/home';
import Resume from './pages/resume';
import {Route} from 'react-router-dom'



function App() {

  return (
    <div>
      <CssBaseline />
      <Header />
      <Footer />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />

    </div>
  );
}

export default App;
