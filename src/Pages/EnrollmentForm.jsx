import React, { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnrollmentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    role: 'user', // Set default role to 'user'
    password: '',
    PhoneNo: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.course || !formData.password || !formData.PhoneNo) {
      toast.error("All fields are required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email format");
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.PhoneNo)) {
      toast.error("Invalid phone number format");
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // All validations passed, submit the form
    fetch('http://localhost:3000/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Enrollment successful:', data);
      toast.success("Enrollment successful!");
      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        course: '',
        role: 'user',
        password: '',
        PhoneNo: ''
      });
      onClose(); // Close the form
    })
    .catch(error => {
      console.error('Error enrolling student:', error);
      toast.error("Error enrolling student. Please try again later.");
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96" id="enrollment-form">
        <h2 className="text-2xl font-semibold mb-4">Enroll in a Course</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
            minLength="6"
            required
          />
          <input
            type="text"
            name="PhoneNo"
            placeholder="Phone Number"
            value={formData.PhoneNo}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-4 py-2 mb-2 block w-full"
            required
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md">
              Close
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
