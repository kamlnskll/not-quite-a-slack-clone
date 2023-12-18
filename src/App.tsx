import React, {useState, useEffect, useContext} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { useAuth } from './functions/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { WorkspaceContext } from './context/WorkspaceContext';


function App() {

  const { user } = useAuth()
  const [focusedWorkspace, setFocusedWorkspace] = useState({})
  // <WorkspaceContext.Provider value={{focusedWorkspace, setFocusedWorkspace}}>

  // </WorkspaceContext.Provider>
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
