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
import "react-responsive-pagination/themes/classic.css";
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
import AuthProvider from "./providers/AuthProvider.jsx";
import Phone from "./pages/SignUp/Phone.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import PrivateRoute from "./layout/PrivateRoute.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import BankPay from "./pages/Bank/Index.jsx";
import BankDetails from "./pages/BankDetails/BankDetails.jsx";
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
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/signup",
        element: <Phone></Phone>,
      },
      {
        path: "/signup-details",
        element: <SignUp></SignUp>,
      },
      {
        path: "games/:system/:index",
        element: <Games />,
      },
      {
        path: "play-game/:id",
        element: (
          <PrivateRoute>
            <PlayGame></PlayGame>
          </PrivateRoute>
        ),
      },
      {
        path: "promotions",
        element: <Promotions />,
      },
      {
        path: "referral",
        element: <Referral />,
      },
      {
        path: "/:category",
        element: <Providers />,
      },
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
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "deposit",
        element: <Deposit></Deposit>,
      },
      {
        path: "withdrawal",
        element: <Withdrawal />,
      },
      {
        path: "bank-details",
        element: <BankDetails></BankDetails>,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "turn-over",
        element: <TurnOverHistory />,
      },
      {
        path: "bet-history",
        element: <BetHistory />,
      },
      {
        path: "claimVoucher",
        element: <ClaimVoucher></ClaimVoucher>,
      },
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "changePassword",
        element: <ChangePasswordPage></ChangePasswordPage>,
      },
      {
        path: "pay",
        element: <BankPay />,
      },
    ],
  },
  {
    path: "pay",
    element: <BankPay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
