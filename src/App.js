import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import LandingPage from "./pages/LandingPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";
// import Artist from "./components/Artist";
// import Album from "./components/Album";

function App() {
    return (
        <>
            <TopBar />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/search" element={<ArtistSearchPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
