import React from "react";
import useFetchData from "../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";

function  LocationCards({data}) {
  const filteredLocation = data.slice(0,6);
  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={0}
        pagination={{ clickable: true }}
      >
        {filteredLocation.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="w-64 mx-3 my-3 bg-white rounded-lg shadow-md">
                <div className="p-4">
                  <p className="text-lg font-bold mb-2">{data.name}</p>
                  <p className="text-gray-700 text-base">
                    {data.type} - {data.dimension}
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

export default LocationCards;
