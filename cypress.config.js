module.exports = {
  e2e: {
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
      grepTags: "",
    },
    async setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
    },
  },
};
