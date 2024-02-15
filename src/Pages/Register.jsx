import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState("");
  const [pNo, setPhoneNo] = useState("");
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
    if (!pNo.trim() || !/^\d{10}$/.test(pNo)) {
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
      pNo,
      email,
      password,
      confirmPassword,
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
    <>
      <div >
        <div>
          <div className=' mt-[1vh]  size-[65vh] ml-[75vh] mb-[50vh]' >
            <div className=" border border-slate-500  bg-slate-500 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative mt-[5vh] mb-[40vh]">
              <h1 className="text-4xl text-white font-bold text-center mb-4">Register</h1>
              <form onSubmit={handleRegister} action="">
                <div className="relative my-4">
                  <label htmlFor="name" className="absolute text-xl text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 font-semibold"> Name</label>
                  <input
                    type="text"
                    id="name"
                    className='block w-60 py-2.5 px-0 text-xl text-white bg-transparent border-0 border-b-2  border-green-500 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer font-semibold'
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div><br></br>
                <div className="relative my-2">
                  <label htmlFor="phoneno" className="absolute text-xl text-orange-600 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 font-semibold"> PhoneNo</label>
                  <input
                    type="text"
                    id="phoneno"
                    className='block w-60 py-2.5 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer'
                    placeholder=""
                    value={pNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                  />
                </div><br></br>
                <div className="relative my-2">
                  <label htmlFor="email" className="absolute text-xl text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 font-semibold"> Email</label>
                  <input
                    type="email"
                    id="email"
                    className='block w-60 py-2.5 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer'
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div><br></br>
                <div className="relative my-2">
                  <label htmlFor="password" className="absolute text-xl text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 font-semibold"> Password</label>
                  <input
                    type="password"
                    id="password"
                    className='block w-60 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-600 focus:border-blue-500 peer'
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div><br></br>
                <div className="relative my-2">
                  <label htmlFor="confirmPassword" className="absolute text-xl text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 font-semibold"> Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className='block w-60 py-2.5 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer'
                    placeholder=""
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div><br></br>

                {error && <div className="text-red-500">{error}</div>}
                <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white py-2 transition-colors duration-300 " type="submit">Register</button>
                <div><br></br>
                  <span className="m-4"> Already Have An Account?<Link className="text-blue-500" to='/Login'> Login</Link></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
);
}