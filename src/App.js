import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";
import AlbumPage from "./pages/AlbumPage";
import AuthContext from "./auth/auth-context.js";

function App() {
    const context = useContext(AuthContext);
    console.log(context.token);
    return (
        <div className="app-container">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/login"
                        element={
                            context.token ? <ArtistSearchPage /> : <LoginPage />
                        }
                    />
                    <Route path="/search" element={<ArtistSearchPage />} />
                    <Route
                        path="/albums/:name/:artistId"
                        element={<AlbumPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
