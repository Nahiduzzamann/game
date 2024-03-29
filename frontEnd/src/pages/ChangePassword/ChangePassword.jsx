import React, { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProvider';
import { Spinner, useToast } from '@chakra-ui/react';

const ChangePasswordPage = () => {
  const { selectedLanguage } = useContext(AuthContext);
  const { user, updatePassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toast = useToast();

  const togglePasswordVisibility = (passwordType) => {
    switch (passwordType) {
      case 'currentPassword':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'newPassword':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirmNewPassword':
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setLoading(true);
    setError("");
    try {
      const response = await updatePassword(
        "/user/updatePassword",
        {
          username: user?.username,
          currentPassword: currentPassword,
          newPassword:newPassword
        },
        token
      );

      toast({
        title: "Password Update Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // console.log(response);
      // setUpdateUserState(Math.random());
    } catch (error) {
      setError(error.response.data.message || "Login failed");
      toast({
        title: "Update Failed",
        description: "Failed to update password. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-gray-500 rounded-lg md:mt-0 mt-5 p-4">
      <div className="p-5 bg-white rounded-md">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">
      {
          selectedLanguage ==='en' ? "Change Password":"পাসওয়ার্ড পরিবর্তন করুন"
        }
        </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
         
          {
          selectedLanguage ==='en' ? " Current Password":"বর্তমান পাসওয়ার্ড"
        }
          </label>
          <div className="relative">
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              name="currentPassword"
              value={currentPassword}
              onChange={(e)=>setCurrentPassword(e.target.value)}
              className="border p-2 w-full"
              required
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => togglePasswordVisibility('currentPassword')}
            >
              {showCurrentPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            
            {
          selectedLanguage ==='en' ? "New Password":"নতুন পাসওয়ার্ড"
        }
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              name="newPassword"
              value={newPassword}
              maxLength={16}
            minLength={6}
              onChange={(e) => {
                setNewPassword(e.target.value)
              }}
              className="border p-2 w-full"
              required
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => togglePasswordVisibility('newPassword')}
            >
              {showNewPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
           
            {
          selectedLanguage ==='en' ? " Confirm New Password":"নিশ্চিত করুন নতুন পাসওয়ার্ড"
        }
          </label>
          <div className="relative">
            <input
            maxLength={16}
            minLength={6}
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
              }}
              className={`border p-2 w-full ${
                newPassword === confirmNewPassword ? '' : 'border-red-500'
              }`}
              required
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => togglePasswordVisibility('confirmNewPassword')}
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
          </div>
          {newPassword === confirmNewPassword || (
            <p className="text-red-500 text-sm mt-2">
              
              {
          selectedLanguage ==='en' ? "New password and confirm password must match.":"নতুন পাসওয়ার্ড এবং নিশ্চিত পাসওয়ার্ড অবশ্যই মিলবে।"
        }
            </p>
          )}
        </div>
        {error && <div className="mt-3 text-red-500">{error}</div>}
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ${
            newPassword === confirmNewPassword ? 'hover:bg-blue-700 ' : 'cursor-not-allowed opacity-50'
          }`}
       
        >
           {loading ? <Spinner /> : "Update Password"}
          
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ChangePasswordPage;
