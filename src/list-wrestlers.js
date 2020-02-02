import React, { useEffect, useState } from "react";
import { getWrestlers } from "./utils/api";
import { WrestlerFormContainer } from "./styles/wrestler-form";
import GetRecords from "./get-records";

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const fetchWrestlers = async set => {
  const data = await getWrestlers();
  set(data);
};

const getRecords = id => {
  return <GetRecords id={id} />;
};

const ListWrestlers = () => {
  const [wrestlers, setWrestlers] = useState("");

  useEffect(() => {
    fetchWrestlers(setWrestlers);
  }, []);

  return (
    <WrestlerFormContainer>
      {wrestlers &&
        wrestlers.map(w => (
          <div
            style={{
              border: "1px solid #e4e3e3",
              background: "rgb(247, 247, 247)",
              borderRadius: 3,
              marginBottom: 20
            }}
            key={w.name}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 5px 0" }}>
                  <strong>{w.name}</strong>
                </h3>
                <p style={{ margin: 0, fontStyle: "italic" }}>
                  {w.division}/{capitalizeFirstLetter(w.rank_direction)}{" "}
                  {capitalizeFirstLetter(w.rank)}
                </p>
              </div>
              <p style={{ lineHeight: 1.4, margin: 0 }}>
                {w.nationality}, {w.age}
                <br />
                {w.status === "active" ? (
                  <>Injured: {w.injured ? "Yes" : "No"}</>
                ) : (
                  "Retired"
                )}
              </p>
            </div>
            <p style={{ padding: "0 10px", marginBottom: ".5rem" }}>
              Recent Career Record:
            </p>
            {getRecords(w.id)}
          </div>
        ))}
    </WrestlerFormContainer>
  );
};

export default ListWrestlers;
