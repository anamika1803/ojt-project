import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import your image
import loginImage from '../assets/login.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Basic password validation (minimum length)
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Clear previous errors
    setError('');

    const loginBody = {
      email,
      password,
    };

    const endpoint = `http://localhost:3000/login`;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginBody),
    })
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
        // Check if the response contains the token and user role
        if (data.token && data.eUser && data.eUser.role) {
          // Store the token and user role in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('userRole', data.eUser.role);
          navigation('/dashboard'); // Redirect to the dashboard after successful login
        } else {
          console.error('Invalid response from login API');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Image on the left */}
      <div className="flex justify-center items-center h-full w-1/2">
        <img src={loginImage} alt="Login" className="h-198 max-w-full" />
      </div>
      
      {/* Login form on the right shadow-md */}
      <div className="max-w-md w-1/2 p-6 rounded-md  ml-4">    
        <h1 className="text-3xl text-center font-bold mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              minLength={6}
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>New Here? </span>
          <Link to="/register" className="text-blue-500">
            Create an Account
          </Link>
        </div>
      </div>
     <div></div>
    </div>
  );
  

}
