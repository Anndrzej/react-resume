import './App.css';
import React from 'react'
import Header from './component/header';
import Footer from './component/footer';
import { CssBaseline } from '@material-ui/core';
import Particles from 'react-particles-js';




function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Footer />
      <Particles params={{
       
      }} />
    </div>
  );
}

export default App;
