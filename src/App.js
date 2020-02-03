import React from "react";
import ListWrestlers from "./list-wrestlers";
import "./styles.css";

export default function App() {
  return (
    <div className="App" style={{ background: "#ddd", margin: 0, padding: 0 }}>
      <ListWrestlers />
    </div>
  );
}
