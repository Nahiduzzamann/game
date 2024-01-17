import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Spinner, useToast } from "@chakra-ui/react";

const MyProfile = () => {
  const { user, updateUser, setUpdateUserState } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setName(user?.name || "");
    setUserName(user?.username || "");
    setPhone(user?.phone || "");
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const response = await updateUser(
        "/user/updateUser",
        {
          username: userName,
          name: name,
          phone: phone,
        },
        token
      );

      toast({
        title: "Update Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUpdateUserState(Math.random());
      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Failed to update profile. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border border-blue-500 p-2 rounded bg-white w-full ${
                isEditing ? "cursor-text" : "cursor-not-allowed"
              }`}
              disabled={!isEditing}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={`border border-blue-500 p-2 rounded bg-white w-full cursor-not-allowed`}
              disabled={true}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`border border-blue-500 p-2 rounded bg-white w-full ${
                isEditing ? "cursor-text" : "cursor-not-allowed"
              }`}
              disabled={!isEditing}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleEditClick}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mr-4 hover:bg-blue-700"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>

        {isEditing && (
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Save"}
          </button>
        )}
      </form>
    </div>
  );
};

export default MyProfile;
