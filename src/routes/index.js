import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../pages/search";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
