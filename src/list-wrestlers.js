import React, { useEffect, useState } from "react";
import { getWrestlers } from "./utils/api";
import { WrestlerFormContainer } from "./styles/wrestler-form";
import WrestlerCards from "./wrestler-cards";
import Modal from "./modal/modal";
import AddWrestlers from "./add-wrestler/add-wrestlers";

const fetchWrestlers = async set => {
  const data = await getWrestlers();
  set(data);
};

const ListWrestlers = () => {
  const [wrestlers, setWrestlers] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchWrestlers(setWrestlers);
  }, []);

  return (
    <WrestlerFormContainer>
      <h2 style={{ marginTop: 0 }}>List of Sumo Wrestlers</h2>
      <p>Currently will be Makuuchi division</p>
      {wrestlers && wrestlers.map(w => <WrestlerCards w={w} key={w.id} />)}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "14px 0",
          textAlign: "center",
          borderRadius: 4
        }}
        onClick={openModal}
      >
        Add Wrestler
      </div>
      <Modal show={isModalOpen} handleClose={closeModal}>
        <AddWrestlers />
      </Modal>
    </WrestlerFormContainer>
  );
};

export default ListWrestlers;
