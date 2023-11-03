import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Popular from "./Popular";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions/postActions";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
    console.log({ posts: posts });
  }, [dispatch]);

  return (
    <Container fluid className="content text-start p-0">
      <div className="myBg px-0">
        <Header />
        {token ? (
          <div className="hero px-3" style={{ height: "80vh" }}>
            <h1 className="text-white w-50 ms-0 mb-4">
              {posts && posts.length > 0 ? posts[13].title : "No Data..."}
            </h1>
            <p className="text-white contentPara w-50 ms-0 mb-4">
              {posts && posts.length > 0 ? posts[13].body : ""}
            </p>
            <Button className="text-white bg-danger border-0 rounded-5 d-flex align-items-center gap-2">
              <AiOutlinePlayCircle />
              Watch Trailer
            </Button>
          </div>
        ) : (
          <p className="text-white ms-5">No Data...</p>
        )}
      </div>

      <Popular />
      <div className="list-movies d-flex gap-5 flex-wrap justify-content-center">
        {token ? (
          posts.map((posts, index) => (
            <li className="movie col-lg-2 m-0 p-0" key={index}>
              <Link className="text-decoration-none" to={`/detail/${posts.id}`}>
                <img
                  className="w-100 rounded rounded-4"
                  src={`https://image.tmdb.org/t/p/w500${posts.poster_path}`}
                  alt={posts.title}
                />
              </Link>
            </li>
          ))
        ) : (
          <p>No Data, Login First!</p>
        )}
      </div>
    </Container>
  );
};

export default Home;
