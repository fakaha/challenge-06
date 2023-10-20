import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { AiOutlineStar } from "react-icons/ai";

const Detail = () => {
  const [movie, setMovie] = useState("");
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.data;
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-start px-0 mb-3">
      <Header />
      <div className="px-3 d-flex gap-2">
        <img
          className="col-5"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div className="content-detail col-7">
          <h1 style={{ fontSize: "50px" }}>{movie.title}</h1>
          <p className="mt-3" style={{ fontStyle: "italic", fontSize: "20px" }}>
            {movie.release_date}
          </p>
          <p style={{ fontSize: "25px" }}>{movie.overview}</p>
          <p style={{ fontSize: "22px" }}>
            <AiOutlineStar className="text-warning" />
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
