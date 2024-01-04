import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./pages/Home/Home/Home.jsx";
import Info from "./pages/Info/Info.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import TermsConditions from "./pages/Terms&Conditions/Terms&Conditions.jsx";
import ResponsibleGaming from "./pages/ResponsibleGaming/ResponsibleGaming.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/info",
    element: <Info></Info>,
    children:[
      {
        path: "faq",
        element: <Faq></Faq>
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "ResponsibleGaming",
        element: <ResponsibleGaming></ResponsibleGaming>
      },
      {
        path: "Terms&Conditions",
        element: <TermsConditions></TermsConditions>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
