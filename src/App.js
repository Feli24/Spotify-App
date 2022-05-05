import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Login from "./Login";
import Search from "./Search";
import Artist from "./Artist";
import Album from "./Album";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/search" component={Search} />
                <Route path="/albums" component={Album} />
            </Switch>
            ;
        </Router>
    );
}

export default App;
