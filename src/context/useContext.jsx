/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useState } from 'react';

export const SearchContext = createContext('');
export const SearchProvider = ({ children }) => {
    const [searchData, setSearchData] = useState("");
    const [data, setData] = useState("");

    const handleSearch = async () => {
        const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchData}&api_key=cc2719007c852cef47ca3a2b2ea1b203`)
        setData(search.data)
    }
    return (
        <SearchContext.Provider value={{ handleSearch, setSearchData, data }}>{children}</SearchContext.Provider>
    );
};

export default SearchContext;