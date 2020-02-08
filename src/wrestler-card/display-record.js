import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import {
  ListContainer,
  Table,
  TableHeader,
  TableBody,
  TableBodyContainer,
  TableBodyParagraph,
  TableBodyBadge,
  RecordYear
} from "../styles/display-record";

const listData = record => {
  const objectEntries = Object.entries(record);
  return (
    <ListContainer>
      <Table>
        <thead>
          <tr>
            {objectEntries.map(obj => (
              <TableHeader key={obj[0]}>
                {capitalizeFirstLetter(obj[0])}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {objectEntries.map(obj => {
              const o = obj[1];
              const hasKachiKoshi = Boolean(o.wins && o.wins >= 8);
              const hasMakeKoshi = Boolean(o.loss && o.loss >= 8);
              const withdrew = Boolean(o.kyujo);
              const tournamentPassed = o.tournamentPassed;
              const hasParticipated = o.participate;

              const backgroundColor = () => {
                if (hasKachiKoshi) {
                  return "green";
                }
                if (hasMakeKoshi) {
                  return "red";
                }
                if (withdrew) {
                  return "yellow";
                }
              };
              return (
                <TableBody
                  border={backgroundColor()}
                  key={`${obj[0]} ${obj[1].id}`}
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

  const [showTable, setShowTable] = useState(false);

  return (
    <div onClick={() => setShowTable(!showTable)}>
      <RecordYear>{year}</RecordYear>
      {showTable && data && listData(data)}
    </div>
  );
};

export default DisplayRecord;
