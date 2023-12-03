import React, {useState, useEffect} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import { auth } from './firebase';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {

const auth = false

  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={auth ? <Home /> : <Login />}/>
  <Route path='/login'  element={!auth ? <Login /> : <Home />}/>
  <Route path='/register'  element={!auth ? <Register /> : <Home />}/>
</Routes>
</BrowserRouter>

</>

  );
}

export default App;
