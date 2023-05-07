import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData(request) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/${request}`)
      .then(response => setData(response.data.results))
      .catch(error => console.log(error));
  }, [request]);

  return data;
}

export default useFetchData;