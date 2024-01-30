import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ClaimVoucher = () => {
  const { selectedLanguage } = useContext(AuthContext);
  const [voucherCode, setVoucherCode] = useState("");
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);

  const handleVoucherChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    // Here you can implement voucher validation logic or make API calls
    // For simplicity, let's just set a flag to indicate the voucher is applied
    setIsVoucherApplied(true);
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
          selectedLanguage ==='en' ? " Apply Voucher ":"ভাউচার প্রয়োগ করুন"
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
          selectedLanguage ==='en' ? "Voucher applied successfully!":"ভাউচার সফলভাবে প্রয়োগ করা হয়েছে!"
        }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimVoucher;
