import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../redux/actions/postActions";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);

  console.log(postDetails);
  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
    <div className="text-start px-0 mb-3">
      <Header />
      <div className="px-3 d-flex gap-2 flex-column flex-md-row">
        <img
          className="col-12 col-md-5 h-100"
          src={`https://image.tmdb.org/t/p/w500${postDetails?.poster_path}`}
          alt=""
        />
        <div className="content-detail col-12 col-md-7">
          {postDetails && postDetails.title ? (
            <h1 style={{ fontSize: "" }}>{postDetails?.title}</h1>
          ) : (
            <h1>Data Tidak Ditemukan</h1>
          )}

          <p className="mt-3" style={{ fontStyle: "italic", fontSize: "20px" }}>
            {postDetails?.release_date}
          </p>
          <p style={{ fontSize: "25px" }}>{postDetails?.overview}</p>
          <p style={{ fontSize: "22px" }}>
            <AiOutlineStar className="text-warning" />
            {postDetails?.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
