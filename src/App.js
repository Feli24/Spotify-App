// import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";
import AlbumPage from "./pages/AlbumPage";
import { SearchContextProvider } from "./store/search-context.js";

function App() {
    // const context = useContext(SearchContext);
    return (
        <div className="app-container">
            <Header />
            <Router>
                <SearchContextProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/search" element={<ArtistSearchPage />} />
                        <Route
                            path="/albums/:name/:artistId/:token"
                            element={<AlbumPage />}
                        />
                    </Routes>
                </SearchContextProvider>
            </Router>
        </div>
    );
}

export default App;
