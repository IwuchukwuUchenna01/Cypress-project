const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.pageLoadTimeout = 500000;
      this.taskTimeout = 100000;
    },
  },
});
