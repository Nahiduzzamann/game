import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  CurrencyBangladeshiIcon,
  ArrowUturnUpIcon,
  ArrowsUpDownIcon,
  DocumentTextIcon,
  CogIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Deposit from "./pages/dashboard/deposit";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <CurrencyBangladeshiIcon {...icon} />,
        name: "deposit",
        path: "/deposit",
        element: <Deposit />,
      },
      {
        icon: <ArrowUturnUpIcon {...icon} />,
        name: "turnovers",
        path: "/turnovers",
        element: <Home />,
      },
      {
        icon: <ArrowsUpDownIcon {...icon} />,
        name: "withdraws",
        path: "/withdraws",
        element: <Home />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notification",
        path: "/notification",
        element: <Home />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "vouchers",
        path: "/vouchers",
        element: <Home />,
      },
      {
        icon: <CogIcon {...icon} />,
        name: "preference",
        path: "/preference",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
     
    ],
  },
];

export default routes;
