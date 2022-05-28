import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGames } from "./redux/actions/getGames";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch])

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
