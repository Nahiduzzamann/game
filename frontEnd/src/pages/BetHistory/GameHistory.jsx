import React, { useContext, useEffect, useState } from "react";
import getGameHistory from "../../module/getGameHistory";
import GameHistoryCard from "./GameHistoryCard";
import { Spinner } from "@chakra-ui/react";
import ResponsivePagination from "react-responsive-pagination";
import { AuthContext } from "../../providers/AuthProvider";

export default function GameHistory({ index }) {
  const { selectedLanguage } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    data?.filter((s) => s.game.name.toLowerCase().match(search?.toLowerCase())).length / itemsPerPage
  );
  useEffect(() => {
    getGameHistory(index).then((res) => {
      setData(res.data);
      //console.log(res.data);
    });
  }, [index]);
  if (!data) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      </div>
    );
  }
  return (
    <div className="min-h-[50vh]">
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-5 py-2 rounded-md w-full"
          placeholder="Search"
        />
      </div>
      {data
        ?.filter((s) => s.game.name.toLowerCase().match(search?.toLowerCase()))
        ?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        ?.map((d, i) => (
          <GameHistoryCard key={i} data={d} />
        ))}
      {data?.length === 0 && (
        <div className="my-5 mx-2 font-semibold text-xl">{
          selectedLanguage ==='en' ? "No History!":"ইতিহাস নেই!"
        }</div>
      )}
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
