import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
  PuzzlePieceIcon
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total Deposit",
    value: "৳53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Total Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: PuzzlePieceIcon,
    title: "Total Games",
    value: "50",
    footer: {
      color: "text-red-500",
      value: "1 Jan",
      label: "from today",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Total Revenue",
    value: "৳53k",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
