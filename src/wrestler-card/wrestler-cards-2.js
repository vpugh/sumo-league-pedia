import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { Button } from '../styles/buttons';
import {
  RegularType,
  BoldType,
  FlexContainer,
  CardContainer
} from '../styles/wrestler-card';
import ReactModal from 'react-modal';
import UpdateWrestlers from '../wrestler/update-wrestlers';
import WrestlerProfile from '../wrestler/wrestler-profile';

const style = {
  overlay: {
    background: 'rgba(0, 0, 0, .75)'
  },
  content: {
    padding: 0
  }
};

const WrestlerCards = props => {
  const { w } = props;
  console.log('Wrestler Card Rerun', w);
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
    <CardContainer>
      <FlexContainer>
        <BoldType>{w.name}</BoldType>
        <RegularType>
          {capitalizeFirstLetter(w.rankDirection)}{' '}
          {capitalizeFirstLetter(w.rank)} {w.rankNumber && `#${w.rankNumber}`}
        </RegularType>
        <RegularType>
          {w.placeOfBirth} | {w.age}
        </RegularType>
        <div>
          <Button primary onClick={openModal}>
            View Profile
          </Button>
          <Button tertiary onClick={startEditing}>
            Edit
          </Button>
        </div>
      </FlexContainer>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={isEditing ? stopEditing : closeModal}
        contentLabel={'Update Wrestler Modal'}
        shouldCloseOnOverlayClick={true}
        style={style}
      >
        {!isEditing && <WrestlerProfile wrestlerData={w} />}
        {isEditing && <UpdateWrestlers wrestlerData={w} onClose={closeModal} />}
      </ReactModal>
    </CardContainer>
  );
};

export default WrestlerCards;

WrestlerCards.whyDidYouRender = true;
