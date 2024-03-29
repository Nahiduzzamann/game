
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import 'react-responsive-pagination/themes/classic.css';
import DataProvider from "./providers/dataProvider";
import { SearchProvider } from "./providers/searchProvider";
import { UserProvider } from "./providers/userProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
   <SearchProvider>
   <UserProvider>
   <BrowserRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>
   </UserProvider>
   </SearchProvider>
    </DataProvider>
    
  </React.StrictMode>
);
