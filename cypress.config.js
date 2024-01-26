const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
   // supportFile: false
   setupNodeEvents(on, config) {
    }
  },
  
});