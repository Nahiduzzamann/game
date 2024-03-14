
import createBankWallet from "@/modules/createBankWallet";
import deleteTurnover from "@/modules/deleteTurnover";
import editAdminBank from "@/modules/editAdminBank";
import getAdminWallet from "@/modules/getAdminWallet";
import getTurnOverHistory from "@/modules/getTurnOverHistory";
import postPromotionWithTurnover from "@/modules/postPromotionWithTurnover";
import url from "@/modules/url";
import { EllipsisVerticalIcon, PlusCircleIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Option, Progress, Select, Spinner, Textarea, Tooltip, Typography } from "@material-tailwind/react";
import React,{ useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
const Banks =()=>{
  const [data,setData]=useState()
  const [editData,setEditData]=useState(null)
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const [loading, setLoading]=useState(false)
  const [open, setOpen] = React.useState(false);
  const [update,setUpdate]=useState()
 
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    setLoading(true)
    getAdminWallet()
      .then((res)=>{
        setLoading(false)
        setData(res.data);
      })
     .catch((err)=>{
      setLoading(false)
      console.log(err);
     })
  }, [update])

// console.log(editData);
  const [formData, setFormData] = React.useState({
    methodName: "",
    slogan: "",
    depositChannel:"",
    walletNumber:"",
    image: null,
  });

  useEffect(()=>{

    setFormData(
        {
            methodName: editData?.methodName || "",
            slogan: editData?.slogan || "",
            depositChannel: editData?.depositChannel || "",
            walletNumber: editData?.walletNumber || "",
            image: null,
          }
    )

  },[editData])
//   console.log(formData?.depositChannel);
  const handleChange = (e) => {
    if(!e.target){
        setFormData((prevData) => ({ ...prevData, depositChannel: e })); 
        return 
    }
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: imageFile }));
  };

  const handleSave = () => {
    const formDataObject = new FormData()
    formDataObject.append("methodName",formData.methodName)
    formDataObject.append("slogan",formData.slogan)
    formDataObject.append("depositChannel",formData.depositChannel)
    formDataObject.append("walletNumber",formData.walletNumber)
    formDataObject.append("id",editData?._id)
    {
        formData.image && formDataObject.append("icon",formData.image)
    }
    
    // console.log(formDataObject);

    if(editData){
        editAdminBank(formDataObject)
    .then((res)=>{
        setEditData(null)
      setUpdate(Math.random())
    })
   .catch((err)=>{
    console.log(err);
    setEditData(null)
   })
       
       
    }else{
        createBankWallet(formDataObject)
        .then((res)=>{
          setUpdate(Math.random())
        })
       .catch((err)=>{
        console.log(err);
    
       })
    }


    handleOpen()
  };

return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
       <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between">
          <Typography variant="h6" color="white">
            Banks Table
          </Typography>
          <Button onClick={()=>{
            handleOpen()
            setEditData(null)
            }} variant="gradient">
       +Add Bank
      </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
{
  loading ? (<div className="h-screen flex justify-center items-center"><Spinner color="blue"></Spinner></div>):(<table className="w-full min-w-[640px] table-auto">
  <thead>
    <tr>
      {["bank", "acount","Slogan",'Action'].map(
        (el) => (
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
        )
      )}
    </tr>
  </thead>
  <tbody>
    {data?.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
).map(
      (data, key) => {
        const className = `py-3 px-5 ${
          key === data.length - 1
            ? ""
            : "border-b border-blue-gray-50"
        }`;

        return (
          <tr key={key}>
             <td className={className}>
                          <div className="flex items-center gap-4">
                          <Avatar src={`${url}${data.icon}`} alt="avatar" variant="rounded" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {data.methodName}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                              {data.walletNumber}
                              </Typography>
                            </div>
                          </div>
                        </td>
            <td className={className}>
            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {data.depositChannel}
                              </Typography>
            </td>
            <td className={className}>
            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {data.slogan}
                              </Typography>
            </td>
            
            <td className={className}>
            <Button onClick={()=>{
                setEditData(data)
                handleOpen()
            }} 
            variant="gradient">
       Edit
      </Button>
            </td>
          </tr>
        );
      }
    )}
  </tbody>
</table>)
}
          

          <div className="mt-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
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
        <Typography className="ml-4" variant="h4" color="blue-gray">
              Edit Your Bank 
            </Typography>
            <form id="form">
          <CardBody className="grid grid-cols-2 gap-4">
            
            <div>
            <Typography className="mb-2" variant="h6">
              Bank Name
            </Typography>
            <Input
            required
            maxLength={12}
              label="Bank Name"
              size="lg"
              name="methodName"
              value={formData.methodName}
              onChange={handleChange}
            />
            </div>
            
            <div>
            <Typography className="mb-2" variant="h6">
              Bank Number
            </Typography>
            <Input
              required
              label="Bank Number"
              size="lg"
              name="walletNumber"
              maxLength={11}
              minLength={11}
              value={formData.walletNumber}
              onChange={handleChange}
            />
            </div>
            <div>
            <Typography className="mb-2" variant="h6">
              Bank Slogan
            </Typography>
            <Input
              required
              maxLength={60}
              label="Bank Slogan"
              size="lg"
              name="slogan"
              value={formData.slogan}
              onChange={handleChange}
            />
            </div>
         
           
            <div className="">
            <Typography className="mb-2" variant="h6">
              Deposit Chanel
            </Typography>
      <Select  value={formData.depositChannel} name="depositChannel" onChange={handleChange} label="Select Deposit Chanel">
        <Option value="Cash Out">Deposit By Cash Out</Option>
        <Option value="Send Money">Deposit By Send Money</Option>
        
        
      </Select>
    </div>
          
            <div>
            <Typography className="mb-2" variant="h6">
              Image
            </Typography>
            <Input
              required ={editData? false:true}
              type="file"
              label="Image"
              size="lg"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
            </div>
            
          </CardBody>
          </form>
          {formData.image && (
              <img
                src={URL.createObjectURL( formData.image)}
                alt="Selected"
                className="mt-3 rounded-lg w-full h-40 object-cover"
              />
            )}
          <CardFooter className="pt-5">
            <Button variant="gradient" onClick={handleSave} fullWidth>
              Save
            </Button>
            
          </CardFooter>
        </Card>
      </Dialog>
    </div>
)
}
export default Banks