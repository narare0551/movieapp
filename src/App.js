import React from "react";

import Movie from "react";

const App = () => {
  return (
    <div>
      <Header></Header>
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
