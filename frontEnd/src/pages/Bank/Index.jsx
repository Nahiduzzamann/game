import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import url from "../../module";

export default function BankPay() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get("amount");
  const promotionId = queryParams.get("promotionId");
  const walletId = queryParams.get("walletId");
  const wallets = JSON.parse(localStorage.getItem("wallets"));
  const walletInfo = wallets?.filter((w) => w._id.match(walletId))[0];
  const [time, setTime] = useState(5*60);
  console.log(walletInfo);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((v) => (v > 0 ? v - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (time === 0) {
      window.close();
    }
  },[time]);
  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}m ${formattedSeconds}s`;
  }
  if (!wallets) {
    return window.close();
  }

  return (
    <div className="w-screen h-screen bg-blue-500 p-3">
      <div className="text-white text-2xl font-medium w-full text-center py-2">
        Direct Pay
      </div>
      <div className="text-white text-center ">
        Welcome to Direct Pay service. Transfer your money in time.
      </div>
      <div className="w-full flex flex-wrap justify-center my-4">
        <img
          className="w-10 h-10 rounded-md"
          src={`${url}${walletInfo?.icon}`}
        />
        <div className="w-full text-center text-lg text-white font-medium">
          {walletInfo?.methodName}
        </div>
        <div className="w-full text-center text-sm text-white">
          {walletInfo?.slogan}{" "}
        </div>
        <div className="text-red-200 text-center">
          Cash Out using the number {walletInfo.walletNumber}
        </div>
      </div>
      <div className="text-white text-center">
        Waiting Time: {formatDuration(time)}
      </div>
      <input
        className="w-full my-3 py-1 rounded-md px-2"
        placeholder="Transaction ID"
      />
      <div className="text-center">
        <button
          onClick={() => {
            window.close();
          }}
          className="bg-green-300 px-4 py-1 rounded-md"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
