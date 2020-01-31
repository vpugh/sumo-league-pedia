export const getWrestlers = async () => {
  let res = await fetch(
    "https://5e2a46fe92edd600140de272.mockapi.io/api/v1/rikishi"
  );
  return await res.json();
};

export const addWrestlers = body => {
  fetch("https://5e2a46fe92edd600140de272.mockapi.io/api/v1/rikishi", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body
  });
};

export const updateWrestlers = (body, id) => {
  fetch(`https://5e2a46fe92edd600140de272.mockapi.io/api/v1/rikishi/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PUT",
    body
  });
};

export const getDivisions = async () => {
  let res = await fetch(
    "https://5e2a46fe92edd600140de272.mockapi.io/api/v1/divisions"
  );
  return await res.json();
};

export const getRanks = async () => {
  let res = await fetch(
    "https://5e2a46fe92edd600140de272.mockapi.io/api/v1/ranks"
  );
  return await res.json();
};

export const getNationality = async () => {
  let res = await fetch(
    "https://5e2a46fe92edd600140de272.mockapi.io/api/v1/ranks"
  );
  return await res.json();
};
