import React, { useContext, useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { AuthContext } from "./../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from './login.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
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
        setError(error.message || "Login failed");
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center gap-10 h-screen bg-white p-25 flex-wrap">
      <div className=" hidden sm:block">
        <img className="object-fill" src={img}></img>
      </div>
      <div className="w-96 p-6 shadow bg-gray-300 rounded-md">
        <p className="text-center text-3xl p-3 font-semibold">Login Form</p>
        <div className="border-b-2 pt-2 border-gray-400"></div>

        <form onSubmit={handleLogin}>
          <div className="mt-16">
            <div className="flex border border-blue-800 rounded-3xl">
                  <div className="p-3">
                    <FaRegUserCircle className="text-blue-800" />
                  </div>
            <input 
              type="text"
              className="bg-gray-300"
              id="username"
              name="username"
              placeholder="Username "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            </div>
           
          </div>

          <div className="mt-10">
            <div className="flex border border-blue-800 rounded-3xl">
                  <div className="p-3">
                  <FaLock className="text-blue-800" />
                  </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-gray-300"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="text-end text-indigo-800 underline underline-offset-4">
              <Link to="/forgot-password">Forget Password?</Link>
            </div>
          </div>

          {error && <div className="mt-3 text-red-500">{error}</div>}

          <button
            type="submit"
            className="w-full mt-4 text-center border-2 rounded p-1 bg-black text-white hover:bg-red-400"
          >
            {loading ? <Spinner color="yellow.100" size="md" /> : "Login"}
          </button>

          <div className="border-b-2 pt-8 border-red-400"></div>
          <label
            htmlFor="password"
            className="block text-base mt-5 pb-1 font-semibold"
          >
            Don not have an account?
          </label>
          <Link
            to="/signup"
            className=" flex items-center justify-center border-2 rounded p-1 bg-blue-500 text-white hover:bg-red-400"
          >
            Sign Up
          </Link>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
