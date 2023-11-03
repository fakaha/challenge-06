import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import Detail from "./components/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <GoogleOAuthProvider clientId={'659120375831-9rsqe4vmbu48oa81s1rk5t9tamo2uv2h.apps.googleusercontent.com'}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;