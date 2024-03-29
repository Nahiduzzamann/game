import React, { useState, useEffect, useContext } from "react";
import {
  FaCode,
  FaCodepen,
  FaFlag,
  FaLock,
  FaPhone,
  FaRegUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img from "./4957136_Mobile login 1.svg";
import { AuthContext } from "../../providers/AuthProvider";

const ForgotPassword = () => {
  const { selectedLanguage } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const navigate = useNavigate();
  const handleRequestOTP = (e) => {
    e.preventDefault();
    setTimeLeft(20);
    // Assume an API request here to send OTP
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setShowTimer(true);
    }, 500); // Adjust the delay time accordingly
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setTimeLeft(0);
    // Assume an API request here to verify OTP and change password
    setLoading(true);

    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      // Navigate to the change password page upon success
      // You can replace this with your actual navigation logic
      // history.push('/change-password');
      alert("Password changed successfully!");
      navigate("/");
    }, 500); // Adjust the delay time accordingly
  };

  useEffect(() => {
    let timer;

    if (showTimer && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (timeLeft == 0) {
      setShowTimer(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [showTimer, timeLeft]);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-20 items-center min-h-screen  bg-[#FFF] md:py-[5%] md:px-[10%] ">
      <div className=" hidden lg:flex justify-center h-full items-center">
        <img className="object-fill " src={img}></img>
      </div>
      <div className=" flex justify-center h-full items-center">
        <div className="py-[10%] px-[10%] min-h-screen md:min-h-min  shadow bg-[#D9D9D9] md:rounded-3xl">
          <p className="text-center text-3xl p-3 font-semibold">
           
            {
          selectedLanguage ==='en' ? " Reset Password":"পাসওয়ার্ড রিসেট করুন"
        }
          </p>
          <div className="mt-3">
            <p className="text-center">
              
              {
          selectedLanguage ==='en' ? "Give your username and phone number we will send you a OTP":"আপনার ব্যবহারকারীর নাম এবং ফোন নম্বর দিন আমরা আপনাকে একটি OTP পাঠাব"
        }
            </p>
          </div>

          <form onSubmit={showTimer ? handleChangePassword : handleRequestOTP}>
            <div className="mt-[10%]">
              <div className="flex border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaRegUserCircle className="text-blue-500" />
                </div>
                <input
                  required
                  type="text"
                  className="bg-[#D9D9D9] outline-0 rounded-r-3xl w-full pl-2"
                  id="username"
                  name="username"
                  placeholder="Username "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-[8%]">
              <div className="flex border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaPhone className="text-blue-500" />
                </div>

                <input
                  required
                  className="bg-[#D9D9D9] outline-0  rounded-r-3xl w-full pl-2"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            {showTimer && (
              <div>
                <div className="mt-[8%] flex border items-center border-[#3B82F6] rounded-3xl">
                  <div className="p-3">
                    <FaCodepen className="text-blue-500" />
                  </div>
                  <input
                    type="text"
                    className="bg-[#D9D9D9] outline-0  rounded-r-3xl w-full pl-2"
                    id="otp"
                    name="otp"
                    placeholder="Submit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <div className="text-red-500 mt-2">
                  {
          selectedLanguage ==='en' ? "Time left: ":"বাকি সময়:"
        }
        {timeLeft} 
        {
          selectedLanguage ==='en' ? " seconds":"সেকেন্ড"
        }
                </div>
              </div>
            )}

            <button
              type="submit"
              className={`mt-[10%] w-full text-center rounded-3xl p-2 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              } font-bold hover:bg-red-400`}
              disabled={loading || (showTimer && timeLeft === 0)}
            >
              {loading
                ? "Requesting"
                : showTimer
                ? "Change Password"
                : "Request OTP"}
            </button>

            <Link
              to="/login"
              className="mt-[8%] flex py-2 items-center justify-center border-2 p-1 bg-black rounded-3xl text-white hover:bg-red-400"
            >
              
              {
          selectedLanguage ==='en' ? "Back":"পেছনে"
        }
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
