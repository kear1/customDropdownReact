import react, { useState } from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState("Choose One");

  return (
    <div style={{ backgroundColor: "#80bdff" }} className="App">
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
