import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "./components/Welcome/Login";
import Welcome from "./components/Welcome";
import { authenticate } from "./store/session";
import Signup from "./components/Welcome/Signup";
import Dashboard from "./components/Dashboard";
import Group from "./components/Group";

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
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="group/:groupId" element={<Group />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
