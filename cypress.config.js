const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true, // permite grabar pruebas automáticamente
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
