import React from "react";
import Test from "./test";
import AddWrestlers from "./add-wrestler/add-wrestlers";
import "./styles.css";

export default function App() {
  return (
    <div className="App" style={{ background: "#ddd", margin: 0, padding: 0 }}>
      {/* <Test /> */}
      <AddWrestlers />
    </div>
  );
}
