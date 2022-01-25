import { useState } from "react";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["C++", "Pasquel", "Javascript", "some lang X"];

  return (
    <div className="dropdown" onClick={(e) => setIsActive(!isActive)}>
      <div className="dropdown-btn">{selected}</div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
