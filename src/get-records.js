import React, { useEffect, useState } from "react";
import { getWrestlerRecord } from "./utils/api";
import DisplayRecord from "./display-record";

const fetchWrestlerRecords = async (set, id) => {
  const data = await getWrestlerRecord(id);
  if (data.length !== 0) {
    set(data[0].record);
  }
};

const GetRecords = props => {
  const { id } = props;
  const [record, setRecord] = useState();

  useEffect(() => {
    fetchWrestlerRecords(setRecord, id);
  }, [id]);

  if (record) {
    const years = Object.keys(record);
    return years.map(y => {
      return <DisplayRecord key={y} data={record[y][0]} year={y} id={id} />;
    });
  }
  return null;
};

export default GetRecords;
