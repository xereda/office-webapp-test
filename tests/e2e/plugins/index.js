const fetch = require('node-fetch');

const urlApi = process.env.VUE_APP_API_URL;

const fetchConfig = {
  mode: 'cors',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'from-tests-e2e': 'true',
  },
};

const removeAllOffices = async () => {
  const response = await fetch(`${urlApi}?removeAllOffices=true`, {
    ...fetchConfig,
    method: 'DELETE',
  });

  return response.json();
};

const addOffice = async () => {
  const response = await fetch(`${urlApi}?resetMock=true&mockLength=1`, {
    ...fetchConfig,
    method: 'POST',
  });

  return response.json();
};

module.exports = (on, config) => {
  on('task', {
    async 'service:removeAllOffices'() {
      const result = await removeAllOffices();

      return result;
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
