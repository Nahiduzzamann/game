import React, { useState } from 'react';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    email: 'example@email.com',
    username: 'john_doe',
    dob: '1990-01-01',
    phoneNumber: '123-456-7890',
    fullName: 'John Doe',
    currency: 'BDT',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement submission logic here, e.g., make an API call to update the user's profile
    console.log('Form submitted with data:', userData);
    setIsEditing(false); // Disable editing after submission
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className={`border border-blue-500 p-2 rounded bg-white  w-full ${
                isEditing ? 'cursor-text' : 'cursor-not-allowed'
              }`}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className={`border border-blue-500 p-2 rounded bg-white w-full ${
                isEditing ? 'cursor-text' : 'cursor-not-allowed'
              }`}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleInputChange}
              className={`border border-blue-500 p-2 rounded bg-white w-full ${
                isEditing ? 'cursor-text' : 'cursor-not-allowed'
              }`}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              className={`border border-blue-500 p-2 rounded bg-white w-full ${
                isEditing ? 'cursor-text' : 'cursor-not-allowed'
              }`}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
              className={`border border-blue-500 p-2 rounded bg-white w-full ${
                isEditing ? 'cursor-text' : 'cursor-not-allowed'
              }`}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Currency
            </label>
            <input
              type="text"
              name="currency"
              value={userData.currency}
              onChange={handleInputChange}
              className={`border border-blue-500 p-2 rounded bg-white w-full ${
                isEditing ? 'cursor-text' : 'cursor-not-allowed'
              }`}
              disabled={!isEditing}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleEditClick}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mr-4 hover:bg-blue-700"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
        {isEditing && (
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default MyProfile;
