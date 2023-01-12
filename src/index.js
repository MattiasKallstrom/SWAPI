import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Person from "./pages/Person";
import Details from "./pages/Details";
import Layout from "./pages/Layout";


export const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route index element={<Person />}></Route>
        <Route path="/details/:id" element={<Details />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
