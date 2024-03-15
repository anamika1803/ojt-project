import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Components/Navbar'; // Import the Navbar component
const DashboardPage = () => {
  // Define state to hold grid data
  const [studentData, setStudentData] = useState([]);
  // State variables for form
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    role: ''
  });

  // Fetch grid data from API on component mount
  useEffect(() => {
    fetch('http://localhost:3000/student')
      .then(response => response.json())
      .then(data => setStudentData(data.student))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  // Placeholder function for handling edit action
  const handleEdit = (studentId) => {
    // Fetch student data based on studentId
    fetch(`http://localhost:3000/student/${studentId}`)
      .then(response => response.json())
      .then(studentData => {
        // Set the retrieved student data as the editStudent state
        console.log(studentData);
      })
      .catch(error => console.error('Error fetching student data:', error));
  };

  // Placeholder function for handling delete action
  const handleDelete = (studentId) => {
   debugger
   // Get the token from localStorage
   const token = localStorage.getItem('token');
 
   
   if (!token) {
     console.error('No token found. Please log in again.');
     
     return;
   }
 
  
   const userRole = localStorage.getItem('userRole');
 
   // Check if the user's role is admin
   if (userRole !== 'admin') {
     console.log('Only admin users can delete students.');
     return;
   }
 
   // Send the token in the Authorization header
   fetch(`http://localhost:3000/deleteStudent/${studentId}`, {
     method: 'DELETE',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
     }
   })
   .then(response => {
     if (response.ok) {
       console.log(`Student with ID ${studentId} deleted successfully.`);
       // Optionally, you can refresh the student data after deletion
       // For simplicity, we'll just reload the page
       window.location.reload();
     } else {
       console.error(`Failed to delete student with ID ${studentId}.`);
     }
   })
   .catch(error => console.error('Error deleting student:', error));
 };


  // Function to handle form submission
  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    // Code to submit form data to API
    fetch('http://localhost:3000/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        PhoneNo: formData.phoneNumber,
        role: formData.role,
        password: formData.password // Include password field if it's in the form data
      }),
    })
    .then(response => response.json())
    .then(data => {
      debugger
      console.log('Student added successfully:', data);
      notify();
      // Optionally, you can update the studentData state with the new data
      setStudentData([...studentData, data]);
      // Reset form data
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        role: '',
        password: '' // Reset password field
      });
      // Close the form
      setIsFormOpen(false);
      window.location.reload();
    })
    .catch(error => console.error('Error adding student:', error));
  };

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const notify =  () => {
   debugger
   toast.success("Added successfully!");
 };

  return (
   <div className="flex flex-col min-h-screen">
   <Navbar /> {/* Include the Navbar component */}
   <div className="mt-8 px-4 flex-grow">
    <div className="relative overflow-x-auto">
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        {isFormOpen ? 'Close Form' : 'Add New User'}
      </button>
      
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mr-2"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mr-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mr-2"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mr-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add User
          </button>
        </form>
      )}
      
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.PhoneNo}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-500 hover:underline mr-2" onClick={() => handleEdit(student._id)}>Edit</button>
                <button className="text-red-500 hover:underline" onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </div>
    <footer className="mt-auto bg-gray-200 dark:bg-gray-900 py-4 text-center">
        {/* Footer content */}
        © 2024 Your Company. All rights reserved.
      </footer>
      <ToastContainer />
    </div>
    
  );
};

export default DashboardPage;
