const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hqx22j',
  e2e: {
    baseUrl: 'https://app.clickup.com/login',
    defaultCommandTimeout: 30000,
   // supportFile: false
   setupNodeEvents(on, config) {
    }
  },
});