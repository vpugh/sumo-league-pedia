import React from "react";
import WrestlerForm from "./wrestler-form";
import { updateWrestlers } from "../utils/api";
import { WrestlerFormContainer } from "../styles/wrestler-form";

const UpdateWrestlers = props => {
  const { wrestlerData } = props;

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log("Submitted", data);
    updateWrestlers(JSON.stringify(data), wrestlerData.id);
  };

  if (wrestlerData) {
    return (
      <WrestlerFormContainer>
        <h2 style={{ marginTop: 0 }}>Update Wrestler</h2>
        <WrestlerForm
          wrestlerData={wrestlerData}
          primaryButton="Update Wrestler"
          primaryAction={onSubmit}
        />
      </WrestlerFormContainer>
    );
  }
  return <p>Loading Wrestler Data</p>;
};

export default UpdateWrestlers;
