import React from "react";
import useFetchData from "../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";

function  CharacterCards({data}) {
    const filteredCharacters = data.slice(0,6);
  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={0}
        pagination={{ clickable: true }}
      >
        {filteredCharacters.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="w-64 mx-3 my-3 bg-white rounded-lg shadow-md">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-64 h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-lg font-bold mb-2">{data.name}</p>
                  <p className="text-gray-700 text-base">
                    {data.species} - {data.status}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default CharacterCards;
