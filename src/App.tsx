import React, {useState, useEffect} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { useAuth } from './functions/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {

  const { user } = useAuth()


  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={user ? <Home /> : <Login />}/>
  <Route path='/login'  element={!user ? <Login /> : <Home />}/>
  <Route path='/register'  element={!user ? <Register /> : <Home />}/>
</Routes>
</BrowserRouter>

</>

  );
}

export default App;
