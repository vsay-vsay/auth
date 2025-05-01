const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  KEYCLOAK_URL: process.env.KEYCLOAK_URL,
  KEYCLOAK_ADMIN_USER: process.env.KEYCLOAK_ADMIN_USER,
  KEYCLOAK_ADMIN_PASSWORD: process.env.KEYCLOAK_ADMIN_PASSWORD,
  PORT: process.env.PORT || 3001
};