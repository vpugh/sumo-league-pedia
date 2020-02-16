export const getWrestlers = async () => {
  let res = await fetch('/api/v1/rikishi');
  return await res.json();
};

export const addWrestlers = body => {
  fetch('/api/v1/rikishi', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body
  });
};

export const updateWrestlers = (body, id) => {
  fetch(`/api/v1/rikishi/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body
  });
};

export const getWrestlerRecord = async id => {
  let res = await fetch(`/api/v1/rikishi/${id}/records`);
  return await res.json();
};

export const getDivisions = async () => {
  let res = await fetch('/api/v1/divisions');
  return await res.json();
};

export const getRanks = async () => {
  let res = await fetch('/api/v1/ranks');
  return await res.json();
};

export const getNationality = async () => {
  let res = await fetch('/api/v1/ranks');
  return await res.json();
};
