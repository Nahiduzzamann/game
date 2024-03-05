import changePassword from '@/modules/changePassword';
import { Card, CardBody, CardHeader, Typography, Alert } from '@material-tailwind/react';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const ChangePasswordForm = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');

  useEffect(()=>{
    const user = Cookies.get('user');
    if(user){
        setEmail(JSON.parse(user).email)
    }
  },[])

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleToggleShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleToggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await changePassword(email, oldPassword, newPassword);
      setAlertType('success');
      setAlertMessage('Password changed successfully!');
    } catch (error) {
      setAlertType('error');
      setAlertMessage('Failed to change password. Please try again.');
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">
          Change your old password
        </Typography>
      </CardHeader>
      <CardBody className=" px-0 pt-0 pb-2">
        {alertMessage && <Alert color={alertType}>{alertMessage}</Alert>}
        <form onSubmit={handleSubmit} className="w-full bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="form-input mt-1 block w-full rounded-lg border border-blue-gray-500 px-4 py-2"
              placeholder='Enter your email'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-gray-700">Old Password:</label>
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                id="oldPassword"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
                className="form-input mt-1 block w-full rounded-lg pr-10 border border-blue-gray-500 px-4 py-2"
                placeholder='Enter your Old password'
              />
              <button type="button" onClick={handleToggleShowOldPassword} className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600">
                {showOldPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700">New Password:</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
                className="form-input mt-1 block w-full rounded-lg pr-10 border border-blue-gray-500 px-4 py-2"
                placeholder='Enter your New password'
              />
              <button type="button" onClick={handleToggleShowNewPassword} className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600">
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ${loading ? 'cursor-not-allowed opacity-50' : ''}`} disabled={loading}>
            {loading ? 'Changing Password...' : 'Change Password'}
          </button>
        </form>
      </CardBody>
    </Card>
  );
};

export default ChangePasswordForm;
