import React, { useEffect, useState } from 'react';
import { getWrestlers } from './utils/api';
import { WrestlerFormContainer } from './styles/wrestler-form';
import WrestlerCards from './wrestler-card/wrestler-cards-2';
import Modal from './modal/modal';
import AddWrestlers from './wrestler/add-wrestlers';
import TextProgress from './components/text-progress';

const fetchWrestlers = async (set, loading) => {
  const data = await getWrestlers();
  console.log('Data', data);
  set(data);
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

  const filterByRank = (arr, rank) => {
    return arr.filter(x => x.rank === rank);
  };

  const filterByRankDirection = (arr, rank) => {
    return filterByRank(arr, rank).sort(
      (a, b) => a.rankDirection > b.rankDirection
    );
  };

  const filteredWrestlers = () => {
    if (wrestlers) {
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
      <h2 style={{ marginTop: 0 }}>List of Sumo Wrestlers</h2>
      <p>Currently will be Makuuchi division</p>
      {!isLoading &&
        wrestlers &&
        filteredWrestlers().map(w => <WrestlerCards w={w} key={w.id} />)}
      {isLoading && <TextProgress text={'Loading Wrestlers'} />}
      <div
        style={{
          border: '1px solid #ddd',
          padding: '14px 0',
          textAlign: 'center',
          borderRadius: 4
        }}
        onClick={openModal}
      >
        Add Wrestler
      </div>
      <Modal show={isModalOpen} handleClose={closeModal}>
        <AddWrestlers />
      </Modal>
    </WrestlerFormContainer>
  );
};

export default ListWrestlers;
