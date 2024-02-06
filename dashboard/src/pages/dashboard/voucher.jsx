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
  } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import getVoucher from '@/modules/getVoucher';
export default function Voucher() {
    const [voucher,setVoucher]=useState()
    useEffect(()=>{
        getVoucher().then(res=>{
            setVoucher(res.data)
            console.log(res.data);
        })
    },[])
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <div className='flex w-full justify-between'>
          <Typography variant="h6" color="white">
            Voucher List
          </Typography>
          <Typography className='flex items-center gap-2 cursor-pointer' variant="h6" color="white">
          <PlusIcon
              strokeWidth={2}
              className="h-5 w-5 text-inherit"
            />
            Add Voucher
            
          </Typography>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["code", "bonus", "used by", "status"].map((el) => (
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
                {voucher?.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.code}</td>
                        <td>{d.bonusAmount}</td>
                        <td>{d.userId}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
      </div>
  )
}
