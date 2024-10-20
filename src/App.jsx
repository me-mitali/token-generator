import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './features/auth/login/login'
import Signup from './features/auth/signup/signup';
import Users from './pages/user/users';

import './App.css'

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />           
      <Route path="/signup" element={<Signup/>} />           
      <Route path="/user" element={<Users/>} />           
      
    </Routes>
  </Router>
  )
}

export default App
