import React, { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUserForm = ({ formData, onClose, notify }) => {
  const [updatedFormData, setUpdatedFormData] = useState({ ...formData });

  
  // Function to handle form submission
  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    // Convert phoneNumber to string
    const updatedPhoneNumber = String(updatedFormData.PhoneNo);
    // Create a copy of updatedFormData without the id and password fields
    const { _id, password,__v, ...formDataWithoutIdAndPassword } = updatedFormData;
    // Create updatedFormDataCopy with updated phoneNumber
    const updatedFormDataCopy = { ...formDataWithoutIdAndPassword, PhoneNo: updatedPhoneNumber };
    // Code to submit form data to API for update (PATCH request)
    fetch(`http://localhost:3000/updateStudent/${_id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFormDataCopy),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Student updated successfully:', data);
      notify();
      // Close the form
      onClose();
    })
    .catch(error => console.error('Error updating student:', error));
  };
  

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    setUpdatedFormData({
      ...updatedFormData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>Close</button>
        <h2 className="text-2xl font-semibold mb-4">Edit Student</h2>
        <form onSubmit={handleSubmit}>
          {/* Render form fields with updatedFormData */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={updatedFormData.name}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={updatedFormData.PhoneNo}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={updatedFormData.email}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={updatedFormData.role}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserForm;
