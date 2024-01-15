import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
const url = "http://localhost:3100";

const AuthProvider = ({ children }) => {
//   const [language, setLanguage] = useState(true);
  const [user, setUser] = useState(null);
  const [updateUserState, setUpdateUserState] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);

  const createUser = async (route, data, token) =>
    axios.post(`${url}${route}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });


  const currentUser = async (route, token) =>
    axios.get(`${url}${route}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

  const signIn = async (route, data, token) =>
    axios.post(`${url}${route}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });


  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("token");
    setLoading(false);
  };
  const updateUser = async (route, data, token) =>
    axios.put(`${url}${route}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });


  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");

    if (token) {
      currentUser("/user/getUser", token)
        .then((res) => {
          setLoading(false);
          setUser(res.data);
        })
        .catch(() => {
          setLoading(false);
          setUser(null);
        });
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [updateUserState]);



  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUser,
    updateUserState,
    setUpdateUserState
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;