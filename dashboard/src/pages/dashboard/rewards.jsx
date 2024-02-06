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
    Spinner,
    Dialog,
    Input,
    CardFooter,
    Button,
  } from "@material-tailwind/react";
import getRewards from '@/modules/getRewards';
import deleteRewards from '@/modules/deleteRewards';
import createRewards from '@/modules/createRewards';
import ResponsivePagination from "react-responsive-pagination";

export default function Rewards() {
const [data,setData]=useState(null)
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 7;
const totalPages = Math.ceil(data?.length / itemsPerPage);

const[update,setUpdate]=useState()
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(!open);

const [bonusAmount,setBonusAmount]=useState(null)
const [level,setLevel]=useState(null)
const [targetAmount,setTargetAmount]=useState(null)

useEffect(()=>{
  getRewards()
  .then((res)=>{
    setData(res.data);
  })
  .catch((e)=>{
    console.log(e);
  })
},[update])

const handleDelete=(rewardId)=>{
  deleteRewards(rewardId)
  .then(()=>{
setUpdate(Math.random())
  })
  .catch((e)=>{
    console.log(e);
  })
}

const handleAddRewards=()=>{
  console.log(bonusAmount,level,targetAmount);
  createRewards(bonusAmount,level,targetAmount)
  .then(()=>{
    setUpdate(Math.random())
  })
  .catch((e)=>{
    console.log(e);
  })
  handleOpen()
}
if (!data) {
  return <div className='flex justify-center'><Spinner color='blue'></Spinner></div>
}

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
          <Typography variant="h6" color="white">
            Rewards Table
          </Typography>
          <Typography  onClick={handleOpen} variant="h6" color="white" className='cursor-pointer border border-white px-2 rounded'>
            +
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["level", "Target Turnover", "Bonus Amount", "date",""].map((el) => (
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
              {data?.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
).map(
                ({_id, bonusAmount, date, level, targetTurnover}, key) => {
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
                              {level}
                            </Typography>
                        
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {targetTurnover}
                        </Typography>
                       
                      </td>
                      <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                          {bonusAmount}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography onClick={()=>handleDelete(_id)} className="text-xs font-semibold bg-red-500 px-2 py-1 text-center cursor-pointer text-white rounded">
                         delete
                        </Typography>
                      </td>
                     
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <div className='mt-3' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
       <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
       </div>
        </CardBody>
      </Card>
      <Dialog
        
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[50rem] p-2">
        <Typography variant="h4" color="blue-gray">
              Add Rewards 
            </Typography>
       
          <CardBody className="grid grid-cols-2 gap-4">
            
            <div>
            <Typography className="mb-2" variant="h6">
              Level
            </Typography>
            <Input
            required
              label="Level"
              size="lg"
              name="level"
              value={level}
              onChange={(e)=>setLevel(e.target.value)}
            />
            </div>
            
            <div>
            <Typography className="mb-2" variant="h6">
             Target Amount
            </Typography>
            <Input
              required
              label="Target amount"
              size="lg"
              name="targetamount"
              value={targetAmount}
              onChange={(e)=>setTargetAmount(e.target.value)}
            />
            </div>
           <div>
           <Typography className="mb-2" variant="h6">
              Bonus Amount
            </Typography>
            <Input
              required
              label="Bonus Amount"
              size="lg"
              name="bonusamount"
              value={bonusAmount}
              onChange={(e)=>setBonusAmount(e.target.value)}
            />
           </div>
            
            
          </CardBody>
  
         
          <CardFooter className="pt-5">
            <Button variant="gradient" onClick={handleAddRewards} fullWidth>
              Save
            </Button>
            
          </CardFooter>
        </Card>
      </Dialog>
      </div>
  )
}
