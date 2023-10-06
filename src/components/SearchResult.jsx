/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import SearchContext from "../context/useContext";
import Header from "./Header";

/* eslint-disable no-unused-vars */
const SearchResult = () => {
  // const store = localStorage.getItem()
  const { data, searchData, handleSearch } = useContext(SearchContext);

  console.log(data.results);
  return (
    <div>
      <Header />
      <div className="container-data row px-3">
        {data?.results?.map((item, i) => (
          <div key={i} className="col-6 mb-5">
            <h1>{item?.original_title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
