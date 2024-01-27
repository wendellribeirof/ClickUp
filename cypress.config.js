const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's3d4n6',
  e2e: {
    baseUrl: 'https://app.clickup.com',
    defaultCommandTimeout: 30000,
   // supportFile: false
   setupNodeEvents(on, config) {
    }
  },
});