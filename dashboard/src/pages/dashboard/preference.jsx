import React, { useContext, useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
    Spinner,Input,Alert
  } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import getVoucher from '@/modules/getVoucher';
import createVoucher from '@/modules/createVoucher';
import ResponsivePagination from "react-responsive-pagination";
import { SearchContext } from '@/providers/searchProvider';
import getSliders from '@/modules/getSliders';
import url from '@/modules/url';
import deleteSlider from '@/modules/deleteSlider';
export default function Preference() {
  const [slider,setSlider]=useState(null)
  const [update,setUpdate]=useState(null)
    const [open, setOpen] = React.useState(false);
    const [code,setCode]=useState()
    const [alert,setAlert]=useState(false)
    const [loader,setLoader]=useState(false)

    useEffect(()=>{
     
      getSliders().then(res=>{
        setSlider(res.data)
            console.log(res.data);
        })
    },[update])
   

    const handleSubmit=async()=>{
      // setLoader(true)
      // try {
      //   await createVoucher(code,amount)
      //   setCode("")
      //   setAmount("")
      //   handleOpen()
      //   setLoader(false)
      //   setAlert("Voucher is added successful")

      // } catch (error) {
      //   handleOpen()
      //   setLoader(false)
      //   //console.log()
      //   setAlert(error.response.data.code?"Code has already used":error.response.data?.error)
      // }
    }
    const handleDelete=(id)=>{
      deleteSlider(id)
      .then(()=>{
        setSlider(null)
    setUpdate(Math.random())
      })
      .catch((e)=>{
        console.log(e);
      })
    }
    const handleOpen = () => setOpen(!open);
    if(!slider){
        return <div className='flex justify-center items-center min-h-screen'><Spinner className='text-blue-500'></Spinner></div>
    }
  return (
    <div>
<div className='flex flex-col md:flex-row justify-between'>
      <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <div className='flex w-full justify-between'>
          <Typography variant="h6" color="white">
            Slider Image List
          </Typography>
          <Typography onClick={handleOpen} className='flex items-center gap-2 cursor-pointer' variant="h6" color="white">
          <PlusIcon
              strokeWidth={2}
              className="h-5 w-5 text-inherit"
            />
            Add Slider Image
          </Typography>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Image", "Action"].map((el) => (
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
                {slider?.map((d,i)=>(
                    <tr key={i}>
                        <td  className="border-b border-blue-gray-50 py-3 px-5 text-left">
                          <img className='h-20 w-40' src={`${url}${d.path}`} alt="slider" />
                          </td>
                        <td>
                        <Typography onClick={()=>handleDelete(d._id)} className="text-xs font-semibold bg-red-500 px-2 mr-3 py-1 text-center cursor-pointer text-white rounded">
                         delete
                        </Typography>
                      </td>
                        
                    </tr>
                ))}
                {slider?.length===0&&(
                    <div  className="border-b border-blue-gray-50 py-3 px-5 text-left">No Slider</div>
                )}
            </tbody>
          </table>
          <div className="mt-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      
       </div>
        </CardBody>
      </Card>
      
      </div>
<div>Change Password</div>

    </div>
    {/* <Dialog size={"xs"}
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Add Slider Image</DialogHeader>
        <DialogBody>
        <div className='grid gap-3'>
        <Input value={code} onChange={e=>setCode(e.target.value)} label="Give a unique code (eg. AAA)" />
        <Input value={amount} onChange={e=>setAmount(e.target.value)} type={"number"} label="Give bonus amount" />
        </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button disabled={loader} variant="gradient" color="green" onClick={handleSubmit}>
            {loader?(<span>Loading...</span>):(<span>Confirm</span>)}
          </Button>
        </DialogFooter>
      </Dialog>
      <Alert
        open={alert}
        onClose={() => setAlert(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        {alert}
      </Alert> */}
    </div>
    
    
  )
}

