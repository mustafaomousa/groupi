import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "./components/Login";
import Welcome from "./components/Welcome";
import { authenticate } from "./store/session";
import Signup from "./components/Signup";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route path="" element={<Login />} />
          <Route path="join" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
