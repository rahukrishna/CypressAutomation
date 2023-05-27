const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o2mr2o",
  defaultCommandTimeout:10000,
  env: {
    url : "https://rahulshettyacademy.com/angularpractice/shop"
  },
  retries : {
    runMode : 1
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
