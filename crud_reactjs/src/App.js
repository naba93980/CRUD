import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";

function App() {
  return (
    <div className="container m-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Create />} />
          <Route path="*" element={<p>Wrong Url</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
