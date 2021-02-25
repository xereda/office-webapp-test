import { v4 as uuid } from 'uuid';

const defineOptions = () => {
  const urlApi = `${process.env.VUE_APP_VERCEL_URL}/api/offices`;

  return {
    APIResource: urlApi,
  };
};

export function serviceFactory(options) {
  const fetchConfig = {
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'from-tests-e2e': window.Cypress ? 'true' : 'false',
    },
  };

  const serviceURI = options.APIResource;

  const getAllOffices = async () => {
    console.log('getAllOffices', process.env, serviceURI);

    const response = await fetch(`${serviceURI}`, fetchConfig);

    return response.json();
  };

  const getOneOffice = async officeIndex => {
    const response = await fetch(
      `${serviceURI}?index=${officeIndex}`,
      fetchConfig,
    );

    return response.json();
  };

  const removeOffice = async officeIndex => {
    const response = await fetch(`${serviceURI}?index=${officeIndex}`, {
      ...fetchConfig,
      method: 'DELETE',
    });

    return response.json();
  };

  const updateOffice = async office => {
    const response = await fetch(`${serviceURI}?index=${office.index}`, {
      ...fetchConfig,
      method: 'PUT',
      body: JSON.stringify({ ...office, _id: undefined }),
    });

    return response.json();
  };

  const addOffice = async office => {
    const response = await fetch(`${serviceURI}`, {
      ...fetchConfig,
      method: 'POST',
      body: JSON.stringify({ ...office, index: uuid() }),
    });

    return response.json();
  };

  return {
    getAllOffices,
    getOneOffice,
    removeOffice,
    updateOffice,
    addOffice,
  };
}

const {
  getAllOffices,
  getOneOffice,
  removeOffice,
  updateOffice,
  addOffice,
} = serviceFactory(defineOptions());

export { getAllOffices, getOneOffice, removeOffice, updateOffice, addOffice };
