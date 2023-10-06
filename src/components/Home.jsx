import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Popular from "./Popular";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
  const [datas, setDatas] = useState([]);

  const fetchData = async() =>{
  try{const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=cc2719007c852cef47ca3a2b2ea1b203")
      console.log(response.data.results);
      setDatas(response.data.results);
    }
    catch(err){
      console.log(err);
    };
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <Container fluid className="content text-start p-0">
      <div className="myBg px-0">
        <Header />
        <div className="hero px-3" style={{ height: "80vh" }}>
          <h1 className="text-white w-50 ms-0 mb-4">
          {datas.length > 0 ? datas[13].title : "..."}
          </h1>
          <p className="text-white contentPara w-50 ms-0 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ab
            nisi quasi repudiandae quam similique repellendus tenetur
            praesentium? Consequatur, expedita!
          </p>
          <Button className="text-white bg-danger border-0 rounded-5 d-flex align-items-center gap-2">
            <AiOutlinePlayCircle />
            Watch Trailer
          </Button>
        </div>
      </div>

      <Popular />
      <div className="list-movies d-flex gap-5 flex-wrap justify-content-center">
        {datas.map((data, index) => (
          <li className="movie col-lg-2 m-0 p-0" key={index}>
            <Link className="text-decoration-none" to={`/detail/${data.id}`}>
              <img
                className="w-100 rounded rounded-4"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
              />
            </Link>
          </li>
        ))}
      </div>
    </Container>
  );
};

export default Home;
