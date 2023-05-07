import React from "react";


function  LocationGrid({data,filtered}) {
  return (
    <>
    <div className="grid grid-cols-4 gap-4">
              {data.map((data)=>
              <div className="w-64 mx-3 my-3 bg-white rounded-lg shadow-md">
                <div className="p-4">
                  <p className="text-lg font-bold mb-2">{data.name}</p>
                  <p className="text-gray-700 text-base">
                    {data.type} - {data.dimension}
                  </p>
                </div>
              </div>
              )}
    </div>
    </>
  );
}

export default LocationGrid;