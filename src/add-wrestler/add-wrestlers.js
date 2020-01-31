import React from "react";
import WrestlerForm from "./wrestler-form";
import { addWrestlers } from "../utils/api";
import { WrestlerFormContainer } from "../styles/wrestler-form";

const onSubmit = (e, data) => {
  e.preventDefault();
  console.log("Submitted", data);
  addWrestlers(JSON.stringify(data));
};

const AddWrestlers = () => {
  return (
    <WrestlerFormContainer>
      <h2 style={{ marginTop: 0 }}>Add Wrestler</h2>
      <WrestlerForm primaryButton="Add Wrestler" primaryAction={onSubmit} />
    </WrestlerFormContainer>
  );
};

export default AddWrestlers;
