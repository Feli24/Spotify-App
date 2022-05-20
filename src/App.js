// import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ArtistSearchPage from "./pages/ArtistSearchPage";
import AlbumPage from "./pages/AlbumPage";
import { AuthContextProvider } from "./auth/auth-context.js";
// import AuthContext from "./auth/auth-context.js";

function App() {
    // const context = useContext(AuthContext);
    return (
        <div className="app-container">
            <Router>
                <AuthContextProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/search" element={<ArtistSearchPage />} />
                        <Route
                            path="/albums/:name/:artistId"
                            element={<AlbumPage />}
                        />
                    </Routes>
                </AuthContextProvider>
            </Router>
        </div>
    );
}

// Other way to protect Routes
// const ProtectedRoute = ({ token, children }) => {
//     if (!token) {
//         return <Navigate to="/" replace />;
//     }

//     return children;
// };

export default App;
