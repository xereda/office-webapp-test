import { v4 as uuid } from 'uuid';

const API_URI = process.env.VUE_APP_API_BASE + process.env.VUE_APP_RESOURCE;
const API_URI_E2E =
  process.env.VUE_APP_API_BASE + process.env.VUE_APP_RESOURCE_E2E;

const defineOptions = () => ({
  APIResource: window.Cypress ? API_URI_E2E : API_URI,
});

export function serviceFactory(options) {
  const fetchConfig = {
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const serviceURI = options.APIResource;

  const getAllOffices = async () => {
    const response = await fetch(serviceURI, fetchConfig);

    return response.json();
  };

  const getOneOffice = async officeId => {
    const response = await fetch(`${serviceURI}/${officeId}`, fetchConfig);

    return response.json();
  };

  const removeOffice = async officeId => {
    const response = await fetch(`${serviceURI}/${officeId}`, {
      ...fetchConfig,
      method: 'DELETE',
    });

    return response.json();
  };

  const updateOffice = async office => {
    const response = await fetch(`${serviceURI}/${office.id}`, {
      ...fetchConfig,
      method: 'PUT',
      body: JSON.stringify(office),
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
