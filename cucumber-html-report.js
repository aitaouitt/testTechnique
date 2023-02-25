const report = require("multiple-cucumber-html-reporter");
const moment = require("moment");
let now = new Date();
var dateString = moment(now).format("YYYY-MM-DD HH-mm-ss");

report.generate({
  jsonDir: "cypress/reports",
  reportPath: "cypress/reports/HtmlReport-" + dateString + ".html",
  reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    ignoreBadJsonFile: true,
    scenarioTimestamp: true,
    screenFolder: "cypress/screenshots",
  metadata:{
    browser: {
        name: 'chrome',
        version: '96'
    },
    device: 'Local test machine',
    platform: {
      name: process.platform,
      version: '20.0.4'
    }
  },
  customData: {
      title: 'Run info',
      data: [
          {label: 'Project', value: 'Alexandra'},
          {label: 'Release', value: '1.2.3'},
          {label: "Date d'Exécution", value: dateString}
      ]
  }
});
