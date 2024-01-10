import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  console.log( newPassword, confirmNewPassword );

  const togglePasswordVisibility = (passwordType) => {
    switch (passwordType) {
      case 'currentPassword':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'newPassword':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirmNewPassword':
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    // You can implement password update logic here, e.g., make an API call
    console.log('Password updated with data:', currentPassword);
    // Reset the form after successful password update
    
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Change Password</h1>

      <form onSubmit={handleUpdatePassword}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              name="currentPassword"
              value={currentPassword}
              onChange={(e)=>setCurrentPassword(e.target.value)}
              className="border p-2 w-full"
              required
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => togglePasswordVisibility('currentPassword')}
            >
              {showCurrentPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              name="newPassword"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value)
              }}
              className="border p-2 w-full"
              required
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => togglePasswordVisibility('newPassword')}
            >
              {showNewPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
              }}
              className={`border p-2 w-full ${
                newPassword === confirmNewPassword ? '' : 'border-red-500'
              }`}
              required
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => togglePasswordVisibility('confirmNewPassword')}
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
          </div>
          {newPassword === confirmNewPassword || (
            <p className="text-red-500 text-sm mt-2">
              New password and confirm password must match.
            </p>
          )}
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ${
            newPassword === confirmNewPassword ? 'hover:bg-blue-700 ' : 'cursor-not-allowed opacity-50'
          }`}
       
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
