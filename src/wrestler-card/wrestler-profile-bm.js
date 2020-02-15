import React, { useState } from 'react';
import ReactModal from 'react-modal';
import UpdateWrestlers from '../wrestler/update-wrestlers';
import WrestlerProfile from '../wrestler/wrestler-profile';
import { Button } from '../styles/buttons';

const style = {
  overlay: {
    background: 'rgba(0, 0, 0, .75)'
  },
  content: {
    padding: 0
  }
};

const WrestlerProfileBM = ({ w }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const startEditing = () => {
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const closeFunction = isEditing ? stopEditing : closeModal;
  return (
    <div>
      <Button primary onClick={openModal}>
        View Profile
      </Button>
      <Button tertiary onClick={startEditing}>
        Edit
      </Button>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeFunction}
        contentLabel={'Update Wrestler Modal'}
        shouldCloseOnOverlayClick={true}
        style={style}
      >
        {!isEditing && isModalOpen && <WrestlerProfile wrestlerData={w} />}
        {isEditing && isModalOpen && (
          <UpdateWrestlers wrestlerData={w} onClose={closeModal} />
        )}
      </ReactModal>
    </div>
  );
};

export default WrestlerProfileBM;
