import React, { useEffect, useState } from "react";
import getCategory from "../../../module/getCategory";
import url from "../../../module";

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
    <div>
      {data?.map((data, i) => (
        <div key={i}>{data.title}</div>
      ))}
      stsgdfh
    </div>
  );
};
export default Header;
