/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

import { defineConfig } from "cypress";
const path = require("path");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env
    },
    on("file:preprocessor", createBundler({
      plugins: [createEsbuildPlugin(config)],
    }));
    await addCucumberPreprocessorPlugin(on, config);
    on("task", {
    });
    on("before:browser:launch", (browser, launchOptions) => {});
    return config;
    },
    env: {
      // Prod: {
      //   baseUrl: "https://fr.foncia.com/",
      // },
    },
    baseUrl: "https://fr.foncia.com/",
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    defaultCommandTimeout: 60000,
    responseTimeout: 60000,
    taskTimeout: 60000,
    viewportHeight: 1200,
    viewportWidth: 1800,
  },
});

