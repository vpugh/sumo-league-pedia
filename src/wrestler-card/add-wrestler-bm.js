import React, { useState } from 'react';
import ReactModal from 'react-modal';
import AddWrestlers from '../wrestler/add-wrestlers';
import { PhantomButton } from '../styles/buttons';

const style = {
  overlay: {
    background: 'rgba(0, 0, 0, .75)'
  },
  content: {
    padding: 0
  }
};

const setModal = (func, state) => {
  func(state);
};

const AddWrestlerButtonModal = props => {
  const { wrestlers, setWrestlers } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setModal(setIsModalOpen, true);
  };

  const closeModal = () => {
    setModal(setIsModalOpen, false);
  };

  return (
    <div>
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
    </div>
  );
};

export default AddWrestlerButtonModal;
