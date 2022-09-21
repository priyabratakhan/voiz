// import logo from './logo.svg';
import "./App.css";
// import Dropdown from './Components/Dropdown';
import React from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";

function App() {
  const data = [
    { color: "Red", id: 1 },
    { color: "Blue", id: 2 },
    { color: "Green", id: 3 },
    { color: "Yellow", id: 4 },
    { color: "White", id: 5 },
    { color: "Cheery", id: 6 },
  ];
  const [options] = useState(data);
  return (
    <div style={{width:"90%",justifyContent:"center",display:"flex"}}>
      <div className="App">
        <h1>Dropdown menu</h1>
        <Multiselect options={options} displayValue="color" />
        {/* <Dropdown/> */}
      </div>
    </div>
  );
}

export default App;

