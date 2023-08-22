import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import './App.css';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <section className='container'> */}
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
        {/* </section> */}
      </Routes>
    </BrowserRouter>
  </Fragment>
);

export default App;
