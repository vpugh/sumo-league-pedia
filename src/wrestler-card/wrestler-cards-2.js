import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import ReactModal from 'react-modal';
import UpdateWrestlers from '../wrestler/update-wrestlers';
import WrestlerProfile from '../wrestler/wrestler-profile';

const WrestlerCards = props => {
  const { w } = props;
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

  return (
    <div
      style={{
        border: '1px solid #e4e3e3',
        background: 'rgb(247, 247, 247)',
        borderRadius: 3,
        marginBottom: 10
      }}
      key={w.name}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'left',
          padding: 10
        }}
      >
        <p
          style={{
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            flex: 2,
            fontWeight: 'bold'
          }}
        >
          {w.name}
        </p>
        <p
          style={{
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            flex: 2
          }}
        >
          {capitalizeFirstLetter(w.rankDirection)}{' '}
          {capitalizeFirstLetter(w.rank)} {w.rankNumber && `#${w.rankNumber}`}
        </p>
        <p
          style={{
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            flex: 2
          }}
        >
          {w.placeOfBirth} | {w.age}
        </p>
        <>
          <button
            onClick={openModal}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexBasis: '100%',
              flex: 1,
              alignItems: 'center',
              color: '#fff',
              background: 'red'
            }}
          >
            View Profile
          </button>
          <button
            onClick={startEditing}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexBasis: '100%',
              flex: 1,
              alignItems: 'center',
              color: '#fff',
              background: 'red'
            }}
          >
            Edit
          </button>
        </>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={isEditing ? stopEditing : closeModal}
        contentLabel={'Update Wrestler Modal'}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, .75)'
          },
          content: {
            padding: 0
          }
        }}
      >
        {!isEditing && <WrestlerProfile wrestlerData={w} />}
        {isEditing && <UpdateWrestlers wrestlerData={w} onClose={closeModal} />}
      </ReactModal>
    </div>
  );
};

export default WrestlerCards;
