import React, { useEffect, useState } from 'react';
import { getWrestlerRecord } from '../utils/api';
import DisplayRecord from './display-record';

const fetchWrestlerRecords = async (set, id) => {
  const data = await getWrestlerRecord(id);
  if (data && data.length !== 0) {
    set(data.record.record);
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
    const sortedYears = years.concat().sort((a, b) => b - a);
    return sortedYears.map(y => {
      return <DisplayRecord key={y} data={record[y]} year={y} id={id} />;
    });
  }
  return null;
};

export default GetRecords;
