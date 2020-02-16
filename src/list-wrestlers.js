import React, { useContext } from 'react';
import { WrestlerFormContainer } from './styles/wrestler-form';
import { ListTitle } from './styles/list';
import WrestlerCards from './wrestler-card/wrestler-cards';
import TextProgress from './components/text-progress';
import AddWrestlerButtonModal from './wrestler-card/add-wrestler-bm';
import { filteredWrestlers } from './utils/helpers';
import { WrestlerContext } from './context/wrestler-context';

const ListWrestlers = () => {
  const [wrestlers] = useContext(WrestlerContext);
  if (wrestlers && wrestlers.length > 0) {
    return (
      <WrestlerFormContainer>
        <ListTitle>List of Sumo Wrestlers</ListTitle>
        {filteredWrestlers(wrestlers).map(w => (
          <WrestlerCards w={w} key={w.id} />
        ))}
        <AddWrestlerButtonModal />
      </WrestlerFormContainer>
    );
  }
  return <TextProgress text={'Loading Wrestlers'} />;
};

export default ListWrestlers;

ListWrestlers.whyDidYouRender = true;
