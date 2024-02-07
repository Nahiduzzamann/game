import React, { useEffect, useState } from "react";
import getUserNotification from "../../module/getUserNotification";
import { Spinner } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
import ResponsivePagination from "react-responsive-pagination";
const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(actionData);
  const itemsPerPage =6;
  const totalPages = Math.ceil(notifications?.length / itemsPerPage);

  useEffect(() => {
    getUserNotification()
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

const handleNavigate =(d)=>{
if (d==='DEPOSIT') {
  navigate('/user/history')
}
else if (d==='WITHDRAW') {
  navigate('/user/history')
}
else if (d==='VOUCHER') {
  navigate('/user/history')
}
else if (d==='REWARDS') {
  navigate('/user/rewards-history')
}
else if (d==='TURNOVER') {
  navigate('/user/turn-over')
}

}

  return (
    <div className="bg-gray-500 rounded-lg md:mt-0 mt-5 p-4">
    <div className="p-5 bg-white rounded-md">
      {loading ? (
        <div className="flex justify-center items-center ">
          <Spinner size="xl" color="blue.500" />
        </div>
      ) : (
        <div className="">
          {notifications?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((notification) => (
            <div onClick={()=>handleNavigate(notification.type)} key={notification._id} className={`${notification.read ? 'bg-yellow-300':'bg-gray-500' }  rounded-lg cursor-pointer p-1 mb-1 shadow-lg hover:shadow-blue-500`}>
              <div className="bg-white flex justify-between items-center rounded-md p-5">
                <div><h2 className="text-xl font-semibold mb-3">{notification.title}</h2>
                <p className="text-gray-600">{notification.details}</p></div>
                <p className="text-gray-400 mt-2">
                  {new Date(notification.date).toLocaleString()}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-3 flex justify-center items-center">
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
      </div>
    </div>
    </div>
   
  );
};

export default Notification;

