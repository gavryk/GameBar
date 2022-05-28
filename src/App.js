import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPopularGames } from "./redux/actions/getGames";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularGames());
  }, [])

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
