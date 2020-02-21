import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import ReactModal from 'react-modal';
import {
  ListContainer,
  Table,
  TableHeader,
  TableBody,
  TableBodyContainer,
  TableBodyParagraph,
  TableBodyBadge
} from '../styles/display-record';

const listData = record => {
  return (
    <ListContainer>
      <Table>
        <thead>
          <tr>
            {record.map(obj => {
              const title = Object.entries(obj)[0][0];
              return (
                <TableHeader key={title}>
                  {capitalizeFirstLetter(title)}
                </TableHeader>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {record.map(obj => {
              const o = Object.entries(obj)[0][1];
              const hasKachiKoshi = Boolean(o.wins && o.wins >= 8);
              const hasMakeKoshi = Boolean(o.loss && o.loss >= 8);
              const withdrew = Boolean(o.kyujo);
              const tournamentPassed = o.tournamentPassed;
              const hasParticipated = o.participate;

              const backgroundColor = () => {
                if (hasKachiKoshi) {
                  return 'green';
                }
                if (hasMakeKoshi) {
                  return 'red';
                }
                if (withdrew) {
                  return 'yellow';
                }
              };
              return (
                <TableBody
                  border={backgroundColor()}
                  key={`${Object.entries(obj)[0]} ${Object.entries(obj)[0].id}`}
                >
                  <TableBodyContainer>
                    {hasParticipated && (
                      <>
                        <TableBodyParagraph>Wins: {o.wins}</TableBodyParagraph>
                        <TableBodyParagraph>Loss: {o.loss}</TableBodyParagraph>
                        {o.kyujo && (
                          <TableBodyParagraph>
                            Kyujo: {o.kyujo}
                          </TableBodyParagraph>
                        )}
                        {o.champion && (
                          <TableBodyBadge>Champion</TableBodyBadge>
                        )}
                      </>
                    )}
                    {!hasParticipated && tournamentPassed && (
                      <TableBodyParagraph>
                        Did not
                        <br /> participate
                      </TableBodyParagraph>
                    )}
                    {!hasParticipated && !tournamentPassed && (
                      <TableBodyParagraph>
                        Future
                        <br /> Event
                      </TableBodyParagraph>
                    )}
                  </TableBodyContainer>
                </TableBody>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </ListContainer>
  );
};

const DisplayRecord = props => {
  const { data, year } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        style={{
          background: '#3e496b',
          color: '#fff',
          padding: '6px 23px',
          fontSize: '1rem',
          borderRadius: 4,
          border: 'none'
        }}
      >
        {year}
      </button>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={'Display Wrestler Record'}
        shouldCloseOnOverlayClick={true}
        // style={style}
      >
        <button onClick={closeModal}>Close Modal</button>
        {data && listData(data[year])}
      </ReactModal>
    </>
  );
};

export default DisplayRecord;
