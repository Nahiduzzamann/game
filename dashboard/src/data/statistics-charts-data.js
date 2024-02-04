import { chartsConfig } from "@/configs";

const websiteViewsChart=(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth) => ({
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
});

const dailySalesChart=(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth) => ({
  type: "line",
  height: 220,
  series: [
    {
      name: "Deposit",
      data:depositeData?.monthlyDeposit.reverse().slice(0,8).map((data)=>data.deposit) || [0,0,0,0,0,0,0,0,0],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: depositeData?.monthlyDeposit.slice(0,8).map((data)=>data.month) ||  [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
});

const completedTaskChart=(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth) => ({
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: revenueData?.monthlyHistory.reverse().slice(0,8).map((data)=>data.revenue.toFixed()) || [0,0,0,0,0,0,0,0,0],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: revenueData?.monthlyHistory.reverse().slice(0,8).map((data)=>data.month) || [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
});
const completedTasksChart=(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth) => ({
  ...completedTaskChart(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth),
  series: [
    {
      name: "Revenue",
      data: revenueData?.monthlyHistory.slice(0,8).map((data)=>data.revenue.toFixed()) || [0,0,0,0,0,0,0,0,0],
    },
  ],
  xaxis: {
    ...chartsConfig.xaxis,
    categories: revenueData?.monthlyHistory.reverse().slice(0,8).map((data)=>data.month) || [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
});

export const statisticsChartsData=(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth,refreshTime) => ([
  {
    color: "white",
    title: "Website View",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: websiteViewsChart(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth),
  },
  {
    color: "white",
    title: "Deposit Report",
    description: `${revenueDataLastMonth}% ${revenueDataLastMonth <=0 ? 'decrease':'increase'} than last month`,
    footer: `${refreshTime <= 0 ? 'Just Updated':(`Updated ${refreshTime}  min ago`) } `,
    chart: dailySalesChart(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth),
  },
  {
    color: "white",
    title: "Revenue Report",
    description: `${depositeDataLastMonth}% ${depositeDataLastMonth <=0 ? 'decrease':'increase'} than last month`,
    footer: `${refreshTime <= 0 ? 'Just Updated':(`Updated ${refreshTime}  min ago`) } `,
    chart: completedTasksChart(revenueData,depositeData,revenueDataLastMonth,depositeDataLastMonth),
  },
]);

export default statisticsChartsData;
