import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/common/Home';
import ProtectedRoute from './utils/ProtectedRoute';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoute />} >
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
