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

const isObject = val => {
  if (val === null) {
    return false;
  }
  return typeof val === 'function' || typeof val === 'object';
};

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

  const closeFunction = isEditing ? stopEditing : closeModal;

  if (w && isObject(w)) {
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
      </CardContainer>
    );
  }
  return null;
};

// export default WrestlerCards;

const memoizedComponent = React.memo(WrestlerCards, (prevProps, nextProps) => {
  console.log(
    'Prop Comparison',
    prevProps,
    nextProps,
    prevProps.thing === nextProps.thing
  );

  /*
      When using this function you always need to return
      a Boolean. For now we'll say the props are NOT equal 
      which means the component should rerender.
    */
  return false;
});

export default memoizedComponent;
memoizedComponent.whyDidYouRender = true;
