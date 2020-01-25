import React, { useEffect, useState } from "react";
import { getWrestlers } from "./utils/api";

const displayRecord = record => {
  const objectEntries = Object.entries(record[0]);

  const bashos = [];
  for (let value of objectEntries) {
    const name = value
      .slice(0)
      .toString()
      .split(",")[0];
    const bashoType = name.split("-")[0];
    const bashoYear = name.split("-")[1];
    const object = value.slice(1)[0];
    const group = Object.assign(
      {},
      { basho: `${bashoYear} ${bashoType}` },
      object
    );
    bashos.push(group);
  }
  const headers = bashos.map(x => x.basho);
  const wins = bashos.map(c => c.wins);
  const loss = bashos.map(l => l.loss);
  const wl = bashos.map(wl => wl["withdraw-loss"]);
  const champion = bashos.map(c => c.champion);
  return (
    <table
      style={{
        textAlign: "left",
        width: "100%",
        display: "table",
        borderSpacing: 0,
        borderCollapse: "collapse",
        background: "#f5f5f5"
      }}
    >
      {displayHeader(headers)}
      <tbody>
        {displayBody("Wins", wins)}
        {displayBody("Loss", loss)}
        {displayBody("Withdrawal Loss", wl)}
        {displayChampion("Champion", champion)}
      </tbody>
    </table>
  );
};

const displayHeader = b => {
  return (
    <thead>
      <tr>
        {b.map(header => (
          <th
            style={{
              padding: "12px 24px 12px 16px",
              borderBottom: "1px solid #ddd",
              textAlign: "left"
            }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const displayBody = (text, array) => {
  return (
    <tr>
      {array.map(a => (
        <td
          style={{
            padding: "6px 24px 6px 16px",
            borderBottom: "1px solid rgb(224, 224, 224)",
            textAlign: "left"
          }}
        >
          {a ? `${text}: ${a}` : "N/A"}
        </td>
      ))}
    </tr>
  );
};

const displayChampion = (text, array) => {
  return (
    <tr>
      {array.map(a => (
        <td style={{ padding: "6px 24px 6px 16px" }}>{a && `${text}`}</td>
      ))}
    </tr>
  );
};

const fetchWrestlers = async set => {
  const data = await getWrestlers();
  set(data);
};

const Test = () => {
  const [wrestlers, setWrestlers] = useState("");

  useEffect(() => {
    fetchWrestlers(setWrestlers);
  }, []);

  const DivideYears = r => {
    const divisions = r.reduce((acc, t) => {
      const bashoNames = Object.keys(r[0]);
      const bashoYear = [...new Set(bashoNames.map(y => y.split("-")[1]))];
      console.log("DY", t, bashoNames, bashoYear);
      return acc;
    }, []);
    console.log("Divisions", divisions);
    return r;
  };

  return (
    <div>
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
            Record:
            {displayRecord(DivideYears(w.record))}
          </div>
        ))}
    </div>
  );
};

export default Test;
