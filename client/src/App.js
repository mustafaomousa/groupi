import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Hey</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
