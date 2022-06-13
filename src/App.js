import './App.css';
import Header from "./Components/header/Header";
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";


function App() {

    return (
        <>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/subreddit/:id">
                    <Subreddit />
                </Route>
            </Switch>
        </>
    );
}

export default App;
