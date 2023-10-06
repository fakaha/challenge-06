import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;