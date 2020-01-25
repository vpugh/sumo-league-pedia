import React from "react";
import WrestlerForm from "./wrestler-form";

const AddWrestlers = () => {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        border: "1px solid #ddd",
        padding: "20px",
        background: "#fff"
      }}
    >
      <h2 style={{ marginTop: 0 }}>Add Wrestlers</h2>
      <WrestlerForm />
    </div>
  );
};

export default AddWrestlers;
