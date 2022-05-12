import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import LandingPage from "./pages/LandingPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";
// import styles from "./styles/index.css";
// import Artist from "./components/Artist";
// import Album from "./components/Album";

function App() {
    return (
        <div className="app-container">
            <TopBar />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/search" element={<ArtistSearchPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
