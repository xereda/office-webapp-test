const apiUri = 'https://602bd1e6ef26b40017f14c0b.mockapi.io/api/v1/offices';

export const getAllOffices = async () => {
  const response = await fetch(apiUri);

  return response.json();
};

export const getOneOffice = async officeId => {
  const response = await fetch(`${apiUri}/${officeId}`);

  return response.json();
};

export const removeOffice = async officeId => {
  const response = await fetch(`${apiUri}/${officeId}`, { method: 'DELETE' });

  return response.json();
};
