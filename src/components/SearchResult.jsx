import { useContext, useEffect } from "react";
import SearchContext from "../context/useContext";
import Header from "./Header";


const SearchResult = () => {
  const { data, searchData, handleSearch } = useContext(SearchContext);

  console.log("datanya : ", data);
  return (
    <div>
      <Header />
      <div className="container-data row px-3">
        {data?.data?.map((item, i) => (
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
