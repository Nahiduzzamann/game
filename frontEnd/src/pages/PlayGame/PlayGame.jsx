import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gateGameById from "../../module/getGameById";
import { Spinner } from "@chakra-ui/react";

const PlayGame = () => {
  const { id } = useParams();
  const [iframeUrl, setIframeUrl] = useState("");
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
      {iframeUrl ? (
        <iframe
          title="GameIframe"
          src={iframeUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          ></Spinner>
        </div>
      )}
    </div>
  );
};

export default PlayGame;
