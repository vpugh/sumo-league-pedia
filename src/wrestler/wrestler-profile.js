import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import GetRecords from '../wrestler-card/get-records';

const getRecords = id => {
  return <GetRecords id={id} />;
};

const WrestlerProfile = props => {
  const { wrestlerData } = props;
  return (
    <div style={{ padding: '15px 24px' }}>
      <h1>{wrestlerData.name} Profile</h1>
      <div style={{ display: 'flex' }}>
        <img src={wrestlerData.img} style={{ width: 150, height: 'auto' }} alt='sample rikishi' />
        <div style={{ padding: 10 }}>
          <p>Ring Name: {wrestlerData.name}</p>
          {wrestlerData.status !== 'retired' && (
            <p style={{ margin: 0, fontStyle: 'italic' }}>
              Division: {wrestlerData.division}
              <br />
              {capitalizeFirstLetter(wrestlerData.rankDirection)}{' '}
              {capitalizeFirstLetter(wrestlerData.rank)}{' '}
              {wrestlerData.rankNumber && `#${wrestlerData.rankNumber}`}
              <br />
              <br />
            </p>
          )}
          <p style={{ lineHeight: 1.4, margin: 0 }}>
            Place of Birth: {wrestlerData.placeOfBirth}
            <br />
            Age: {wrestlerData.age}
            <br />
            {wrestlerData.status === 'active' ? (
              <>Injured: {wrestlerData.injured ? 'Yes' : 'No'}</>
            ) : (
              'Retired'
            )}
          </p>
        </div>
      </div>
      <p style={{ padding: '0 10px', marginBottom: '.5rem' }}>
        Recent Career Record:
      </p>
      {getRecords(wrestlerData.id)}
    </div>
  );
};

export default WrestlerProfile;
