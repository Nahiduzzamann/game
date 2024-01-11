import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gateGame from "../../module/getGames";
import url from "../../module";
import ResponsivePagination from "react-responsive-pagination";

export default function Games() {
  const itemsPerPage = 30;
  const { system, index } = useParams();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  useEffect(() => {
    const games = async () => {
      try {
        const res = await gateGame(url, index, system);
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    setCurrentPage(1);
    games();
  }, [system, index]);
  return (
    <div className=" container mx-auto py-5 ">
      {/* <InputGroup>
        <InputLeftElement pointerEvents="none"></InputLeftElement>
        <Input type="tel" placeholder="Phone number" />
      </InputGroup> */}
      <Items
        data={data.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )}
      />
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

function Items({ data }) {
  console.log(data);
  const navigate = useNavigate();

  const handlePlayGame = (id) => {
    navigate(`/games/${id}`);
  }
  return (
    <div
      className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 "
    >
      {data.map((doc, i) => (
        <div
      onClick={() => handlePlayGame(doc?.id)}

          key={i}
          className="w-full line-clamp-1 text-center font-semibold hover:text-blue-500 hover:opacity-50 cursor-pointer"
        >
          <img
            className=" rounded-md "
            src={
              doc.image_square ||
              doc.image_preview ||
              doc.image_background ||
              doc.image_portrait ||
              doc.image
            }
          />
          {doc.name}
        </div>
      ))}
    </div>
  );
}
