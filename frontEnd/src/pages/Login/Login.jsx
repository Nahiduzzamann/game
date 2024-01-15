import React, { useContext, useState } from 'react';
import { Spinner, useToast } from '@chakra-ui/react';
import { AuthContext } from './../../providers/AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { signIn, setUpdateUserState } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";

  const toast = useToast()

  const saveToken = (t) => {
    localStorage.removeItem("token");
    localStorage.setItem("token", t);
  };
  

  const handleLogin = (event) => {
    event.preventDefault();

    setLoading(true);
    signIn("/user/login", {
      username:username,
      password:password
    }, null)
      .then((res) => {
        
        saveToken(res.data.Access_Token);

        setLoading(false);
        setUpdateUserState(res.data);
        toast({
          title: 'Success Full',
          description: "Now you have logged in your account",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message || 'Login failed');
      });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-blue-50 p-25'>
      <div className="w-96 p-6 shadow bg-white rounded-md border-4 border-indigo-500">
        <p className='text-center text-3xl p-3 font-semibold'>Login Form</p>
        <div className='border-b-2 pt-5 border-gray-400'></div>

        <form onSubmit={handleLogin}>
          <div className="mt-3">
            <label htmlFor="username" className='block text-base mb-2'>Username:</label>
            <input
              type="text"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="username"
              name="username"
              placeholder='Fill Up Here'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="password" className='block text-base mb-2'>Password:</label>
            <input
              type="password"
              className="w-full text-base py-1 px-1 border-2 border-gray-600 rounded"
              id="password"
              name="password"
              placeholder='Fill Up Here'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='text-end text-indigo-800'><a href="facebook.com">Forget Password?</a></div>
          </div>

          {error && <div className="mt-3 text-red-500">{error}</div>}

          <div className="mt-4 text-center border-2 rounded p-1 bg-black text-yellow-100 hover:bg-red-400">
            {loading ? (
              <Spinner color="yellow.100" size="md" />
            ) : (
              <button type="submit" className='text-center'>Login</button>
            )}
          </div>

          <div className='border-b-2 pt-5 border-red-400'></div>
          <label htmlFor="password" className='block text-base mt-3'>Don't have an account?</label>
          <div className="text-center border-2 rounded p-1 bg-yellow-500 text-black hover:bg-red-400">
            <button className='text-center'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


