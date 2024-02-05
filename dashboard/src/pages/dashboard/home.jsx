import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Spinner,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsChartsData,
  projectsTableData,
} from "@/data";
import { ArrowDownIcon, CheckCircleIcon, ClockIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "@/providers/dataProvider";
import getDepositeDetails from "@/modules/getDepositDetails";
import {
  CreditCardIcon,
} from "@heroicons/react/24/solid";

export function Home() {
  const { statisticsCardsData,revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth,turnoverData } = useContext(AuthContext);
  const previousDate = new Date(localStorage.getItem('currentTime'));
  const presentDate = new Date();
  const timeDifference = presentDate - previousDate;
  const refreshTime = Math.floor(timeDifference / (1000 * 60));
  // console.log(refreshTime);

  const [depositeDetailsData, setDepositeDetailsData] = useState(null);
  const [loading, setLoading]=useState(false)
      // console.log(depositeData);
      useEffect(() => {
        setLoading(true)
        getDepositeDetails()
          .then((res)=>{
            setLoading(false)
            setDepositeDetailsData(res.data);
          })
         .catch((err)=>{
          setLoading(false)
          console.log(err);
         })
      }, [])
      const calculateAverageCompletionPercentage = (deposit, turnOverAmount) => {

        if(deposit.length >0){
     // Step 1: Calculate total turnOverAmount achieved
     const totalTurnoverAchieved = deposit.reduce((total, user) => total + user.totalTurnover, 0);
    
     // Step 2: Calculate total turnOverAmount expected
     const totalTurnoverExpected = deposit.length * turnOverAmount;
    
     // Step 3: Calculate average completion percentage
     const averageCompletionPercentage = (totalTurnoverAchieved / totalTurnoverExpected) * 100;
    
     return averageCompletionPercentage.toFixed(2);
        }
    return 0;
       
      };
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth)?.map(({ icon, title, footer, ...rest }) => (
          revenueData ? (<StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />):(<Spinner></Spinner>)
          
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth,refreshTime)?.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Turnover
              </Typography>
             
            </div>
           
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
{
  loading ? (<div className="h-screen flex justify-center items-center"><Spinner color="blue"></Spinner></div>):(<table className="w-full min-w-[640px] table-auto">
  <thead>
    <tr>
      {["Turnover Parcentage", "members", "target amount", "completion",''].map(
        (el) => (
          <th
            key={el}
            className="border-b border-blue-gray-50 py-3 px-5 text-left"
          >
            <Typography
              variant="small"
              className="text-[11px] font-bold uppercase text-blue-gray-400"
            >
              {el}
            </Typography>
          </th>
        )
      )}
    </tr>
  </thead>
  <tbody>
    {turnoverData?.slice(0,6).map(
      (data, key) => {
        const className = `py-3 px-5 ${
          key === data.length - 1
            ? ""
            : "border-b border-blue-gray-50"
        }`;

        return (
          <tr key={key}>
            <td className={className}>
              <div className="flex items-center gap-4">
             
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {data.title}
                </Typography>
              </div>
            </td>
            <td className={className}>

              {
                data.deposit.length >0 ? (data.deposit.map((data, key) => (
                  <Tooltip key={key} content={data.userId}>
                    <Avatar
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
    
                      size="xs"
                      variant="circular"
                      className={`cursor-pointer border-2 border-white ${
                        key === 0 ? "" : "-ml-2.5"
                      }`}
                    />
                  </Tooltip>
                ))):(<p>Empty</p>)
              }

            </td>
            <td className={className}>
              <Typography
                variant="small"
                className="text-xs font-medium text-blue-gray-600"
              >
                {data.turnOverAmount}
              </Typography>
            </td>
            <td className={className}>
              <div className="w-10/12">
                <Typography
                  variant="small"
                  className="mb-1 block text-xs font-medium text-blue-gray-600"
                >
                  {
                    calculateAverageCompletionPercentage(data.deposit,data.turnOverAmount)

                  }%
                </Typography>
                <Progress
                  value={calculateAverageCompletionPercentage(data.deposit,data.turnOverAmount)}
                  variant="gradient"
                  color={calculateAverageCompletionPercentage(data.deposit,data.turnOverAmount) === 100 ? "green" : "gray"}
                  className="h-1"
                />
              </div>
            </td>
            {
              data.deposit.length >0 ?(<td></td>):(<td onClick={()=>handleDelteturnover(data._id)} className="text-red-500 cursor-pointer rounded text-center hover:bg-gray-400">
              Delete
            </td>)
            }
            
          </tr>
        );
      }
    )}
  </tbody>
</table>)
}
          
        </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Deposit Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              {
                depositeDataLastMonth <0 ? (<ArrowDownIcon
                  strokeWidth={3}
                  className="h-3.5 w-3.5 text-green-500"
                />):(<ArrowUpIcon
                  strokeWidth={3}
                  className="h-3.5 w-3.5 text-green-500"
                />)
              }
              
              <strong>{depositeDataLastMonth}%</strong> than last month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {
              loading ? (<div className="flex justify-between items-center"><Spinner></Spinner></div>):( depositeDetailsData?.slice(0,6)?.map(
                (data, key) => (
                  <div key={key} className="flex items-start gap-4 py-3">
                    <div
                      className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                        key === depositeDetailsData.length - 1
                          ? "after:h-0"
                          : "after:h-4/6"
                      }`}
                    >
                      {React.createElement(CreditCardIcon, {
                        className: `!w-5 !h-5 `,
                      })}
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="block font-medium"
                      >
                        {data.amount} TK by {data.user.username}
                      </Typography>
                      <Typography
                        as="span"
                        variant="small"
                        className="text-xs font-medium text-blue-gray-500"
                      >
                        {new Date(data.date).toLocaleDateString()}
                      </Typography>
                    </div>
                  </div>
                )
              ))
            }
           
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
