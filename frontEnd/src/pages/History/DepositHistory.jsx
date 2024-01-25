import React, { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";
import getDeposits from "../../module/getDeposits";
import { Spinner } from "@chakra-ui/react";

import ResponsivePagination from "react-responsive-pagination";

export default function DepositHistory() {
  const itemsPerPage = 4;
  const [data, setData] = useState(null);
  const [search, setSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  useEffect(() => {
    getDeposits().then((res) => {
      //console.log(res.data);
      setData(res.data);
    });
  }, []);
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
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
    <div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-5 py-2 rounded-md w-full"
          placeholder="Search"
        />
      </div>
      {data
        ?.filter((s) => s.tranXId.match(search))
        ?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((d, i) => (
          <HistoryCard
            key={i}
            id={d.tranXId}
            amount={d.amount}
            date={d.date}
            remarks={d.remarks}
            status={d.status}
            promotionId={d.promotionId}
            walletId={d.walletId}
          />
        ))}
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
