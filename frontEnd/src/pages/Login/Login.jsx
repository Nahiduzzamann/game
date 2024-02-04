import React, { useContext, useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { AuthContext } from "./../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "./4957136_Mobile login 1.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const { selectedLanguage } = useContext(AuthContext);
  const { signIn, user, setUpdateUserState } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const saveToken = (t) => {
    localStorage.removeItem("token");
    localStorage.setItem("token", t);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const handleLogin = (event) => {
    event.preventDefault();

    setLoading(true);
    signIn(
      "/user/login",
      {
        username: username,
        password: password,
      },
      null
    )
      .then((res) => {
        saveToken(res.data.Access_Token);
        setLoading(false);
        setUpdateUserState(res.data);
        navigate(from, { replace: true });

        toast({
          title: "Success Full",
          description: "Now you have logged in your account",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message || "Login failed");
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-around items-center h-screen bg-[#FFF] p-25">
      <div className=" hidden sm:block w-100">
        <img className="object-fill" src={img}></img>
      </div>
      <div className=" flex justify-center h-full items-center">
        <div className="py-[10%] px-[10%] min-h-screen items-center md:min-h-min shadow bg-[#D9D9D9] md:rounded-3xl">
          <p className="text-center text-3xl p-3 font-semibold">
          {
          selectedLanguage ==='en' ? "Login Form":"লগইন ফরম"
        }
        </p>
          <div className="mt-3">
            <p className="text-center">
              
              {
          selectedLanguage ==='en' ? "Login here to get extra gaming features and more never ended":"অতিরিক্ত গেমিং বৈশিষ্ট্য পেতে এখানে লগইন করুন এবং আরও কখনও শেষ হয় না"
        }
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mt-16">
              <div className="flex border border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaRegUserCircle className="text-blue-500" />
                </div>
                <input
                  type="text"
                  className="bg-[#D9D9D9] outline-0 w-full rounded-r-3xl pl-2"
                  id="username"
                  name="username"
                  placeholder="Username "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-10">
              <div className="flex border items-center border-[#3B82F6] rounded-3xl">
                <div className="p-3">
                  <FaLock className="text-blue-500" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-[#D9D9D9] outline-0 flex-1  "
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="px-3  cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <div className="text-end font-bold text-blue-500 pt-3 underline-offset-4">
                <Link to="/forgot-password">
                {
          selectedLanguage ==='en' ? "Forget Password?":"পাসওয়ার্ড ভুলে গেছেন?"
        }
        </Link>
              </div>
            </div>

            {error && <div className="mt-3 text-red-500">{error}</div>}

            <button
              type="submit"
              className="w-full mt-4 py-2 text-center border-2 rounded-3xl p-1 bg-[#3B82F6] text-white hover:bg-red-400"
            >
              {loading ? <Spinner color="yellow.100" size='sm'/> : "Login"}
            </button>

            <div className="border-b-2 pt-8 border-black"></div>
            <label
              htmlFor="password"
              className="block text-base mt-5 pb-1 font-semibold"
            >
              {
          selectedLanguage ==='en' ? "Don't have an account?":"আপনার অ্যাকাউন্ট নেই ?"
        }
            </label>
            <Link
              to="/signup"
              className=" flex py-2 items-center justify-center border-2 p-1 bg-black rounded-3xl text-white hover:bg-red-400"
            >
             
              {
          selectedLanguage ==='en' ? "Sign Up":"নিবন্ধন করুন"
        }
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
