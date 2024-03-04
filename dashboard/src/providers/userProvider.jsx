import React, { createContext, useState, useContext } from 'react';

// Step 1: Define a context
const UserContext = createContext();

// Step 2: Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update user data
  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Implement hooks to access user data
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
