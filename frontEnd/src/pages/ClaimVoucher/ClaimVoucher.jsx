import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import applyVoucher from "../../module/applyVoucher";
import { useToast } from "@chakra-ui/react";
const ClaimVoucher = () => {
  const { selectedLanguage,setUpdateUserState } = useContext(AuthContext);
  const [voucherCode, setVoucherCode] = useState("");
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);
const toast =useToast()
  const handleVoucherChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    applyVoucher(voucherCode)
    .then(()=>{
      setIsVoucherApplied(true);
      toast({
        title: "Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUpdateUserState(Math.random())
    })
    .catch((e)=>{
      toast({
        title: e.response.data.error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    
    })

  };
  return (
    <div className="bg-gray-500 rounded-lg p-4">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-center p-5 font-bold border-b-4 border-indigo-300 text-3xl">
         
          {
          selectedLanguage ==='en' ? " Claim Voucher":"ভাউচার দাবি করুন"
        }
        </h1>
        <div className="py-10">
          <form onSubmit={handleApplyVoucher} >
            <label className="block font-bold mb-2" htmlFor="voucherCode">
             
              {
          selectedLanguage ==='en' ? " Apply Voucher ":"ভাউচার আবেদন করুন"
        }
        <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="voucherCode"
              value={voucherCode}
              onChange={handleVoucherChange}
              className="border-2 border-blue-500 rounded-lg p-2 mb-4"
            />
            <br />
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              
              {
          selectedLanguage ==='en' ? "Apply":"আবেদন করুন"
        }
            </button>
          </form>

          {isVoucherApplied && (
            <div className="mt-4 text-green-500 font-bold">
              
              {
          selectedLanguage ==='en' ? "Voucher applied successfully!":"ভাউচার আবেদন করা হয়েছে!"
        }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimVoucher;
