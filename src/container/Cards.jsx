import React from "react";
import useFetchData from "../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import CharacterCards from '../Cards/CharacterCards'
import EpisodesCards from '../Cards/EpisodesCards'
import LocationCards from '../Cards/LocationCards'




function Cards({selected}) {
  
  const data = useFetchData(selected);

  const renderCard = (data) => {
    switch (selected) {
      case "character":
        return <CharacterCards data={data} />;
      case "episode":
        return <EpisodesCards data={data} />;
      case "location":
        return <LocationCards data={data} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>{renderCard(data)}</div>
    </>
  );
}

export default Cards;
