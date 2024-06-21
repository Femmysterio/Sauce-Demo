const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bo2cnf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: false,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 200000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: true,
    reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  baseUrl : 'https://www.saucedemo.com/'
  }, 
});
