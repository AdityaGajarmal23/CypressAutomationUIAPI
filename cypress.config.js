const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporterEnabled: "spec, mochawesome",
  mochawesomeReporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    quiet: true,
    overwrite: false,
    html: true,
    json: true
  },
  video:true,
  e2e: {
    baseUrl:'https://practicetestautomation.com/',
    defaultCommandTimeout:10000,
    responseTimeout:10000,
    testIsolation: false,
    "experimentalOriginDependencies":true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
