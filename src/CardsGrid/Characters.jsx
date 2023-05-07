import React from "react";


function  Characters({data,filtered}) {
  return (
    <>
    <div className="grid grid-cols-4 gap-4">
             {data.map((data)=>
             <div key={data.id} className="w-64 mx-3 my-3 bg-white rounded-lg shadow-md">
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
              </div>)}
    </div>
    </>
  );
}

export default Characters;