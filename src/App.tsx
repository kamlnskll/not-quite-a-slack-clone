import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { ColorInput } from '@mantine/core';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/login'  element={<Login />}/>
  <Route path='/register'  element={<Register />}/>
</Routes>
</BrowserRouter>

</>


//     <div>
//       <ColorInput
//       label="Input label"
//       description="Input description"
//       placeholder="Input placeholder"
//     />
//  <h1>Hello This is Working. This is the app component. Navigation goes here I believe</h1>
//     </div>
  );
}

export default App;
