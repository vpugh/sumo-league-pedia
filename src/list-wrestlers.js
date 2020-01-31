import React, { useEffect, useState } from "react";
import { getWrestlers } from "./utils/api";
import { WrestlerFormContainer } from "./styles/wrestler-form";
import DisplayRecord from "./display-record";

const fetchWrestlers = async set => {
  const data = await getWrestlers();
  set(data);
};

const getRecords = r => {
  const years = Object.keys(r);
  return years.map(y => <DisplayRecord data={r[y]} year={y} />);
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
          <div key={w.name}>
            <p>
              Name: {w.name}
              <br />
              Age: {w.age}
              <br />
              Nationality: {w.nationality}
              <br />
              {w.status === "active" ? (
                <>
                  Division: {w.division}
                  <br />
                  Rank: {w.rank} {w.rank_direction}
                  <br />
                  Injured: {w.injured ? "Yes" : "No"}
                  <br />
                </>
              ) : (
                "Retired"
              )}
            </p>
            Career Record:
            {w.record && getRecords(w.record)}
          </div>
        ))}
    </WrestlerFormContainer>
  );
};

export default ListWrestlers;
