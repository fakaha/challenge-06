import { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.post);

  useEffect(() => {}, [searchResults]);

  console.log("data searchnya : ", searchResults);
  return (
    <div>
      <Header />
      <div className="container-data row px-3">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((item, i) => (
            <div key={i} className="col-6 mb-5">
              <h1>{item?.original_title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              />
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
