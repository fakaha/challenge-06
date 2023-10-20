/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const SearchContext = createContext("");
export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState("");

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem("token");

      const search = await axios.get(
        `https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${searchData}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dataSearch = search.data;
      setData(dataSearch);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <SearchContext.Provider value={{ handleSearch, setSearchData, data }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
