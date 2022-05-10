import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";
// import Artist from "./components/Artist";
// import Album from "./components/Album";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/search" element={<ArtistSearchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
