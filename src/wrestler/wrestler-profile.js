import React from 'react';
import { capitalizeFirstLetter, boldType } from '../utils/helpers';
import DisplayRecord from '../wrestler-card/display-record';

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
    id,
    record
  } = wrestlerData;

  const years = Object.keys(record);
  const sortedYears = years.concat().sort((a, b) => b - a);

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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridGap: '15px 0'
            }}
          >
            {record &&
              record.map(rec => {
                const year = Object.keys(rec.record);
                return (
                  <DisplayRecord
                    key={`${year}${id}`}
                    data={rec.record}
                    year={year}
                    id={id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrestlerProfile;
