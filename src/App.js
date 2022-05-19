import { useContext } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
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
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/search"
                        element={
                            <ProtectedRoute token={context.token}>
                                <ArtistSearchPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/albums/:name/:artistId"
                        element={
                            <ProtectedRoute token={context.token}>
                                <AlbumPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

const ProtectedRoute = ({ token, children }) => {
    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default App;
