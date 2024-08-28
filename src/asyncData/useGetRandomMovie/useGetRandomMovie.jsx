import { useEffect, useState } from "react";

import { get } from "../../asyncData/api";

const useGetRandomMovie = () => {
  const [movie, setMovie] = useState({});
  const [isLoadingMovie, setIsLoadingMovie] = useState(true);
  
  useEffect(() => {
    get("https://jsonfakery.com/movies/random").then((res) => {
      setMovie(res.data);
      setIsLoadingMovie(false);
    })
  }, [])
  
  return {
    movie,
    isLoadingMovie
  };
};

export default useGetRandomMovie;
