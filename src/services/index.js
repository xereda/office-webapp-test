const apiUri = 'https://602bd1e6ef26b40017f14c0b.mockapi.io/api/v1/offices';

const fetchConfig = {
  mode: 'cors',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

export const getAllOffices = async () => {
  const response = await fetch(apiUri, fetchConfig);

  return response.json();
};

export const getOneOffice = async officeId => {
  const response = await fetch(`${apiUri}/${officeId}`, fetchConfig);

  return response.json();
};

export const removeOffice = async officeId => {
  const response = await fetch(`${apiUri}/${officeId}`, {
    ...fetchConfig,
    method: 'DELETE',
  });

  return response.json();
};

export const updateOffice = async office => {
  const response = await fetch(`${apiUri}/${office.id}`, {
    ...fetchConfig,
    method: 'PUT',
    body: JSON.stringify(office),
  });

  return response.json();
};

export const addOffice = async office => {
  const response = await fetch(`${apiUri}`, {
    ...fetchConfig,
    method: 'POST',
    body: JSON.stringify(office),
  });

  return response.json();
};
