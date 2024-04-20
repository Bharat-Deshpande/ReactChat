import { useState } from 'react'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Register/>
    // <Login/>
    <Home/>
  );
}

export default App
