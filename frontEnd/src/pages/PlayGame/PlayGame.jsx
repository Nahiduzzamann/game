import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gateGameById from "../../module/getGameById";
import { Spinner } from "@chakra-ui/react";

const PlayGame = ({id}) => {
  const navigate = useNavigate();
  //const { id } = useParams();
  const [iframeUrl, setIframeUrl] = useState("");
  const [ok, setOk] = useState(false);
  //   console.log(id);
  useEffect(() => {
    const games = async () => {
      try {
        const res = await gateGameById(id);
        setIframeUrl(res.data?.content?.game?.url);
        console.log(res.data);
        if (!res.data.content) {
          setOk(true);
        }
      } catch (error) {
        console.log(error.response?.data?.error);
      }
    };
    games();
  }, [id]);
  useEffect(() => {
    if (ok) {
      navigate(-1);
    }
  }, [ok]);

  return (
    <div className="w-full h-[calc(100vh-20px)]">
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
