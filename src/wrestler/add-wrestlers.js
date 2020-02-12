import React from 'react';
import WrestlerForm from './wrestler-form';
import { addWrestlers } from '../utils/api';
import { WrestlerFormContainer } from '../styles/wrestler-form';

const createOnSubmit = (wrestlers, setWrestlers, closeModal) => (e, data) => {
  e.preventDefault();
  addWrestlers(JSON.stringify(data));
  setWrestlers([...wrestlers, data]);
  closeModal();
};

const AddWrestlers = props => {
  const { closeModal, wrestlers, setWrestlers } = props;

  const generateOnSubmit = createOnSubmit(wrestlers, setWrestlers, closeModal);

  return (
    <WrestlerFormContainer>
      <h2 style={{ marginTop: 0 }}>Add Wrestler</h2>
      <WrestlerForm
        primaryButton='Add Wrestler'
        primaryAction={generateOnSubmit}
        onClose={closeModal}
      />
    </WrestlerFormContainer>
  );
};

export default AddWrestlers;

AddWrestlers.whyDidYouRender = true;
