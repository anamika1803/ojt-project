import React, { useEffect, useState } from "react";
import axios from "axios";
import userImage from "../assets/userImg.png"; // Assuming user image is stored in the assets folder

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user ID from localStorage
    const userId = localStorage.getItem("id");
    if (userId) {
      // Fetch user data using the user ID
      fetchUserData(userId);
    }
  }, []);

  // Function to fetch user data from the API
  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/student/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex">
        {/* Left Side (Image) */}
        <div className="w-1/2 flex justify-center items-center bg-gray-100">
          <img className="h-64 w-64 rounded-full" src={userImage} alt="User" />
        </div>
        {/* Right Side (User Details) */}
        <div className="w-1/2 bg-blue-50 flex justify-center items-center">
          <div className="p-6 text-center">
            <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
            {user && (
              <div>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Name:</span> {user.name}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Phone Number:</span>{" "}
                  {user.PhoneNo}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Role:</span> {user.role}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 dark:bg-gray-900 py-4 text-center">
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
}

export default ProfilePage;
