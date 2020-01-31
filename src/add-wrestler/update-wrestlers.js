import React, { useEffect, useState } from "react";
import WrestlerForm from "./wrestler-form";
import { updateWrestlers, getWrestlers } from "../utils/api";
import { WrestlerFormContainer } from "../styles/wrestler-form";

const UpdateWrestlers = () => {
  const [wrestlers, setWrestlers] = useState();

  const fetchWrestlers = async () => {
    const data = await getWrestlers();
    setWrestlers(data);
  };

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log("Submitted", data);
    updateWrestlers(JSON.stringify(data), wrestlers[0].id);
  };

  useEffect(() => {
    fetchWrestlers();
  }, []);

  if (wrestlers) {
    return (
      <WrestlerFormContainer>
        <h2 style={{ marginTop: 0 }}>Update Wrestler</h2>
        <WrestlerForm
          wrestlerData={wrestlers[0]}
          primaryButton="Update Wrestler"
          primaryAction={onSubmit}
        />
      </WrestlerFormContainer>
    );
  }
  return <p>Loading Wrestler Data</p>;
};

export default UpdateWrestlers;
