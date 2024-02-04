
import getTurnOverHistory from "@/modules/getTurnOverHistory";
import { EllipsisVerticalIcon, PlusCircleIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Card, CardBody, CardHeader, Dialog, DialogBody, DialogFooter, DialogHeader, Progress, Spinner, Tooltip, Typography } from "@material-tailwind/react";
import React,{ useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
const Turnovers =()=>{
  const [data,setData]=useState()
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const [loading, setLoading]=useState(false)
  const [open, setOpen] = React.useState(false);
 
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
  }, [])


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

return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
       <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between">
          <Typography variant="h6" color="white">
            Turnovers Table
          </Typography>
          <Button onClick={handleOpen} variant="gradient">
       +
      </Button>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
{
  loading ? (<div className="h-screen flex justify-center items-center"><Spinner color="blue"></Spinner></div>):(<table className="w-full min-w-[640px] table-auto">
  <thead>
    <tr>
      {["Turnover Parcentage", "members", "target amount", "completion"].map(
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
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
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
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
)
}
export default Turnovers