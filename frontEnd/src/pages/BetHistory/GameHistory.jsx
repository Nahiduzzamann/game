import React, { useEffect, useState } from "react";
import getGameHistory from "../../module/getGameHistory";
import GameHistoryCard from "./GameHistoryCard";

export default function GameHistory({ index }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getGameHistory(index).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [index]);
  return (
    <div>
      <div>
        <input
          className="border px-5 py-2 rounded-md w-full"
          placeholder="Search"
        />
      </div>
      {data?.map((d, i) => (
        <GameHistoryCard key={i} data={d} />
      ))}
    </div>
  );
}
