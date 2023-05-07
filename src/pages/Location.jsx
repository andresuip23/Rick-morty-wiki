import React from 'react';
import { useState } from 'react';
import useFetchData from '../hooks/useFetchData';

import SearchBar from '../components/Search';
import Pagination from '../components/Pagination';
import LocationGrid from '../CardsGrid/Locations';


function Location() {
    const [page,setPage] = useState(1);
    const HandlePageChange = (page)=>{
        setPage(page);
    }
    const data = useFetchData(`location/?page=${page}`);
    console.log(data);
    return ( 
        <>
        <div className='bg-gray-800'>
        <SearchBar/>
        <LocationGrid data={data}/>
        <Pagination currentPage={page} onPageChange={HandlePageChange}/>
        </div>
        </>
     );
}

export default Location;