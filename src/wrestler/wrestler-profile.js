import React from 'react';
import { capitalizeFirstLetter, boldType } from '../utils/helpers';
import GetRecords from '../wrestler-card/get-records';

const getRecords = id => {
  return <GetRecords id={id} />;
};

const WrestlerProfile = props => {
  const { wrestlerData } = props;
  const {
    img,
    name,
    ringName,
    division,
    rankDirection,
    rank,
    rankNumber,
    status,
    injured,
    dob,
    placeOfBirth,
    age,
    id
  } = wrestlerData;
  const date = Date(dob);
  return (
    <div style={{ padding: '15px 24px' }}>
      <h1>{name} Profile</h1>
      <div style={{ display: 'flex' }}>
        <img
          src={img}
          style={{ width: 150, height: 'auto' }}
          alt='sample rikishi'
        />
        <div style={{ padding: 10 }}>
          <p>
            {boldType('Name')} {name}
            <br /> {boldType('Ring Name')} {ringName}
            <br /> {boldType('Division')} {division}
            <br />
            {boldType('Rank')} {capitalizeFirstLetter(rankDirection)}{' '}
            {capitalizeFirstLetter(rank)} {rankNumber && `#${rankNumber}`}
            <br />
            {boldType('Status')}{' '}
            {status === 'active'
              ? injured
                ? 'Injured'
                : 'Not Injured'
              : 'Retired'}
          </p>
          <p style={{ lineHeight: 1.4, margin: 0 }}>
            {boldType('Date of Birth')} {date}
            <br />
            {boldType('Place of Birth')} {placeOfBirth}
            <br />
            {boldType('Age')} {age}
            <br />
          </p>
        </div>
      </div>
      <p style={{ padding: '0 10px', marginBottom: '.5rem' }}>
        Recent Career Record:
      </p>
      {getRecords(id)}
    </div>
  );
};

export default WrestlerProfile;
