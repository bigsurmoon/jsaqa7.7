const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ekrqu2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
