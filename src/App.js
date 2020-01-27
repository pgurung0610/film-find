import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Header from "./header/Header";
import Main from "./main/Main";
import Movie from "./movie/Movie";
import NotFound from "./NotFound";

const App = () => {
  return (
    <HashRouter basename='/'>
      <div>
        <Header />
        <Route exact path='/' component={Main} />
        <Route path="/movie/:movieId" component={Movie} />
        <Route component={NotFound} />
      </div>
    </HashRouter>
  );
};

export default App;
