import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Spinner, Toast } from "@chakra-ui/react";
import { AuthContext } from "../../providers/AuthProvider";
import img from "./4957136_Mobile login 1.svg";
import {
  FaEye,
  FaEyeSlash,
  FaKey,
  FaPhone,
  FaRegUserCircle,
  FaUserAltSlash,
} from "react-icons/fa";

const SignUp = () => {
  const { selectedLanguage } = useContext(AuthContext);
  const { createUser, setUpdateUserState } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [usernameValidation, setUsernameValidation] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location?.state?.phone;
  const [showPassword, setShowPassword] = useState(false);
  const saveToken = (t) => {
    localStorage.removeItem("token");
    localStorage.setItem("token", t);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    // const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{6,}$/;

    if (!username || !password || !confirmPassword) {
      setError("Please fill in all the required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    } else {
      setLoading(true);
      createUser(
        "/user/signup",
        {
          name: name,
          password: password,
          username: username,
          phone: phone,
        },
        null
      )
        .then(async (res) => {
          saveToken(res.data.Access_Token);
          setLoading(false);
          setUpdateUserState(Math.random());
          Toast({
            title: "Success Full",
            description: "Now you have logged in your account",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/", { replace: true });
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.data.message === "Username is already taken") {
            setUsernameValidation(false);
          }
          setError(
            error.response.data.message || "An unexpected error occurred"
          );
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen md:gap-20 items-center  bg-[#FFF] md:py-[5%] md:px-[10%] ">
      <div className=" hidden lg:flex justify-center h-full items-center">
        <img className="object-fill " src={img}></img>
      </div>
      <div className=" flex justify-center h-full items-center">
        <div className="py-[10%] px-[10%] min-h-screen md:min-h-min  shadow bg-[#D9D9D9] md:rounded-3xl">
          <p className="text-center text-3xl p-3 font-semibold">
          {
          selectedLanguage ==='en' ? "Register Now":"এখন নিবন্ধন করুন"
        }
        </p>
          <div className="mt-3">
            <p className="text-center">
              
              {
          selectedLanguage ==='en' ? "Give your personal information to get identified of you. We will happy to get you.":"আপনার পরিচয় পেতে আপনার ব্যক্তিগত তথ্য দিন। আমরা আপনাকে পেয়ে খুশি হবে."
        }
            </p>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="mt-[10%]">
              <div className="flex border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaRegUserCircle className="text-blue-500" />
                </div>
                <input
                  required
                  type="text"
                  className="bg-[#D9D9D9] outline-0  w-full rounded-r-3xl pl-2"
                  id="username"
                  name="username"
                  placeholder="Username "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-[7%]">
              <div className="flex border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaUserAltSlash className="text-blue-500" />
                </div>
                <input
                  required
                  type="text"
                  className="bg-[#D9D9D9] outline-0 w-full rounded-r-3xl pl-2"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-[7%]">
              <div className="flex items-center border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaKey className="text-blue-500" />
                </div>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  className="bg-[#D9D9D9] outline-0 flex-1 "
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className=" px-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div className="mt-[7%]">
              <div className="flex items-center border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaKey className="text-blue-500" />
                </div>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  className="bg-[#D9D9D9] outline-0 flex-1 "
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className=" px-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            {error && <div className="mt-3 text-red-500">{error}</div>}

            <button className="mt-[7%] w-full text-center border-2 rounded-3xl p-2 bg-blue-500 text-white hover:bg-red-400 font-semibold">
              {loading ? <Spinner color="yellow.100" size="md" /> : "Sign Up"}
            </button>

            <div className="border-b-2 pt-5 border-gray-800 my-2"></div>
            <label className="block text-base mt-3 font-semibold">
             
              {
          selectedLanguage ==='en' ? " Already have an account?":"ইতিমধ্যে একটি সদস্যপদ আছে ?"
        }
            </label>
            <Link
              to="/login"
              className="text-center flex items-center justify-center border-2 rounded-3xl mt-1 p-2 bg-black text-white hover:bg-red-400"
            >
             
              {
          selectedLanguage ==='en' ? " Login":"লগইন"
        }
            </Link>
          </form>
        </div>
      </div>
    </div>
  );

 
};

export default SignUp;
