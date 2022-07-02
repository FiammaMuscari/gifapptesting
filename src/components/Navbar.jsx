import React, { useState } from "react";
import Dropdown from "./Dropdown";

export const Navbar = () => {
  const [selected, setSelected] = useState("Fiammamuscari");
  return (
    <>
      <div className="navbar">
        <ul className="menucontainer">
          <li className="menulist">Reacciones</li>
          <li className="menulist">Entretenimiento</li>
          <li className="menulist">Deportes</li>
          <li className="menulist">Stickers</li>
          <li className="menulist">Artistas</li>
          <li className="menulist" style={{ fontWeight: "700" }}>
            ︙
          </li>
          <li className="menulist">Cargar</li>
          <li className="menulist">Crear</li>
        </ul>
        <ul
          style={{
            display: "flex",
            paddingBottom: "0.5em",
            margin: "0",
            paddingRight: "0",
          }}
        >
          <li
            className="menulist"
            style={{backgroundImage: "url(https://media.giphy.com/avatars/default1/80h.gif)",minWidth:"3em",backgroundSize: "cover",backgroundPosition: "center center",backgroundRepeat:"no-repeat",transition: "transform 0.3s ease-out 0s", width: "100%",height: "0.8em",marginTop: "0.04em"}}
          ></li>
          <Dropdown className="menulist " selected={selected} setSelected={setSelected}></Dropdown>
        </ul>
      </div>
    </>
  );
};
