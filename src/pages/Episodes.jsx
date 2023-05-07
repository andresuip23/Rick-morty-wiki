import React from 'react';
import { useState } from 'react';
import useFetchData from '../hooks/useFetchData';

import SearchBar from '../components/Search';
import Pagination from '../components/Pagination';
import EpisodesGrid from '../CardsGrid/Episodes';


function Episodes() {
    const [page,setPage] = useState(1);
    const HandlePageChange = (page)=>{
        setPage(page);
    }
    const data = useFetchData(`episode/?page=${page}`);
    console.log(data);
    return ( 
        <>
        <div className='bg-gray-800'>
        <SearchBar/>
        <EpisodesGrid data={data}/>
        <Pagination currentPage={page} onPageChange={HandlePageChange}/>
        </div>
        </>
     );
}

export default Episodes;