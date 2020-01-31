import React, { useState } from "react";

const displayRecord = record => {
  const objectEntries = Object.entries(record);
  const bashos = [];
  for (let value of objectEntries) {
    const name = value
      .slice(0)
      .toString()
      .split(",")[0];
    const bashoType = name.split("-")[0];
    const object = value.slice(1)[0];
    const group = Object.assign({}, { basho: bashoType }, object);
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
        {displayBody("W", wins)}
        {displayBody("L", loss)}
        {displayBody("WL", wl)}
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
          {a ? `${text}: ${a}` : "—"}
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

const DisplayRecord = props => {
  const { data, year } = props;

  const [showTable, setShowTable] = useState(false);

  return (
    <div onClick={() => setShowTable(!showTable)}>
      <h4
        style={{
          backgroundColor: "#ddd",
          marginBottom: 0,
          marginTop: ".25rem",
          padding: "5px 10px"
        }}
      >
        {year}
      </h4>
      {showTable && displayRecord(data[0])}
    </div>
  );
};

export default DisplayRecord;
