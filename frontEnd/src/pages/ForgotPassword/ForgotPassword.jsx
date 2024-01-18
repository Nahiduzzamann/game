import React, { useState, useEffect } from 'react';
import { FaFlag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); 
const navigate = useNavigate()
  const handleRequestOTP = () => {
    setTimeLeft(20)
    // Assume an API request here to send OTP
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setShowTimer(true);
    }, 500); // Adjust the delay time accordingly
  };

  const handleChangePassword = () => {
    setTimeLeft(0)
    // Assume an API request here to verify OTP and change password
    setLoading(true);

    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      // Navigate to the change password page upon success
      // You can replace this with your actual navigation logic
      // history.push('/change-password');
      alert('Password changed successfully!');
      navigate('/')
    }, 500); // Adjust the delay time accordingly
  };

  useEffect(() => {
    let timer;

    if (showTimer && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    if(timeLeft == 0){
      setShowTimer(false)
    }

    return () => {
      clearInterval(timer);
    };
  }, [showTimer, timeLeft]);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50 p-25">
      <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-blue-500">
        <p className="text-center text-3xl p-3 font-semibold">
          Reset Password
        </p>
        <div className="border-b-2 pt-2 border-gray-400"></div>
        <div className="pt-5 border-gray-400">
          <form>
            <div className="mt-5">
              <label
                htmlFor="username"
                className="block text-base mb-2 font-semibold"
              >
                Username: <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
                id="username"
                name="username"
                placeholder="Fill Up Here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="block text-base mb-2 font-semibold">
                Enter your phone number to reset :{' '}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <div className="border-gray-600 rounded flex items-center justify-center p-2 me-2 bg-blue-200">
                  <FaFlag className="text-blue-100" />
                </div>
                <input
                  type="text"
                  className="w-72 text-base py-1 px-1 border-2 border-gray-600 rounded"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Fill Up Here"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            {showTimer && (
              <div className="mt-3">
                <label className="block text-base mb-2 font-semibold">
                  Request OTP: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
                  id="otp"
                  name="otp"
                  placeholder="Fill Up Here"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <div className="text-red-500 mt-2">
                  Time left: {timeLeft} seconds
                </div>
              </div>
            )}

            <button
              className={`mt-4 w-full text-center rounded p-2 ${
                loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black text-white'
              } font-bold hover:bg-red-400`}
              onClick={showTimer ? handleChangePassword : handleRequestOTP}
              disabled={loading || (showTimer && timeLeft === 0)}
            >
              {loading
                ? 'Requesting'
                : showTimer
                ? 'Change Password'
                : 'Request OTP'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
