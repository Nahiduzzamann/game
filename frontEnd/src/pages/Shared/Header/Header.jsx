import React, { useEffect, useState } from "react";
import { getGamesCategory } from "../../../module";

const Header = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const cats = async () => {
      try {
        const cat = await getGamesCategory();
        console.log(cat);
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
    </div>
  );
};
export default Header;
