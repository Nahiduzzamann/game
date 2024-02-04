
import deleteTurnover from "@/modules/deleteTurnover";
import getTurnOverHistory from "@/modules/getTurnOverHistory";
import postPromotionWithTurnover from "@/modules/postPromotionWithTurnover";
import { EllipsisVerticalIcon, PlusCircleIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Progress, Spinner, Textarea, Tooltip, Typography } from "@material-tailwind/react";
import React,{ useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
const Turnovers =()=>{
  const [data,setData]=useState()
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const [loading, setLoading]=useState(false)
  const [open, setOpen] = React.useState(false);
  const [update,setUpdate]=useState()
 
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    setLoading(true)
    getTurnOverHistory()
      .then((res)=>{
        setLoading(false)
        setData(res.data);
      })
     .catch((err)=>{
      setLoading(false)
      console.log(err);
     })
  }, [update])


  const calculateAverageCompletionPercentage = (deposit, turnOverAmount) => {

    if(deposit.length >0){
 // Step 1: Calculate total turnOverAmount achieved
 const totalTurnoverAchieved = deposit.reduce((total, user) => total + user.totalTurnover, 0);

 // Step 2: Calculate total turnOverAmount expected
 const totalTurnoverExpected = deposit.length * turnOverAmount;

 // Step 3: Calculate average completion percentage
 const averageCompletionPercentage = (totalTurnoverAchieved / totalTurnoverExpected) * 100;

 return averageCompletionPercentage.toFixed(2);
    }
return 0;
   
  };

  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    details: "",
    bonusPercentage: "",
    turnOverAmount: "",
    image: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: imageFile }));
  };

  const handleSave = () => {
    const formDataObject = new FormData()
    formDataObject.append("title",formData.title)
    formDataObject.append("description",formData.description)
    formDataObject.append("details",formData.details)
    formDataObject.append("bonusPercentage",formData.bonusPercentage)
    formDataObject.append("turnOverAmount",formData.turnOverAmount)
    formDataObject.append("image",formData.image)
    // console.log(formDataObject);
    postPromotionWithTurnover(formDataObject)
    .then((res)=>{
      setUpdate(Math.random())
    })
   .catch((err)=>{
    console.log(err);

   })

    handleOpen()
  };

  const handleDelteturnover=(id)=>{
    deleteTurnover(id)
    .then((res)=>{
      setUpdate(Math.random())
    })
   .catch((err)=>{
    console.log(err);

   })

  }
return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
       <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between">
          <Typography variant="h6" color="white">
            Turnovers Table
          </Typography>
          <Button onClick={handleOpen} variant="gradient">
       +Add Turnover
      </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
{
  loading ? (<div className="h-screen flex justify-center items-center"><Spinner color="blue"></Spinner></div>):(<table className="w-full min-w-[640px] table-auto">
  <thead>
    <tr>
      {["Turnover Parcentage", "members", "target amount", "completion",''].map(
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
             
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {data.title}
                </Typography>
              </div>
            </td>
            <td className={className}>

              {
                data.deposit.length >0 ? (data.deposit.map((data, key) => (
                  <Tooltip key={key} content={data.userId}>
                    <Avatar
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
    
                      size="xs"
                      variant="circular"
                      className={`cursor-pointer border-2 border-white ${
                        key === 0 ? "" : "-ml-2.5"
                      }`}
                    />
                  </Tooltip>
                ))):(<p>Empty</p>)
              }

            </td>
            <td className={className}>
              <Typography
                variant="small"
                className="text-xs font-medium text-blue-gray-600"
              >
                {data.turnOverAmount}
              </Typography>
            </td>
            <td className={className}>
              <div className="w-10/12">
                <Typography
                  variant="small"
                  className="mb-1 block text-xs font-medium text-blue-gray-600"
                >
                  {
                    calculateAverageCompletionPercentage(data.deposit,data.turnOverAmount)

                  }%
                </Typography>
                <Progress
                  value={calculateAverageCompletionPercentage(data.deposit,data.turnOverAmount)}
                  variant="gradient"
                  color={calculateAverageCompletionPercentage(data.deposit,data.turnOverAmount) === 100 ? "green" : "gray"}
                  className="h-1"
                />
              </div>
            </td>
            <td onClick={()=>handleDelteturnover(data._id)} className="text-red-500 cursor-pointer rounded text-center hover:bg-gray-400">
              Delete
            </td>
          </tr>
        );
      }
    )}
  </tbody>
</table>)
}
          

          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
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
              Add Turnover 
            </Typography>
            <form id="form">
          <CardBody className="grid grid-cols-2 gap-4">
            
            <div>
            <Typography className="mb-2" variant="h6">
              Title
            </Typography>
            <Input
            required
              label="Title"
              size="lg"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            </div>
            <div>
            <Typography className="mb-2" variant="h6">
              Description
            </Typography>
            <Textarea
            
              label="Description"
              size="lg"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            </div>
            <div>
            <Typography className="mb-2" variant="h6">
              Details
            </Typography>
            <Textarea
              label="Details"
              size="lg"
              name="details"
              value={formData.details}
              onChange={handleChange}
            />
            </div>
            <div>
            <Typography className="mb-2" variant="h6">
              Bonus Percentage
            </Typography>
            <Input
              required
              label="Bonus Percentage"
              size="lg"
              name="bonusPercentage"
              value={formData.bonusPercentage}
              onChange={handleChange}
            />
            </div>
           <div>
           <Typography className="mb-2" variant="h6">
              Turn Over Amount
            </Typography>
            <Input
              required
              label="Turn Over Amount"
              size="lg"
              name="turnOverAmount"
              value={formData.turnOverAmount}
              onChange={handleChange}
            />
           </div>
            <div>
            <Typography className="mb-2" variant="h6">
              Image
            </Typography>
            <Input
              required
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
export default Turnovers