import React from "react";
import { useState } from "react";
import Container from "../container/Container";
import Cards from "../container/Cards";

function Examples() {
  const [selected, setSelected] = useState("character");

  const handleSelected = (item) => {
    setSelected(item);
  };
  return (
    <>
      <Container>
        <div className="bg-gray-800">
          <nav className="bg-gray-900 px-4 py-2 flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">What you will find</h1>
            <ul className="flex">
              <li
                className={`mx-2 px-4 py-2 text-white rounded-lg cursor-pointer ${
                  selected === "character" && "bg-gray-700"
                }`}
                onClick={() => handleSelected("character")}
              >
                Characters
              </li>
              <li
                className={`mx-2 px-4 py-2 text-white rounded-lg cursor-pointer ${
                  selected === "episode" && "bg-gray-700"
                }`}
                onClick={() => handleSelected("episode")}
              >
                Episodes
              </li>
              <li
                className={`mx-2 px-4 py-2 text-white rounded-lg cursor-pointer ${
                  selected === "location" && "bg-gray-700"
                }`}
                onClick={() => handleSelected("location")}
              >
                Location
              </li>
            </ul>
          </nav>
          <Cards selected={selected} />
        </div>
      </Container>
    </>
  );
}

export default Examples;
