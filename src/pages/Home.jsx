import React from 'react';


function Home() {
    return ( 
        <>
       <div className="relative h-screen">
      <div className="absolute h-full w-full overflow-hidden">
        <img
          src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/DWMLHZSLTZB2VARS5777M3L4ZM.jpg'
          alt='{props.imageAlt}'
          className="absolute h-full w-full object-cover"
        />
        <div
          className="absolute h-full w-1/2 right-0 bg-black opacity-70"
        />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 z-20">
        <h2 className="text-2xl font-bold">Rick and Morty Wiki es Here!</h2>
        <p className="text-base leading-normal overflow-wrap break-word">Find here all the information you were looking for, about your favorite characters and even your preferred episodes.</p>
      </div>
    </div>
        </>
     );
}

export default Home;