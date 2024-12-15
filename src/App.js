import React, { useEffect, useState } from "react";
import Outline from "./components/outline";
import Roboweek2 from "./components/roboweek2";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compdetail from "./components/compdetail"
import axios from 'axios';
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import ScrollToTop from './components/ScrollToTop';




function App() {
  return (<>  
     <BrowserRouter>
        <ScrollToTop/>
        <Routes>
        <Route  exact path="/" element={<Outline />} />
        <Route  exact path="/roboweek-2022" element={<Roboweek2 />} />
        <Route path="/post/:id" element={<Compdetail />} />
        </Routes>
      </BrowserRouter>
     
</>
  );
}

export default App;