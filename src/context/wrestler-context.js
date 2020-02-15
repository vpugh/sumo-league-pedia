import React, { createContext, useState, useEffect } from 'react';
import { getWrestlers } from '../utils/api';

const WrestlerContext = createContext(() => [{}, () => []]);

const fetchWrestlers = async set => {
  const data = await getWrestlers();
  set(data.rikishis);
};

const WrestlerProvider = props => {
  const { children } = props;
  const [wrestlers, setWrestlers] = useState();

  useEffect(() => {
    fetchWrestlers(setWrestlers);
  }, []);

  return (
    <WrestlerContext.Provider value={[wrestlers, setWrestlers]}>
      {children}
    </WrestlerContext.Provider>
  );
};

export { WrestlerContext, WrestlerProvider };
