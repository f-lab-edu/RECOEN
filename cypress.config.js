const { defineConfig } = require('cypress');
const { GoogleSocialLogin } = require('cypress-social-logins').plugins;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportHeight: 800,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      on('task', {
        GoogleSocialLogin: GoogleSocialLogin,
      });
    },
  },
});
