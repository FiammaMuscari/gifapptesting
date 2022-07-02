import React from "react";
import ReactDOM from "react-dom/client";
import { GifApp } from "./GifApp";
import {Navbar} from "./components/Navbar"
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <GifApp />
  </React.StrictMode>
);
