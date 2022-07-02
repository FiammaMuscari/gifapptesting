import React, {useState} from "react";

const Dropdown= ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    const options = ["Fiammamuscari","Colecciones", "opciones", "favoritos", "salir"];
  
    return (
      <div className="dropdown">
        <div className="dropdownBtn" onClick={() => setIsActive(!isActive)}>
          {selected}
        </div>
        {isActive && (
          <div className="dropdownContent">
            {options.map((option) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className="dropdownItem"
                onClick={() => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

export default Dropdown;
