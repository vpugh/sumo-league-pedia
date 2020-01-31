import React from "react";
import ListWrestlers from "./list-wrestlers";
import AddWrestlers from "./add-wrestler/add-wrestlers";
import "./styles.css";
import UpdateWrestlers from "./add-wrestler/update-wrestlers";

export default function App() {
  return (
    <div className="App" style={{ background: "#ddd", margin: 0, padding: 0 }}>
      <ListWrestlers />
      {/* <AddWrestlers /> */}
      {/* <UpdateWrestlers /> */}
    </div>
  );
}
