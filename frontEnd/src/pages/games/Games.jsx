import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gateGame from "../../module/getGames";
import url from "../../module";
import ResponsivePagination from "react-responsive-pagination";
import { Box, SkeletonText } from "@chakra-ui/react";

export default function Games() {
  const itemsPerPage = 30;
  const { system, index } = useParams();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 32, 42, 3, 24, 24, 34, 24, 24, 4, 42, 24,
    4324,
  ];

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

      {data.length > 0 ? (
        <Items
          data={data.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )}
        />
      ) : (
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 ">
          {array.map((doc, i) => (
            <Box key={i} padding="6" boxShadow="lg" bg="white">
              <SkeletonText
                mt="2"
                noOfLines={1}
                spacing="2"
                startColor="blue.500"
                endColor="blue.200"
                skeletonHeight="20"
              />
              <SkeletonText
                mt="2"
                noOfLines={1}
                spacing="2"
                skeletonHeight="2"
              />
            </Box>
          ))}
        </div>
      )}
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

function Items({ data }) {
  const navigate = useNavigate();

  const handlePlayGame = (id) => {
    navigate(`/play-game/${id}`);
  };
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 ">
      {data?.map((doc, i) => (
        <div
          onClick={() => handlePlayGame(doc?.id)}
          key={i}
          className="w-full line-clamp-1 text-center font-semibold hover:text-blue-500 hover:opacity-50 cursor-pointer"
        >
          <img className=" rounded-md " src={doc.img} />
          {doc.name}
        </div>
      ))}
    </div>
  );
}
