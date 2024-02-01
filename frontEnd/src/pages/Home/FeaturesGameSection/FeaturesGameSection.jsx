import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../FavoriteGameSection/style.css";
import url from "../../../module";
import gateGame from "../../../module/getGames";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { Autoplay } from "swiper/modules";
import PlayGame from "../../PlayGame/PlayGame";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
export default function FeaturesGameSection() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState();
  const navigate =useNavigate()
// console.log(id);
  useEffect(() => {
    const games = async () => {
      setData(null);
      try {
        const res = await gateGame(url, 2, "fish");
        // console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    games();
  }, []);
  const handlePlayGame = (id) => {
    if(!user){
      return navigate('/login')
    }
    setId(id);
    onOpen();
    // console.log(url.split("api")[0]);
    // window.open(`${url.split("api")[0]}play-game/${id}`, "_blank");
  };
  return (
    <div className="mx-6 my-3 bg-[#D9D9D9] rounded-md p-2">
      <h1 className="m-4 text-lg md:text-xl font-semibold text-black">
        Features Games
      </h1>
      {data ? (
        <Swiper
          watchSlidesProgress={true}
          spaceBetween={20}
          modules={[Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1000, // Adjust the delay in milliseconds (ms)
            disableOnInteraction: false, // Allow manual interaction without stopping autoplay
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {data?.map((doc, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div
                onClick={() => {
                  handlePlayGame(doc?.id)
                 
                }}
                key={i}
                className="w-full line-clamp-1 text-center font-semibold hover:text-blue-500 hover:opacity-50 cursor-pointer"
              >
                <img
                  className="object-cover object-center w-full h-full rounded-lg"
                  src={doc.img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center items-center mb-4">
          <Spinner color="blue.500" size="md" />
        </div>
      )}
      <Modal size={"full"} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg={"black"} overflow={"hidden"} maxHeight={"100vh"}>
          <ModalCloseButton
            children={
              <div className="flex bg-white rounded-md shadow-sm justify-center items-center">
                <IoMdClose size={24} />
              </div>
            }
          />
          <ModalBody
            height="100%" // Set height to 100% of parent container (ModalContent)
            overflowY="hidden" // Allow vertical scrolling if the content is taller than the viewport
          >
            <PlayGame id={id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
