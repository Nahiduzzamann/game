import React, { useContext, useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Spinner,
  } from "@material-tailwind/react";
import getUsers from '@/modules/getUsers';
import { SearchContext } from '@/providers/searchProvider';
import ResponsivePagination from "react-responsive-pagination";
export default function Users() {
 const [data,setData]=useState(null)
 const { searchData, setSearchData } = useContext(SearchContext);
 const [currentPage, setCurrentPage] = useState(1);
 // console.log(actionData);
 const itemsPerPage = 10;
 const totalPages = Math.ceil(data?.filter(d=>d.username?.toLowerCase().match(searchData?.toLowerCase())).length / itemsPerPage);
  useEffect(()=>{
 getUsers()
    .then((res)=>{
      setData(res.data);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])

  if (!data) {
    return <div className='flex justify-center'><Spinner color='blue'></Spinner></div>
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">
          User Table ({data?.length})
        </Typography>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["username", "balance", "phone", "created",].map((el) => (
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
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.filter(d=>d.username?.toLowerCase().match(searchData?.toLowerCase())).slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            ).map(
              ({ username, balance, phone, date}, key) => {
                const className = `py-3 px-5 ${
                  key === data.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={key}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {username}
                          </Typography>
                          
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {balance?.toFixed(2)}
                      </Typography>
                    
                    </td>
                    <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                        {phone}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {date }
                      </Typography>
                    </td>
                  
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:10}}>
         <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
         </div>
      </CardBody>
    </Card>
    </div>
  )
}
