import React, {useState, useEffect, useContext} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { useAuth } from './functions/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { WorkspaceContext } from './context/WorkspaceContext';
import { ChannelContext } from './context/ChannelContext';
import { ProfileContext } from './context/ProfileContext';


function App() {

  const { user } = useAuth()
  const [focusedWorkspace, setFocusedWorkspace] = useState({})
  const [focusedChannel, setFocusedChannel] = useState({})
  const [profileData, setProfileData] = useState({})

  return (
<>
<ProfileContext.Provider value={{profileData, setProfileData}}>
<WorkspaceContext.Provider value={{ focusedWorkspace, setFocusedWorkspace }}>
<ChannelContext.Provider value={{ focusedChannel, setFocusedChannel }}>
<BrowserRouter>
<Routes>
  <Route path='/' element={user ? <Home /> : <Navigate to='/login' /> } />
  <Route path='/login'  element={!user ? <Login /> : <Navigate to='/'/> } /> 
  <Route path='/register'  element={!user ? <Register /> : <Navigate to='/'/>}/>
</Routes>
</BrowserRouter>
</ChannelContext.Provider>
</WorkspaceContext.Provider>
</ProfileContext.Provider>

</>

  );
}

export default App;
