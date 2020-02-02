import React, { useState } from "react";
import GetRecords from "./get-records";
import { capitalizeFirstLetter } from "./utils/helpers";
import Modal from "./modal/modal";
import UpdateWrestlers from "./add-wrestler/update-wrestlers";

const getRecords = id => {
  return <GetRecords id={id} />;
};

const WrestlerCards = props => {
  const { w } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        border: "1px solid #e4e3e3",
        background: "rgb(247, 247, 247)",
        borderRadius: 3,
        marginBottom: 20
      }}
      key={w.name}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 5px 0" }}>
            <strong>{w.name}</strong>
            <div
              style={{
                marginLeft: 14,
                display: "inline",
                fontSize: ".8rem",
                fontStyle: "italic"
              }}
              onClick={openModal}
            >
              Update Wrestler
            </div>
          </h3>
          {w.status !== "retired" && (
            <p style={{ margin: 0, fontStyle: "italic" }}>
              {w.division}/{capitalizeFirstLetter(w.rankDirection)}{" "}
              {capitalizeFirstLetter(w.rank)}{" "}
              {w.rankNumber && `#${w.rankNumber}`}
            </p>
          )}
        </div>
        <p style={{ lineHeight: 1.4, margin: 0 }}>
          {w.nationality}, {w.age}
          <br />
          {w.status === "active" ? (
            <>Injured: {w.injured ? "Yes" : "No"}</>
          ) : (
            "Retired"
          )}
        </p>
      </div>
      <p style={{ padding: "0 10px", marginBottom: ".5rem" }}>
        Recent Career Record:
      </p>
      {getRecords(w.id)}
      <Modal show={isModalOpen} handleClose={closeModal}>
        <UpdateWrestlers wrestlerData={w} />
      </Modal>
    </div>
  );
};

export default WrestlerCards;
