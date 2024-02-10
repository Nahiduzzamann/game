import getNotification from '@/modules/getNotification'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Spinner
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import ResponsivePagination from "react-responsive-pagination";

export default function Messages() {
    const [messages,setMessages]=useState()
    const navigate=useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(messages?.length / itemsPerPage);
    useEffect(()=>{
      const load=async()=>{
        const d=await getNotification()
        console.log(d.data);
        setMessages(d.data)
      }
       load()
      },[])
      if(!messages){
        return <div className='flex justify-center items-center py-20'><Spinner className='text-blue-500'></Spinner></div>
      }
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
    <Card>
      <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
        <Typography variant="h6" color="white">
         Message Table
        </Typography>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["author", "title", "message"].map((el) => (
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
            {messages?.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
                ).map((doc,i)=>(
                 <tr onClick={()=>navigate(`/dashboard/${doc.type.toLowerCase()}s`)} className={`${!doc.read?"bg-gray-700 text-white":"bg-white text-black"} cursor-pointer `} key={i}>
                     <td className="border-b border-blue-gray-50 py-3 px-5 text-left">{doc.userId}</td>
                     <td className="border-b border-blue-gray-50 py-3 px-5 text-left">{doc.title}</td>
                     <td className="border-b border-blue-gray-50 py-3 px-5 text-left">{doc.details}</td>
               </tr>
            ))}
            {messages?.length==0&&(<div className="border-b border-blue-gray-50 py-3 px-5 text-left">No message</div>)}
          </tbody>
         
        </table>
        <div className="mt-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
       <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
       </div>
      </CardBody>
    </Card></div>
  )
}
