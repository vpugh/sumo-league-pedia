import React from 'react';
import { capitalizeFirstLetter, isObject } from '../utils/helpers';
import WrestlerProfileBM from './wrestler-profile-bm';
import {
  RegularType,
  BoldType,
  FlexContainer,
  CardContainer
} from '../styles/wrestler-card';

const WrestlerCards = ({ w }) => {
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
          <WrestlerProfileBM w={w} />
        </FlexContainer>
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
