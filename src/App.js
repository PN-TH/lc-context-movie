import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesList from "./components/MovieList";
import MoviesDetail from "./components/MovieDetail";
import MoviesContextProvider from "./contexts/MoviesContextProvider";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="App">
      <MoviesContextProvider>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/favorite">Favoris</Link>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/movie/:id" component={MoviesDetail} />
            <Route path="/favorite" component={Favorite} />
          </Switch>
        </Router>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
