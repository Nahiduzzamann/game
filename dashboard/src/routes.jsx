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
  CogIcon,GiftIcon,
  BanknotesIcon
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
import Banks from "./pages/dashboard/banks";

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
        onlyMother:false
      },
      {
        icon: <CurrencyBangladeshiIcon {...icon} />,
        name: "deposits",
        path: "/deposit",
        element: <Deposit />,
        onlyMother:true
      },
      {
        icon: <ArrowUturnUpIcon {...icon} />,
        name: "turnovers",
        path: "/turnover",
        element: <Turnovers></Turnovers>,
        onlyMother:false
      },
      {
        icon: <ArrowsUpDownIcon {...icon} />,
        name: "withdraws",
        path: "/withdraw",
        element: <Withdraws></Withdraws>,
        onlyMother:true
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notification",
        path: "/messages",
        element: <Messages />,
        onlyMother:false
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "vouchers",
        path: "/voucher",
        element: <Voucher />,
        onlyMother:false
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <Users />,
        onlyMother:false
      },
      {
        icon: <CogIcon {...icon} />,
        name: "preference",
        path: "/preference",
        element: <Preference />,
        onlyMother:true
      },
      {
        icon: <GiftIcon {...icon} />,
        name: "rewards",
        path: "/rewards",
        element: <Rewards />,
        onlyMother:false
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "banks",
        path: "/banks",
        element: <Banks></Banks>,
        onlyMother:true
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
    title:"Admin Pages"
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
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
     
    ],
  },
];

export default routes;
