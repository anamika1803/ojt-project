import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Components/Navbar';
import EditProductForm from '../Components/EditUserForm'; // Import the EditProductForm component

const DashboardPage = () => {
  const [studentData, setStudentData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null); // State to hold data for editing

  useEffect(() => {
    fetch('http://localhost:3000/student')
      .then(response => response.json())
      .then(data => setStudentData(data.student))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  const handleEdit = (studentId) => {
    fetch(`http://localhost:3000/student/${studentId}`)
      .then(response => response.json())
      .then(studentData => {
        setEditFormData(studentData); // Set data for editing
        setIsFormOpen(true); // Open the edit form
      })
      .catch(error => console.error('Error fetching student data:', error));
  };

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
        // window.location.reload();
      } else {
        console.error(`Failed to delete student with ID ${studentId}.`);
      }
    })
    .catch(error => console.error('Error deleting student:', error));
  };


  const notify = () => {
    toast.success("Added successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <div className="mt-8 px-4 flex-grow">
        <div className="relative overflow-x-auto">
          {/* Add New User Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            {isFormOpen ? 'Close Form' : 'Add New User'}
          </button>

          {/* Render EditProductForm if isFormOpen is true */}
          {isFormOpen && (
            <EditProductForm
              formData={editFormData} // Pass formData to EditProductForm
              onClose={() => setIsFormOpen(false)} // Close the form
              notify={notify} // Pass notify function for toast notifications
            />
          )}

          {/* Dashboard Table */}
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
        © 2024 Your Company. All rights reserved.
      </footer>
      <ToastContainer />
    </div>
  );
};

export default DashboardPage;
