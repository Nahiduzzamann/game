import React, { createContext, useState } from 'react';

// Create a context object
export const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState('');

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
