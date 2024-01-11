import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import gateGameById from "../../module/getGameById";

const PlayGame = () => {
  const { id } = useParams();
//   console.log(id);
  useEffect(() => {
    const games = async () => {
      try {
        const res = await gateGameById(id);
        console.log(res.data);
      } catch (error) {
        console.log(error.response?.data?.error);
      }
    };
    games();
  }, [id]);
  return (
    <div>
      <div>playinmg gamew</div>
    </div>
  );
};

export default PlayGame;
