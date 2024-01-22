import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import url from "../../../module";
import gateGame from "../../../module/getGames";
import { Spinner } from "@chakra-ui/react";
import { Autoplay } from 'swiper/modules';
export default function FavoriteGameSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const games = async () => {
      setData(null);
      try {
        const res = await gateGame(url, 2, "rubyplay");
        // console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    games();
  }, []);
  const handlePlayGame = (id) => {
    //setId(id)
    //onOpen()
    // console.log(url.split("api")[0]);
    window.open(`${url.split("api")[0]}play-game/${id}`, "_blank");
  };
  return (
    <div className="mx-6 my-3 bg-[#D9D9D9] rounded-md p-2">
      <h1 className="m-4 text-lg md:text-xl font-semibold text-black">
        Favorite's Games
      </h1>
      {
        data ? (<Swiper
             
            watchSlidesProgress={true}
            spaceBetween={20}
            modules={[Autoplay]}
            className="mySwiper"
            autoplay={{
                delay: 1000, // Adjust the delay in milliseconds (ms)
                disableOnInteraction: false, // Allow manual interaction without stopping autoplay
              }}
              loop={true} 
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
                  onClick={() => handlePlayGame(doc?.id)}
                  key={i}
                  className="w-full line-clamp-1 text-center font-semibold hover:text-blue-500 hover:opacity-50 cursor-pointer"
                >
                  <img className="object-cover object-center w-full h-full rounded-lg" src={doc.img} />
                </div>
              </SwiperSlide>
            ))}
           
          </Swiper>):(
          <div className="flex justify-center items-center mb-4">
            <Spinner color="blue.500" size="md" />
          </div>
          )
      }
    </div>
  );
}
