import React, { useContext, useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { AuthContext } from "./../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50 p-25">
      <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-blue-500">
        <p className="text-center text-3xl p-3 font-semibold">Login Form</p>
        <div className="border-b-2 pt-2 border-gray-400"></div>

        <form onSubmit={handleLogin}>
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
            <label
              htmlFor="password"
              className="block text-base mb-2 font-semibold"
            >
              Password: <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="password"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="password"
              name="password"
              placeholder="Fill Up Here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-end text-indigo-800 underline underline-offset-4">
              <a href="facebook.com">Forget Password?</a>
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
