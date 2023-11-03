import axios from "axios";
import { setPostDetails, setPosts, setSearchResults } from "../reducers/postReducers";
import { toast } from "react-toastify";

export const getAllPosts = () => async (dispatch) => {
    try{
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
            `https://shy-cloud-3319.fly.dev/api/v1/movie/popular`,
            {
                headers
            }
        );
        dispatch(setPosts(response.data.data));
    }catch(error){
        if(axios.isAxiosError(error)){
            toast.error(error.response.data.message);
            return;
        }
        toast.error(error.message)
    }
};

export const getPostDetails = (id) => async(dispatch) => {
    try{
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(
            `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
            {
                headers
            }
        );
        dispatch(setPostDetails(response.data.data));
    }catch(error){
        if(axios.isAxiosError(error)){
            toast.error(error.response.data.message);
            return;
        }
        toast.error(error.message);
    }
};

export const searchMovies = (search) => async(dispatch) => {
    try{
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(
            `https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${search}`,
            {
                headers
            }
        );

        dispatch(setSearchResults(response.data.data));
    }catch(error){
        if(axios.isAxiosError(error)){
            alert(error.response.data.message);
            return;
        }
    }
}