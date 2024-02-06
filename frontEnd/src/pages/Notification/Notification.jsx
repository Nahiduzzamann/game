import React, { useEffect, useState } from "react";
import getUserNotification from "../../module/getUserNotification";
const Notification = () => {
  const [notification,setNotification]=useState(null)
  useEffect(() => {
    getUserNotification()
    .then((res)=>{
      setNotification(res.data)
    })
    .then((e)=>{
      console.log(e);
    })
  }, []);
  return (
    <div className="bg-gray-500 rounded-lg md:mt-0 mt-5 p-4">
      <div className="p-5 bg-white rounded-md">
        ok
      </div>
    </div>
  );
};
export default Notification;
