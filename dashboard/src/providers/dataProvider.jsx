import getDeposite from "@/modules/getDepositReport";
import getRevenueReport from "@/modules/getRevenueReport";
import { createContext, useEffect, useState } from "react";
import {
    BanknotesIcon,
    UsersIcon,
    ChartBarIcon,
    PuzzlePieceIcon
  } from "@heroicons/react/24/solid";
export const AuthContext = createContext();

const DataProvider = ({ children }) => {
    const [depositeData, setDepositeData] = useState(null);
    const [depositeDataLastMonth, setDepositeDataLastMonth] = useState(null);
    const [revenueData, setRevenueData] = useState(null);
    const [revenueDataLastMonth, setRevenueDataLastMonth] = useState(null);
    // console.log(depositeData);
    useEffect(() => {
        localStorage.setItem('currentTime',new Date())
        getDeposite()
        .then((res)=>{
           
            const calculatePercentageRevenueChange = (monthlyHistory) => {
                if (monthlyHistory.length < 2) {
                  // Cannot calculate percentage change with only one month
                  return 100;
                }
              
                const currentRevenue = monthlyHistory[monthlyHistory.length - 1].revenue;
                const previousRevenue = monthlyHistory[monthlyHistory.length - 2].revenue;
              
                if (previousRevenue === 0) {
                  // Handle division by zero
                  return 'N/A';
                }
              
                const percentageChange = Math.round(((currentRevenue - previousRevenue) / Math.abs(previousRevenue)) * 100);
                return percentageChange;
              };
              
              const percentageChange = calculatePercentageRevenueChange(res.data.monthlyDeposit);
              
              setDepositeDataLastMonth(percentageChange);

            setDepositeData(res.data);
        })
       .catch((err)=>{
        console.log(err);
       })
    }, [])

    useEffect(() => {
        getRevenueReport()
        .then((res)=>{
            const calculatePercentageRevenueChange = (monthlyHistory) => {
                if (monthlyHistory.length < 2) {
                  // Cannot calculate percentage change with only one month
                  return 'N/A';
                }
              
                const currentRevenue = monthlyHistory[monthlyHistory.length - 1].revenue;
                const previousRevenue = monthlyHistory[monthlyHistory.length - 2].revenue;
              
                if (previousRevenue === 0) {
                  // Handle division by zero
                  return 'N/A';
                }
              
                const percentageChange = Math.round(((currentRevenue - previousRevenue) / Math.abs(previousRevenue)) * 100);
                return percentageChange;
              };
              
              const percentageChange = calculatePercentageRevenueChange(res.data.monthlyHistory);
           
              setRevenueDataLastMonth(percentageChange);
            setRevenueData(res.data);

        })
       .catch((err)=>{
        console.log(err);
       })
    }, [])

    const statisticsCardsData=(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth) => [
        {
          color: "gray",
          icon: BanknotesIcon,
          title: "Total Deposit",
          value: `৳${(depositeData?.subTotal/1000).toFixed(1)}k`,
          footer: {
            color: `${depositeDataLastMonth <=0 ? 'text-red-500':'text-green-500'} `,
            value: `${depositeDataLastMonth <=0 ? '':'+'}${depositeDataLastMonth}%`,
            label: "than last month",
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
          value: "100+",
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
          value: `৳${(revenueData?.subTotal/1000).toFixed(2)}k`,
          footer: {
            color: `${revenueDataLastMonth <=0 ? 'text-red-500':'text-green-500'} `,
            value: `${revenueDataLastMonth <=0 ? '':'+'}${revenueDataLastMonth}%`,
            label: "than last month",
          },
        },
      ];


    const authInfo = {
        depositeData,
        statisticsCardsData,
        revenueData,
        revenueDataLastMonth,
        depositeDataLastMonth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default DataProvider;