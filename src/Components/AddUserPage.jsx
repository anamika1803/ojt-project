import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    role: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    role: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.role) {
      errors.role = 'Role is required';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const { name, phoneNumber, email, password, role } = formData;

      // Make API call to add student
      fetch('http://localhost:3000/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          PhoneNo: phoneNumber,
          email,
          password,
          role
        })
      })
      .then(response => {
        if (response.ok) {
          toast.success("User inserted successfully!");
          // Optionally, you can redirect to another page or update the UI
          // For now, just reset the form
          setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            role: '',
            password: ''
          });
          window.location.reload();
        } else {
          console.error('Failed to add user.');
        }
      })
      .catch(error => console.error('Error adding user:', error));
    }
  };

  const handleCancel = () => {
    // Optionally handle cancel action here
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Add New User</h1>
        <form onSubmit={handleSave} className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 w-full ${formErrors.name && 'border-red-500'}`}
          />
          {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 w-full ${formErrors.phoneNumber && 'border-red-500'}`}
          />
          {formErrors.phoneNumber && <p className="text-red-500">{formErrors.phoneNumber}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={`border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 w-full ${formErrors.email && 'border-red-500'}`}
          />
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          <div className="relative mb-2">
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={`border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 w-full ${formErrors.role && 'border-red-500'}`}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {formErrors.role && <p className="text-red-500 absolute bottom-0 left-0">{formErrors.role}</p>}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={`border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 w-full ${formErrors.password && 'border-red-500'}`}
          />
          {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add User
            </button>
          
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddUserPage;
