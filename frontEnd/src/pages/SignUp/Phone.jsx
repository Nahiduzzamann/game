import React, { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import img from '../Login/login.png'
const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!phoneNumber || !isChecked) {
      setError("Please fill in the required fields.");
      return;
    }

    // TODO: Add your sign-up logic here
    // For example, you can make an API call to register the user

    try {
      // Simulate a sign-up API call
      setLoading(true);
      // Assuming a successful sign-up
      // You should replace this with your actual sign-up logic
      // After a successful sign-up, navigate to the registration page
      navigate("/signup-details",{state:{phone:phoneNumber}});
    } catch (error) {
      console.error("Error during sign up:", error);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center flex-wrap gap-10 items-center h-screen bg-blue-50 p-25">
      <div className=" hidden sm:block">
        <img className="object-fill" src={img}></img>
      </div>
      <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-blue-500">
        <p className="text-center text-3xl p-3 font-semibold">Register Now</p>
        <div className="border-b-2 pt-5 border-gray-400"></div>

        <form onSubmit={handleSignUp}>
          <div className="mt-3">
            <label className="block text-base mb-2 font-semibold">Phone Number:</label>
            <div className="flex">
              <div className=" border-gray-600 rounded flex items-center justify-center p-2 me-2 bg-blue-200">
                <FaFlag className="text-blue-600" />
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

          <div className="mt-3">
            <label className="block text-base mb-2 font-semibold">Referral Code:</label>
            <input
              type="text"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="referralCode"
              name="referralCode"
              placeholder="(Optional)"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </div>

          <div className="mt-3 flex">
            <input
              type="checkbox"
              className="border-2 border-gray-600 rounded p-2"
              id="isChecked"
              name="isChecked"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <p className="ps-3 pt-5">
              I am of legal age and I agree with the{" "}
              <a href="facebook.com">Terms and Conditions</a>
            </p>
          </div>

          {error && <div className="mt-3 text-red-500">{error}</div>}

          <button className={`mt-4 w-full text-center border-2 rounded p-2 bg-black text-white font-bold hover:bg-red-400  ${!isChecked && 'cursor-not-allowed'}`}>
            {loading ? (
              <Spinner color="yellow.100" size="md" />
            ) : (
             
                "Next"
             
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Phone;
