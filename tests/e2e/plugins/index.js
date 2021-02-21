const fetch = require('node-fetch');

const API_URI_E2E =
  process.env.VUE_APP_API_BASE + process.env.VUE_APP_RESOURCE_E2E;

const fetchConfig = {
  mode: 'cors',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

const getAllOffices = async () => {
  const response = await fetch(API_URI_E2E, fetchConfig);

  return response.json();
};

const removeOffice = async officeId => {
  const response = await fetch(`${API_URI_E2E}/${officeId}`, {
    ...fetchConfig,
    method: 'DELETE',
  });

  return response.json();
};

const addOffice = async office => {
  const response = await fetch(`${API_URI_E2E}`, {
    ...fetchConfig,
    method: 'POST',
    body: JSON.stringify(office),
  });

  return response.json();
};

module.exports = (on, config) => {
  on('task', {
    async 'service:removeAllOffices'() {
      const offices = await getAllOffices();

      await Promise.all(
        offices.map(async office => {
          await removeOffice(office.id);
        }),
      );

      return offices;
    },
    async 'service:addOffice'() {
      const office = await addOffice();

      return office;
    },
  });

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
  });
};
