import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigation = useNavigate()

  function handleLogin (e) {
    e.preventDefault()

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    // Basic password validation (minimum length)
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Clear previous errors
    setError('')

    const body = {
      email,
      password
    }

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Login failed with status ${response.status}`)
        }
      })
      .then(res => {
        localStorage.setItem('userToken', res.token)
        console.log(res)
        alert('Login success')
        navigation('/dashboard')
        // Use your navigation method here to redirect to the dashboard
        // For example, if you are using react-router, you might do:
        // history.push("/dashboard");
      })
      .catch(error => {
        console.error(error)
        alert(`Login failed.\nError: ${error.message}`)
      })
  }

  return (
    <>
      <div className=' mt-[5vh]  size-[65vh] ml-[75vh] mb-[20vh]'>
        <div>
        
        
          <div className=' border-style:solid bg-slate-500 border border-slate-500 rounded-md p-7 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative font-semibold '>
            <h1 className=' text-4xl  text-white font-bold text-center mb-4'>
              Login
            </h1>
            <form onSubmit={handleLogin} action=''>
              <div className=' relative my-4'>
                <label
                  htmlFor='email'
                  className='absolute text-xl text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6 font-semibold'
                >
                  {' '}
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus: border-blue-500 focus:outline-none  focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer font-semibold'
                  placeholder=''
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <br></br>
              <div className=' relative my-4'>
                <label
                  htmlFor='password'
                  className='absolute text-xl text-orange-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'
                >
                  {' '}
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearance-none dark:focus: border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-600 focus:border-blue-300 peer'
                  placeholder=''
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
              </div>
              <br></br>
              {error && <div className='text-red-500'>{error}</div>}
              <div className='flex justify-between items-center'>
                <div className=' flex gap-3 items-center'>
                  <input type='checkbox' name='' id='' />
                  <label htmlFor='Remember Me'> &nbsp;&nbsp;Remember Me</label>
                </div>
                <br></br>
                <div>
                  <Link to='' className=' text-blue-500 flex-row'>
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <br></br>
              <button
                className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white py-2 transition-colors duration-300'
                type='submit'
              >
                Login
              </button>
              <div>
                <br></br>
                <span className='m-4'>
                  New Here?{'  '}
                  <Link className='text-blue-500' to='/Register'>
                    Create an Account
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}






// import { useContext, useState, useEffect } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
// //import UserContext from "../../Hooks/UserContext";
// //import axios from "../../config/api/axios";
// import { FaUniversity } from "react-icons/fa";
// import { PiStudentThin, PiUserThin, PiSpinnerGapBold } from "react-icons/pi";
// //import CircleDesign from "../Layouts/CircleDesign";
// //import ErrorStrip from "../ErrorStrip";

// const Login = () => {
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(UserContext);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [error, setError] = useState("");
//   const [buttonText, setButtonText] = useState("Login");
//   const [message, setMessage] = useState("");

//   const slowLoadingIndicator = () => {
//     setTimeout(() => {
//       setMessage(
//         "NOTE:Web Services on the free instance type are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request. This will cause a delay in the response of the first request after a period of inactivity while the instance spins up."
//       );
//     }, 4000);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (userType === "") {
//       setError({
//         response: {
//           data: "Select User Type",
//         },
//       });
//     } else {
//       setButtonText("Loading...");
//       slowLoadingIndicator();
//       try {
//         const response = await axios.post("/auth/login/" + userType, {
//           username,
//           password,
//         });
//         await setUser({ ...response.data, userType });
//         localStorage.setItem(
//           "userDetails",
//           JSON.stringify({ ...response.data, userType })
//         );
//       } catch (err) {
//         setError(err);
//         setButtonText("Login");
//       }
//     }
//   };

//   useEffect(() => {
//     if ("userDetails" in localStorage) {
//       setUser(JSON.parse(localStorage.getItem("userDetails")));
//     }
//     setUserType("");
//     setMessage("");
//   }, [setUserType, setMessage, setUser]);

//   return (
//     <>
//       {!user?._id ? (
//         <main className="relative z-0 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-400 to-slate-300 text-slate-950 dark:from-slate-800 dark:to-slate-950 dark:text-slate-300">
//           {message && !error && (
//             <header className="absolute top-0 w-full bg-violet-500/50 p-2 text-xs dark:bg-slate-700/50 lg:text-base">
//               {message}
//             </header>
//           )}
//           <CircleDesign />
//           <section className="z-0 mb-4 flex items-center gap-2 whitespace-nowrap text-6xl md:text-8xl lg:gap-4">
//             <FaUniversity />
//             <h1 className="font-spectral font-semibold  text-slate-900  dark:text-slate-300 ">
//               K
//               <span className="inline-block h-10 w-10 rounded-full bg-violet-900 dark:bg-violet-600 md:h-14 md:w-14 xl:h-14 xl:w-14"></span>
//               llege
//             </h1>
//           </section>
//           <section className="z-0 w-[65%] justify-self-center rounded-lg bg-slate-100 opacity-80 hover:opacity-100 focus:opacity-100  dark:bg-[#060913] sm:w-[min(50%,360px)] md:w-[min(40%,360px)] xl:w-[min(23%,360px)] ">
//             <form
//               className="tracking-wide placeholder:text-slate-200 dark:placeholder:text-violet-200 "
//               onSubmit={(e) => handleLogin(e)}
//             >
//               <section className="flex flex-col items-center justify-start ">
//                 <div className="flex w-full text-lg ">
//                   <label
//                     className="radio relative flex w-1/2 cursor-pointer flex-col items-center rounded-tl-lg p-4 dark:border-l-[1.5px] dark:border-t-[1.5px]  dark:border-solid dark:border-violet-900"
//                     htmlFor="teacher"
//                   >
//                     Teacher
//                     <input
//                       className="absolute opacity-0"
//                       type="radio"
//                       value="teacher"
//                       id="teacher"
//                       name="userType"
//                       onClick={() => setUserType("teacher")}
//                     />
//                   </label>
//                   <label
//                     className="radio relative flex w-1/2 cursor-pointer flex-col items-center rounded-tr-lg p-4 dark:border-r-[1.5px] dark:border-t-[1.5px] dark:border-solid dark:border-violet-900"
//                     htmlFor="student"
//                   >
//                     Student
//                     <input
//                       className="absolute opacity-0"
//                       type="radio"
//                       value="student"
//                       id="student"
//                       name="userType"
//                       onClick={() => setUserType("student")}
//                     />
//                   </label>
//                 </div>
//                 <div className="flex w-full justify-center p-1 pt-0 text-8xl dark:border-x-[1.5px] dark:border-solid dark:border-violet-900 md:p-3 md:pt-0">
//                   {userType === "student" ? (
//                     <PiStudentThin className="animate-slide rounded-full border-2 border-slate-900 p-1 font-light dark:border-slate-300 md:p-2" />
//                   ) : userType === "teacher" ? (
//                     <PiUserThin className="animate-slide rounded-full border-2 border-slate-900 p-1 font-light dark:border-slate-300 md:p-2" />
//                   ) : (
//                     <FaUniversity className="animate-fadeIn rounded-full border-2 border-slate-900 p-1 font-light dark:border-slate-300 md:p-2" />
//                   )}
//                 </div>
//               </section>
//               <section className="rounded-b-lg px-4 pb-4 dark:border-x-[1.5px] dark:border-b-[1.5px] dark:border-solid dark:border-violet-900">
//                 <input
//                   className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
//                   placeholder="username"
//                   id="username"
//                   type="text"
//                   required
//                   autoComplete="off"
//                   name="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                   className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
//                   placeholder="password"
//                   id="password"
//                   type="password"
//                   required
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   className="mb-1 flex h-10 w-full items-center justify-center gap-1 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 p-1 font-bold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900 disabled:cursor-wait dark:border-violet-300 dark:bg-violet-600 dark:text-slate-50 dark:hover:bg-slate-900 dark:focus:bg-slate-900 lg:mb-2 "
//                   type="submit"
//                   value="Login"
//                   disabled={buttonText !== "Login"}
//                   onClick={(e) => handleLogin(e)}
//                 >
//                   {!(buttonText === "Login") && (
//                     <PiSpinnerGapBold className="animate-spin" />
//                   )}
//                   {buttonText}
//                 </button>
//                 {error ? <ErrorStrip error={error} /> : ""}
//                 <p className="inline text-slate-600 dark:text-violet-200">
//                   Click to{" "}
//                 </p>
//                 <button
//                   type="button"
//                   className="font-semibold text-violet-600 decoration-2 hover:underline focus:underline   dark:text-violet-400"
//                   onClick={() => navigate("./register/reg_student")}
//                 >
//                   Register
//                 </button>
//               </section>
//             </form>
//           </section>
//         </main>
//       ) : (
//         <Navigate to="./src/Pages/dashboard" />
//       )}
//     </>
//   );
// };

// export default Login;
