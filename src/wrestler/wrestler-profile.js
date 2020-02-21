import React from 'react';
import { capitalizeFirstLetter, boldType } from '../utils/helpers';
import DisplayRecord from '../wrestler-card/display-record';

const WrestlerProfile = props => {
  console.log(props);
  const { wrestlerData, onClose } = props;
  const {
    img,
    name,
    ringName,
    division,
    rankDirection,
    rank,
    rankNumber,
    active,
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}
      >
        <h1 style={{ margin: 0 }}>Wrestler Profile</h1>
        <button onClick={onClose}>X</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={img} style={{ width: 207 }} alt='sample rikishi' />
        <div
          style={{
            padding: '0 20px 0 40px',
            color: '#EB9E05',
            fontSize: '1.13rem'
          }}
        >
          <p style={{ marginTop: 0 }}>
            <span
              style={{
                fontSize: '.8rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {name}
            </span>
            <br /> <span style={{ fontSize: '2rem' }}>{ringName}</span>
            <br />{' '}
            <span
              style={{
                fontSize: '1.25rem',
                display: 'inline-block',
                margin: '.25rem 0 1rem 0'
              }}
            >
              {capitalizeFirstLetter(rankDirection)}{' '}
              {capitalizeFirstLetter(rank)}
              {rankNumber && `${' '}#${rankNumber}`}/{division}
            </span>
            <br />
            <span
              style={{
                background: active ? '#6aaa62' : '#ff635c',
                borderRadius: 5,
                padding: '5px 15px',
                color: '#fff'
              }}
            >
              {active ? 'Active' : 'Retired'} {active && injured && '- Injured'}
            </span>
          </p>
          <p
            style={{
              lineHeight: 1.4,
              margin: 0,
              padding: '20px 0'
            }}
          >
            {boldType('Date of Birth')} {dob}
            <br />
            {boldType('Place of Birth')} {placeOfBirth}
            <br />
            {boldType('Age')} {age}
            <br />
          </p>
          <div style={{ marginBottom: '1rem', borderTop: '1px solid #ddd' }}>
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
    </div>
  );
};

export default WrestlerProfile;
