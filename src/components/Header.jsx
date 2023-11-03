import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";
import { searchMovies } from "../redux/actions/postActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    dispatch(searchMovies(search));
  };

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch, searchMovies]);

  return (
    <nav className="navbar mb-5">
      <Container fluid className="">
        <h1 className="text-danger logo m-0">
          <Link className="text-decoration-none text-danger" to={"/"}>
            Movielist
          </Link>
        </h1>
        <div className="search border rounded-5 border-danger d-flex align-items-center justify-content-between w-50 py-2 px-3">
          <input
            className="bg-transparent border-0 text-white search-input w-100 "
            type="text"
            placeholder="What do you want to watch?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to={"/searchresult"}>
            <BsSearch
              onClick={handleSearch}
              className="text-white m-1 searchButton"
            />
          </Link>
        </div>
        <form className="d-flex gap-2 m-0" role="search">
          {isLoggedIn ? (
            <>
              <button
                className="btn btn-outline-danger rounded-5 py-2 px-4"
                type="submit"
              >
                <Link
                  className="text-white text-decoration-none"
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                >
                  Logout
                </Link>
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-danger rounded-5 py-2 px-4"
                type="submit"
              >
                <Link
                  className="text-decoration-none text-white loginButton"
                  to={"/login"}
                >
                  Login
                </Link>
              </button>
              <button
                className="btn bg-danger text-white rounded-5 py-2 px-3"
                type="submit"
              >
                <Link
                  className="text-decoration-none text-white"
                  to={"/register"}
                >
                  Register
                </Link>
              </button>
            </>
          )}
        </form>
      </Container>
    </nav>
  );
};

export default Header;
