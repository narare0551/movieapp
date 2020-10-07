import React from "react";
import { Route } from "react-router-dom";
import Header from "./component/Header";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Header></Header>

      <Route path="/Register" exact={true} component={Register}></Route>

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
