import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gateGameById from "../../module/getGameById";

const PlayGame = () => {
  const { id } = useParams();
  const [iframeUrl, setIframeUrl]= useState('')
  //   console.log(id);
  useEffect(() => {
    const games = async () => {
      try {
        const res = await gateGameById(id);
        setIframeUrl(res.data.response);
      } catch (error) {
        console.log(error.response?.data?.error);
      }
    };
    games();
  }, [id]);
 

return (
  <div className="w-full h-screen">
    <iframe
      title="GameIframe"
      src={iframeUrl}
      frameBorder="0"
      width="100%"
      height="100%"
      allowFullScreen
    ></iframe>
  </div>
);
};

export default PlayGame;
