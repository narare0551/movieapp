import React from "react";

import Movie from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

const App = () => {
  return (
    <div>
      <Route path="/Register" exact={true} component={Movie}></Route>
      <Route
        path="/MovieDetail/:id"
        exact={true}
        component={MovieDetail}
      ></Route>
      <Route path="/MovieList" exact={true} component={MovieList}></Route>
    </div>
  );
};
export default App;
