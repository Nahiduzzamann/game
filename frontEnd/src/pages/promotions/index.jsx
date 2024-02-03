import React, { useEffect, useState } from "react";
import PromotionsCard from "../../components/PromotionsCard";
import getPromotions from "../../module/getPromotions";
import url from "../../module";
import { Spinner } from "@chakra-ui/react";

const Promotions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPromotions("")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
if(!data){
  return (<div className="flex justify-center items-center h-screen"> <Spinner className="text-blue-500"></Spinner></div>)
}
  return (
    <div className="px-6 py-3">
      <div>
        <img
          src="https://akm-media.9terawolf.com/images/babu/game_banner/rng.jpg"
          className="w-full rounded-t-xl"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        {data?.map((card, i) => (
          <PromotionsCard
            key={i}
            applicable={card.applicable}
            details={card.details}
            banner={`${url}${card.image}`}
            title={card.title}
            description={card.description}
            id={card._id}
          ></PromotionsCard>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
