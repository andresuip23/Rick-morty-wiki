import React from "react";
import useFetchData from "../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import CharacterCards from '../CardsSlider/CharacterCards'
import EpisodesCards from '../CardsSlider/EpisodesCards'
import LocationCards from '../CardsSlider/LocationCards'




function Cards({selected}) {
  
  const data = useFetchData(selected);
  const filtered = data.slice(0,6);

  const renderCard = (data) => {
    switch (selected) {
      case "character":
        return <CharacterCards data={data} filtered={filtered} />;
      case "episode":
        return <EpisodesCards data={data} filtered={filtered} />;
      case "location":
        return <LocationCards data={data} filtered={filtered} />;
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
