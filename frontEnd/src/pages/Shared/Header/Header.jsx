import React, { useEffect, useState } from "react";
import getCategory from "../../../module/getCategory";
import url from "../../../module";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const cats = async () => {
      try {
        const cat = await getCategory(url);
        setData(cat.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    cats();
    //setData(cat);
    //console.log(cat);
  }, []);
  return (
    <div className=" py-2">
      <div className="flex items-center justify-between">
        <img className="w-[150px]" src={logo} />
        <div className="flex gap-4 px-6">
          <button>Login</button>
          <button>Sign Up</button>
          <div>Eng</div>
        </div>
      </div>
      <div className="flex gap-5 bg-blue-500 text-white px-6 py-4">
        {data?.map((data, i) => (
          <div
            className="cursor-pointer hover:text-gray-300 font-semibold text-md"
            key={i}
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Header;
