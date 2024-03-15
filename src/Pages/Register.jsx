import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    // Basic name validation
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    // Basic phone number validation
    if (!phoneno.trim() || !/^\d{10}$/.test(phoneno)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    // Basic email validation
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Basic password validation (minimum length)
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear previous errors
    setError("");

    // Continue with registration logic
    const body = {
      name,
      PhoneNo: phoneno,
      email,
      password,
    };
  
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Registration failed with status ${response.status}`);
        }
      })
      .then(data => {
        alert(data.message);
      })
      .catch(error => {
        console.error(error);
        alert('Registration failed. Please check the console for details.');
      });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl text-center font-bold mb-6">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneno" className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneno"
              value={phoneno}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
