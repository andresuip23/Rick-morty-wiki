import React from 'react';
import searchIcon from '../assets/searchicon.svg';

const SearchBar = () => {
  return (
    <div className="">
  <form>
    <div className="pt-10 pb-6 mx-5 ">
      <div className="flex space-x-1 items-center mb-2">
      </div>
      <div className="flex space-x-4">
        <div className="flex rounded-md overflow-hidden w-full">
          <input type="text" className="w-full rounded-md rounded-r-none" />
          <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
        </div>
        <button className="bg-white px-6 text-lg font-semibold py-4 rounded-md">Clear</button>
      </div>
    </div>
  </form>
</div>
  );
};

export default SearchBar;