import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlayGame = () => {
  const { id } = useParams();
  useEffect(() => {}, [id]);
  return <div>ok</div>;
};

export default PlayGame;
