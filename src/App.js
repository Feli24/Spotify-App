import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Search from "./components/Search";
// import Artist from "./components/Artist";
// import Album from "./components/Album";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/search" element={<Search />} />
                {/* <Route path="artist" element={<Artist />} />
                <Route path="albums" element={<Album />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
