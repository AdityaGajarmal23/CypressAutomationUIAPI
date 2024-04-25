const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporterEnabled: "spec, mochawesome",
  reporter: 'cypress-mochawesome-reporter',
  mochawesomeReporterOptions: {
    // reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    quiet: true,
    overwrite: false,
    html: true,
    json: true,
    charts : true,
    reportPageTitle: "Cypress Inline Reporter",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
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
