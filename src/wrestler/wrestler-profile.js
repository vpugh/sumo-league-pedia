import React from 'react';
import { capitalizeFirstLetter, boldType } from '../utils/helpers';
import GetRecords from '../wrestler-card/get-records';

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
  return (
    <div style={{ padding: '15px 24px' }}>
      <h1>Wrestler Profile</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={img}
          style={{ width: 207, height: 364 }}
          alt='sample rikishi'
        />
        <div
          style={{ padding: '0 20px', color: '#EB9E05', fontSize: '1.13rem' }}
        >
          <p style={{ marginTop: 0 }}>
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
            {boldType('Date of Birth')} {dob}
            <br />
            {boldType('Place of Birth')} {placeOfBirth}
            <br />
            {boldType('Age')} {age}
            <br />
          </p>
          <p style={{ marginBottom: '.5rem', color: '#564F42' }}>
            Tournament Record:
          </p>
          <GetRecords id={id} />
        </div>
      </div>
    </div>
  );
};

export default WrestlerProfile;
