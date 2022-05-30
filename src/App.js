import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { fetchGames } from "./redux/actions/getGames";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
