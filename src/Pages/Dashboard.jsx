import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Components/Navbar';
import EditProductForm from '../Components/EditUserForm'; // Import the EditProductForm component
import AddUserForm from '../Components/AddUserPage'; // Import the AddUserForm component

const DashboardPage = () => {
  const [studentData, setStudentData] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false); // State for Add User form
  const [isEditFormOpen, setIsEditFormOpen] = useState(false); // State for Edit form
  const [editFormData, setEditFormData] = useState(null); // State to hold data for editing
  const [selectedRole, setSelectedRole] = useState('user'); // State for selected role

  useEffect(() => {
    fetchStudentData(selectedRole);
  }, [selectedRole]);

  const fetchStudentData = (role) => {
    fetch(`http://localhost:3000/student?role=${role}`)
      .then(response => response.json())
      .then(data => setStudentData(data.student))
      .catch(error => console.error('Error fetching student data:', error));
  };

  const handleEdit = (studentId) => {
    fetch(`http://localhost:3000/student/${studentId}`)
      .then(response => response.json())
      .then(studentData => {
        setEditFormData(studentData); // Set data for editing
        setIsEditFormOpen(true); // Open the edit form
      })
      .catch(error => console.error('Error fetching student data:', error));
  };

  const handleDelete = (studentId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found. Please log in again.');
      return;
    }

    const userRole = localStorage.getItem('userRole');

    if (userRole !== 'admin') {
      console.log('Only admin users can delete students.');
      return;
    }

    fetch(`http://localhost:3000/deleteStudent/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) {
        toast.success("Deleted successfully!");
        console.log(`Student with ID ${studentId} deleted successfully.`);
      } else {
        console.error(`Failed to delete student with ID ${studentId}.`);
      }
    })
    .catch(error => console.error('Error deleting student:', error));
  };

  const notify = () => {
    toast.success("Done Successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-8 px-4 flex-grow">
        <div className="relative overflow-x-auto">
          {/* Add New User Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={() => setIsAddFormOpen(!isAddFormOpen)}
          >
            {isAddFormOpen ? 'Close Add Form' : 'Add New User'}
          </button>

          {/* Render AddUserForm component if isAddFormOpen is true */}
          {isAddFormOpen && <AddUserForm />}
        
          {/* Render EditProductForm component if isEditFormOpen is true */}
          {isEditFormOpen && (
            <EditProductForm
              formData={editFormData} // Pass formData to EditProductForm
              onClose={() => setIsEditFormOpen(false)} // Close the form
              notify={notify} // Pass notify function for toast notifications
            />
          )}

          {/* Role Dropdown */}
          <div className="mb-4">
            <label htmlFor="role">Select Role:</label>
            <select
              id="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="ml-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Dashboard Table */}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {/* Table Headers */}
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
                {selectedRole === 'user' && (
                  <th scope="col" className="px-6 py-3">
                    Course
                  </th>
                )}
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            {/* Table Body */}
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
                  {selectedRole === 'user' && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.course}
                    </td>
                  )}
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
