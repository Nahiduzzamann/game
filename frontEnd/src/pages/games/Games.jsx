import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gateGame from "../../module/getGames";
import url from "../../module";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function Games() {
  const { system, index } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const games = async () => {
      try {
        const res = await gateGame(url, index, system);
        console.log(res.data);
        setData(res.data);
      } catch (error) {}
    };
    games();
  }, [system,index]);
  return (
    <div className=" container mx-auto">
      {/* <InputGroup>
        <InputLeftElement pointerEvents="none"></InputLeftElement>
        <Input type="tel" placeholder="Phone number" />
      </InputGroup> */}
      <div className="flex gap-4 flex-wrap">
        {data.map((doc, i) => (
          <div className="w-[100px]">
            <img className="w-[100px] h-[100px]" src={doc.image_square} />
            {doc.name}
          </div>
        ))}
      </div>
    </div>
  );
}
