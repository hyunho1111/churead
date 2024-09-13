import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signln from "./pages/Signln";
import Homes from "./pages/Homes";


function App() {
  return (
    <div className="bg-gray-900 h-full content-center">
      <div className="max-w-[572px] mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signln" element={<Signln />} />
            <Route path="/homes" element={<Homes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
