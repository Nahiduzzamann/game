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
import { ChakraProvider } from "@chakra-ui/react";
import Deposit from "./pages/Deposit/index.jsx";
import Profile from "./layout/Profile.jsx";
import Withdrawal from "./pages/Withdrawal/index.jsx";
import History from "./pages/History/index.jsx";
import Games from "./pages/games/Games.jsx";
import 'react-responsive-pagination/themes/classic.css';
import ClaimVoucher from "./pages/ClaimVoucher/ClaimVoucher.jsx";
import MyProfile from "./pages/MyProfile/MyProfile.jsx";

import TurnOverHistory from "./pages/TurnOverHistory/index.jsx";
import BetHistory from "./pages/BetHistory/index.jsx";

import ChangePasswordPage from "./pages/ChangePassword/ChangePassword.jsx";
import Providers from "./pages/providers/index.jsx";
import Referral from "./pages/Referral/index.jsx";
import Promotions from "./pages/promotions/index.jsx";
import PlayGame from "./pages/PlayGame/PlayGame.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path:"games/:system/:index",
        element:<Games/>
      },
      {
        path:"games/:id",
        element:<PlayGame></PlayGame>
      },
      {
        path:"promotions",
        element:<Promotions/>
      },
      {
        path:"referral",
        element:<Referral/>
      },
      {
        path:"/:category",
        element:<Providers/>
      }
    ],
  },
  {
    path: "/info",
    element: <Info></Info>,
    children: [
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "ResponsibleGaming",
        element: <ResponsibleGaming></ResponsibleGaming>,
      },
      {
        path: "Terms&Conditions",
        element: <TermsConditions></TermsConditions>,
      },
    ],
  },
  {
    path: "/user",
    element: <Profile></Profile>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "deposit",
        element: <Deposit></Deposit>,
      },
      {
        path: "withdrawal",
        element: <Withdrawal/>,
      },
      {
        path: "history",
        element: <History/>,
      },
      {
        path: "turn-over",
        element: <TurnOverHistory/>,
      },
      {
        path: "bet-history",
        element: <BetHistory/>,
      },
      {
        path: "claimVoucher",
        element: <ClaimVoucher></ClaimVoucher>,
      },
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "changePassword",
        element: <ChangePasswordPage></ChangePasswordPage>
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      
    </ChakraProvider>
  </React.StrictMode>
);
