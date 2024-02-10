import getDepositeDetails from '@/modules/getDepositDetails';
import postDepositeStatus from '@/modules/postDepositStatus';
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import ResponsivePagination from "react-responsive-pagination";

export default function Deposit() {
const [handleFetch,setHandleFatch]=useState()
  const [depositeData, setDepositeData] = useState(null);
const [loading, setLoading]=useState(false)
    // console.log(depositeData);
    useEffect(() => {
      setLoading(true)
      getDepositeDetails()
        .then((res)=>{
          setLoading(false)
            setDepositeData(res.data);
        })
       .catch((err)=>{
        setLoading(false)
        console.log(err);
       })
    }, [handleFetch])
    const [currentPage, setCurrentPage] = useState(1);
    const [actionData, setactionData] = useState(null);
    // console.log(actionData);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(depositeData?.length / itemsPerPage);
    const [open, setOpen] = React.useState(false);
 const [message,setMessage]=useState("")
    const handleOpen = (data) =>{
      setactionData(data)
      setOpen(!open)
    };

    const handleConfirm = (status)=>{
      postDepositeStatus(actionData._id,status,message,actionData.user.username)
      .then((res)=>{
        setOpen(false)
        setactionData(null)
        setHandleFatch(Math.random())
// console.log(res);
      })
      .catch((err)=>{
        setOpen(false)
        setactionData(null)
        setHandleFatch(Math.random())
console.log(err);
      })
    }
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {
        loading ? (<div className='flex justify-center items-center'><Spinner className='text-blue-500'></Spinner></div>):(<Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Deposite Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["users", "Deposite Request", "status", "Deposite Date", "Action"].map((el) => (
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
                {depositeData?.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            ).map(
                  (data, key) => {
                    const className = `py-3 px-5 ${
                      key === depositeData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={key}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {data.user.username}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {data.user.phone}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {data.amount} | ( <span className='font-bold text-red-400'>{data.tranXId || 'Empty tranXId'}</span> )
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {data.remarks || '-'}
                          </Typography>
                        </td>
                        <td className={className}>
                        <div
    className={`relative grid select-none items-center whitespace-nowrap rounded-lg ${data.status=== "PENDING" && 'bg-amber-500' || data.status=== "ACCEPTED" && 'bg-blue-500' ||data.status=== "CANCELLED" && 'bg-red-500'} py-1.5 px-3 w-min font-sans text-xs font-bold uppercase text-white`}>
    <span class="text-red">{data.status}</span>
  </div>
                          
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {new Date(data.date).toLocaleDateString()}
                          </Typography>
                        </td>
                        <td className={className}>
                        <div>
                        {
                          data.status=== "PENDING" && (<Button onClick={()=>handleOpen(data)} variant="gradient" color='light-blue'>
                          Accepte/Cancel
                        </Button>)
                        }
      
      
    </div>
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
        </Card>)
      }
      <Dialog open={open}>
        <div className='flex justify-between items-center m-4 text-2xl'><span>Deposite Amount: <span className='text-red-500 font-semibold'>{actionData?.amount}</span>tk</span> <p onClick={handleOpen} className='border border-red-500 p-1 rounded-md'>X</p></div>
        <DialogBody>
        <input
        className=' p-1 border border-blue-300 rounded'
        type="text"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Type reason if caneled "
      />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={()=>handleConfirm("")}
            className="mr-1"
          >
            <span>Deposite Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={()=>handleConfirm("tyjy")}>
            <span>Deposite Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
