import React from "react";
import { v1 } from "uuid";
import HistoryCard from "./HistoryCard";
const DATA = [
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
  {
    date: new Date(),
    method: "Bkash",
    channel: "DPAY",
    id: v1(),
    amount: 500,
    bonus: 0,
    status: "Pending",
    remark: "---",
  },
];

export default function WithdrawalHistory() {
  return(
    <div>
      <div>
        <input className="border px-5 py-2 rounded-md w-full" placeholder="Search"/>
      </div>
      {DATA.map((d,i)=>(
        <HistoryCard key={i} data={d}/>
      ))}
    </div>
  )
 
}
