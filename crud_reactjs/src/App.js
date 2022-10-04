import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read/Read";
import Update from "./Components/Update";

function App() {
  return (
    <div className="container m-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Create />} />
          <Route path="/read" exact={true} element={<Read />} />
          <Route path="/update/:id" exact={true} element={<Update />} />
          <Route path="*" element={<p>Wrong Url</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
