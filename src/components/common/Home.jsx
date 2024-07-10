import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate=useNavigate();
  // State to hold the user data
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    mobile: ''
  });

  // Function to fetch and set user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  }
  return (
    <>

      <div className='text-center'>
        <h1>Welcome, {user.username}</h1>
        <p>Email: {user.email}</p>
        <p>Mobile: {user.mobile}</p>
      </div>
      <div className='text-center'>
        <button className='btn btn-danger px-2' onClick={logout} >LogOut</button>
      </div>
    </>
  );
};

export default Home;
