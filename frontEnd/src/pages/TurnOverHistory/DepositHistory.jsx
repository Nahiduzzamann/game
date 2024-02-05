import React from "react";
import HistoryCard from "./HistoryCard";


export default function DepositHistory({data}) {
  return(
    <div>
     
      {data?.map((d,i)=>(
        <HistoryCard key={i} data={d}/>
      ))}
    </div>
  )
 
}
