import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Home } from "./pages";
import { fetchGames } from "./redux/actions/getGames";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
