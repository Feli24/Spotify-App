import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import LandingPage from "./pages/LandingPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";
import AlbumPage from "./pages/AlbumPage";
import { SearchContextProvider } from "./store/search-context.js";

function App() {
    return (
        <div className="app-container">
            <SearchContextProvider>
                <TopBar />
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/search" element={<ArtistSearchPage />} />
                        <Route
                            path="/albums/:name/:artistId/:token"
                            element={<AlbumPage />}
                        />
                    </Routes>
                </Router>
            </SearchContextProvider>
        </div>
    );
}

export default App;
