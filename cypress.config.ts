/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

import { defineConfig } from "cypress";
import {downloadFile } from "cypress-downloadfile/lib/addPlugin";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import addCucumberPreprocessorPlugin  from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import cucumber from "@badeball/cypress-cucumber-preprocessor";
import fs from "fs";
import path from "path";
import dns from "dns";
import {rmdir } from "fs";
module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env
    }
      on("task", {
      });
      on("before:browser:launch", (browser, launchOptions) => {});
      return config;
    },
    env: {
      ProCeeFront: {
        baseUrl:
          "http://procee-front.s3-website.eu-west-3.amazonaws.com/prod/#/connexion",
      },
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://fr.foncia.com/",
    chromeWebSecurity: false,
    defaultCommandTimeout: 60000,
    responseTimeout: 60000,
    taskTimeout: 60000,
    viewportHeight: 1200,
    viewportWidth: 1800,
  },
});
function beforeRunHook(details: any) {
  throw new Error("Function not implemented.");
}

function afterRunHook() {
  throw new Error("Function not implemented.");
}

