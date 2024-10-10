import React, { useState } from 'react';
import Cards from '../container/Cards';
import CharactersGrid from '../CardsGrid/Characters';
import useFetchData from '../hooks/useFetchData';
import SearchBar from '../components/Search';
import Pagination from '../components/Pagination';


function Characters() {
    const [page,setPage] = useState(1);
    const HandlePageChange = (page)=>{
        setPage(page);
    }
    const data = useFetchData(`character/?page=${page}`);
    return ( 
        <>
        <div className='bg-gray-800'>
        <SearchBar/>
        <CharactersGrid data={data}/>
        <Pagination currentPage={page} onPageChange={HandlePageChange}/>
        </div>
        </>
     );
}

export default Characters;