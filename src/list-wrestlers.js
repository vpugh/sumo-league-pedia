import React, { useEffect, useState } from 'react';
import { getWrestlers } from './utils/api';
import { WrestlerFormContainer } from './styles/wrestler-form';
import { PhantomButton } from './styles/buttons';
import { ListTitle } from './styles/list';
import WrestlerCards from './wrestler-card/wrestler-cards-2';
import ReactModal from 'react-modal';
import AddWrestlers from './wrestler/add-wrestlers';
import TextProgress from './components/text-progress';

const style = {
  overlay: {
    background: 'rgba(0, 0, 0, .75)'
  },
  content: {
    padding: 0
  }
};

const filterByRank = (arr, rank) => {
  return arr.filter(x => x.rank === rank);
};

const filterByRankDirection = (arr, rank) => {
  return filterByRank(arr, rank).sort(
    (a, b) => a.rankDirection > b.rankDirection
  );
};

const fetchWrestlers = async (set, loading) => {
  const data = await getWrestlers();
  set(data.rikishis);
  loading(false);
};

const ListWrestlers = () => {
  const [wrestlers, setWrestlers] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchWrestlers(setWrestlers, setIsLoading);
  }, []);

  const filteredWrestlers = () => {
    if (wrestlers && wrestlers.length > 0) {
      const yokozuna = filterByRankDirection(wrestlers, 'yokozuna');
      const ozeki = filterByRankDirection(wrestlers, 'ozeki');
      const sekiwake = filterByRankDirection(wrestlers, 'sekiwake');
      const komusubi = filterByRankDirection(wrestlers, 'komusubi');
      const maegashira = wrestlers
        .filter(x => x.rank === 'maegashira')
        .sort((a, b) =>
          a.rankDirection > b.rankDirection && a.rankNumber > b.rankNumber
            ? 1
            : a.rankNumber < b.rankNumber
            ? -1
            : 0
        );
      return yokozuna.concat(ozeki, sekiwake, komusubi, maegashira);
    }
  };

  return (
    <WrestlerFormContainer>
      <ListTitle>List of Sumo Wrestlers</ListTitle>
      {!isLoading &&
        wrestlers &&
        wrestlers.length > 0 &&
        filteredWrestlers().map(w => <WrestlerCards w={w} key={w.id} />)}
      {isLoading && <TextProgress text={'Loading Wrestlers'} />}
      <PhantomButton onClick={openModal}>Add Wrestler</PhantomButton>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={'Add Wrestler Modal'}
        shouldCloseOnOverlayClick={true}
        style={style}
      >
        <AddWrestlers
          closeModal={closeModal}
          wrestlers={wrestlers}
          setWrestlers={setWrestlers}
        />
      </ReactModal>
    </WrestlerFormContainer>
  );
};

export default ListWrestlers;

ListWrestlers.whyDidYouRender = true;
