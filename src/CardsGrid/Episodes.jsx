import React from "react";


function  EpisodesGrid({data,filtered}) {
  console.log(data);
  return (
    <>
    <div className="grid grid-cols-4 gap-4">
              {data.map((data)=>
              <div key={data.id} className="w-64 mx-3 my-3 bg-white rounded-lg shadow-md">
                <div className="p-4">
                  <p className="text-lg font-bold mb-2">{data.name}</p>
                  <p className="text-gray-700 text-base">
                    {data.air_date} - {data.episode}
                  </p>
                </div>
              </div>
              )}
     </div>
    </>
  );
}

export default EpisodesGrid;
