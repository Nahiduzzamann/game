import React, { useState } from "react";
import { FaFileCode, FaFlag, FaPhone } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import img from "./4957136_Mobile login 1.svg";
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
      navigate("/signup-details", { state: { phone: phoneNumber } });
    } catch (error) {
      console.error("Error during sign up:", error);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid lg:grid-cols-2 min-h-screen grid-cols-1 md:gap-20 items-center  bg-[#FFF] md:py-[5%] md:px-[10%] ">
      <div className=" hidden lg:flex justify-center h-full items-center">
        <img className="object-fill " src={img}></img>
      </div>
      <div className=" flex justify-center h-full items-center">
        <div className="py-[10%] px-[10%] min-h-screen md:min-h-min  shadow bg-[#D9D9D9] md:rounded-3xl">
          <p className="text-center text-3xl p-3 font-semibold">Register Now</p>
          <div className="mt-3">
            <p className="text-center">
              Give your phone number also can give a “referral” code to get
              Bonus
            </p>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="mt-[10%]">
              <div className="flex border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaPhone className="text-blue-500" />
                </div>
                <input
                  required
                  type="text"
                  className="bg-[#D9D9D9] outline-0 "
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-[8%]">
              <div className="flex border items-center border-gray-400 rounded-3xl">
                <div className="p-3">
                  <FaFileCode className="text-gray-400" />
                </div>

                <input
                  
                  className="bg-[#D9D9D9] outline-0 flex-1 "
                  id="referralCode"
                  name="referralCode"
                  placeholder="Referral Code"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                />
                <div className="mx-3 text-gray-400 text-sm">(Optional)</div>
              </div>
            </div>
            <div className="mt-3 flex">
              <input required
                type="checkbox"
                className="border-2 border-gray-600 rounded p-4"
                id="isChecked"
                name="isChecked"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p className="ps-3 ">
                I am of legal age and I agree with the{" "}
                <a href="facebook.com">Terms and Conditions</a>
              </p>
            </div>

            {error && <div className="mt-3 text-red-500">{error}</div>}

            <button
              className={`mt-4 w-full text-center border-2 rounded-3xl p-2 bg-blue-500 text-white font-bold hover:bg-red-400  ${
                !isChecked && "cursor-not-allowed"
              }`}
            >
              {loading ? <Spinner color="yellow.100" size="md" /> : "Next"}
            </button>

            <Link
              to="/login"
              className="mt-[8%] flex py-2 items-center justify-center border-2 p-1 bg-black rounded-3xl text-white hover:bg-red-400"
            >
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );


};

export default Phone;
