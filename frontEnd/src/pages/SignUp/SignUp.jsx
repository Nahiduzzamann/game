import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Spinner, Toast } from "@chakra-ui/react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
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
         if(error.response.data.message === 'Username is already taken'){
            setUsernameValidation(false)
         }
          setError(error.response.data.message || "An unexpected error occurred");
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50 p-25">
      <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-blue-500">
        <p className="text-center text-3xl p-3 font-semibold">Register Now</p>
        <div className="border-b-2 pt-5 border-gray-400"></div>

        <form onSubmit={handleSignUp}>
          <div className="mt-3">
            <label className="block text-base mb-2">Username:</label>
            <input
              type="text"
              className={`w-full text-base py-1 px-1 border-2 border-gray-600 rounded ${usernameValidation ? '':'border-red-600'}`}
              id="username"
              name="username"
              placeholder="Fill Up Here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label className="block text-base mb-2">Full Name:</label>
            <input
              type="text"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="name"
              name="name"
              placeholder="Fill Up Here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label className="block text-base mb-2">Password:</label>
            <input
              type="password"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="password"
              name="password"
              placeholder="Fill Up Here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label className="block text-base mb-2">Confirm Password:</label>
            <input
              type="password"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Fill Up Here"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <div className="mt-3 text-red-500">{error}</div>}

          <div className="mt-4 text-center border-2 rounded p-2 bg-black text-yellow-100 hover:bg-red-400">
            {loading ? (
              <Spinner color="yellow.100" size="md" />
            ) : (
              <button type="submit" className="text-center">
                Sign Up
              </button>
            )}
          </div>

          <div className="border-b-2 pt-5 border-red-400"></div>
          <label className="block text-base mt-3">
            Already have an account?
          </label>
          <div className="text-center border-2 rounded p-1 bg-yellow-500 text-black hover:bg-red-400">
            <Link to="/login" className="text-center">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
