import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './features/auth/login/login'
import Signup from './features/auth/signup/signup';
import './App.css'

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />           
      <Route path="/signup" element={<Signup/>} />           
      
    </Routes>
  </Router>
  )
}

export default App
