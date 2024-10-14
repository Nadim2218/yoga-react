// import { useState } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sessions from "./pages/Sessions";
import Why from "./pages/Why";
import Rootlayouts from "./Rootlayouts";
import Details from "./pages/Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Rootlayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/why" element={<Why />} />
        <Route path="/details" element={<Details/>} />

      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
