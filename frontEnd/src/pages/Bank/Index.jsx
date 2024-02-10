import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import url from "../../module";
import makeDeposit from "../../module/makeDeposit";
import { useToast, Spinner } from "@chakra-ui/react";
import { AuthContext } from "../../providers/AuthProvider";

export default function BankPay() {
  const { selectedLanguage } = useContext(AuthContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get("amount");
  const promotionId = queryParams.get("promotionId");
  const walletId = queryParams.get("walletId");
  const wallets = JSON.parse(localStorage.getItem("wallets"));
  const walletInfo = wallets?.filter((w) => w._id.match(walletId))[0];
  const [time, setTime] = useState(5 * 60);
  const [tranXId, setTranXId] = useState();
  const toast = useToast();
  const [loader, setLoader] = useState(false);
  // console.log(walletInfo);
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
  }, [time]);
  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}m ${formattedSeconds}s`;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      await makeDeposit(walletId,walletInfo.depositChannel==="Cash Out" ?amount:parseInt(amount)+(parseInt(amount)*1.5)/100, promotionId, tranXId);
      toast({
        title: "Successful deposit",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        window.close();
      }, 1500);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      toast({
        title: error.response.data.error,
        status: "info",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        window.close();
      }, 1500);
    }
  };
  if (!wallets) {
    return window.close();
  }

  return (
    <div className="w-screen h-screen bg-blue-500 p-3">
      <div className="text-white text-2xl font-medium w-full text-center py-2">
        {
          selectedLanguage ==='en' ? "  Transaction Pay":"সরাসরি পে"
        }
      </div>
      <div className="text-white text-center ">
      {
          selectedLanguage ==='en' ? " Welcome to Pay service. Transfer your money in time.":"পে সার্ভিসে স্বাগতম। সময়মতো আপনার টাকা স্থানান্তর করুন।"
        }
        
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
        {walletInfo?.depositChannel==="Cash Out"?(
          <div className="text-red-200 text-center">
          
          {
            selectedLanguage ==='en' ? "Cash Out ":"উত্তোলন "
          }
           <span className="font-bold">{amount}
          
          
          {
            selectedLanguage ==='en' ? "BDT":"টাকা"
          }
          </span> 
          {
            selectedLanguage ==='en' ? " using the number ":" নম্বর ব্যবহার করে"
          }
        
          <span className="font-bold">{walletInfo.walletNumber}</span>
        </div>
        ):(<div className="text-red-200 text-center">
          
        {
          selectedLanguage ==='en' ? "Send Money ":"পাঠান "
        }
         <span className="font-bold">{parseInt(amount)+(parseInt(amount)*1.5)/100}
        
        
        {
          selectedLanguage ==='en' ? "BDT":"টাকা"
        }
        </span> 
        {
          selectedLanguage ==='en' ? " using the number ":" নম্বর ব্যবহার করে"
        }
      
        <span className="font-bold">{walletInfo.walletNumber}</span>
      </div>)}
      </div>
      <div className="text-white text-center">
         {
            selectedLanguage ==='en' ? "Waiting Time:":"অপেক্ষার সময়:"
          } {formatDuration(time)}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={tranXId}
          required
          onChange={(e) => setTranXId(e.target.value)}
          className="w-full my-3 py-1 rounded-md px-2"
          placeholder="Transaction ID"
        />
        <div className="text-center">
          <button
            disabled={loader}
            type="submit"
            className="bg-green-300 px-4 py-1 rounded-md"
          >
            {loader ? (
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.100"
                color="blue.500"
                size={"sm"}
              />
            ) : (
              "Apply"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
