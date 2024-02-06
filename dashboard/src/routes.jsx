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
  CogIcon,GiftIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Deposit from "./pages/dashboard/deposit";
import Turnovers from "./pages/dashboard/turnovers";
import Withdraws from "./pages/dashboard/withdraws";
import Messages from "./pages/dashboard/messages";
import Preference from "./pages/dashboard/preference";
import Users from "./pages/dashboard/users";
import Voucher from "./pages/dashboard/voucher";
import Rewards from "./pages/dashboard/rewards";

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
        name: "deposits",
        path: "/deposits",
        element: <Deposit />,
      },
      {
        icon: <ArrowUturnUpIcon {...icon} />,
        name: "turnovers",
        path: "/turnovers",
        element: <Turnovers></Turnovers>,
      },
      {
        icon: <ArrowsUpDownIcon {...icon} />,
        name: "withdraws",
        path: "/withdraws",
        element: <Withdraws></Withdraws>,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "messages",
        path: "/messages",
        element: <Messages />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "vouchers",
        path: "/vouchers",
        element: <Voucher />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <Users />,
      },
      {
        icon: <CogIcon {...icon} />,
        name: "preference",
        path: "/preference",
        element: <Preference />,
      },
      {
        icon: <GiftIcon {...icon} />,
        name: "rewardss",
        path: "/rewardss",
        element: <Rewards />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "notifications",
      //   path: "/notifications",
      //   element: <Notifications />,
      // },
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
