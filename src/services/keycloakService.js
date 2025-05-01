const axios = require('axios');
const { KEYCLOAK_URL, KEYCLOAK_ADMIN_USER, KEYCLOAK_ADMIN_PASSWORD } = require('../config/keycloak');

let adminToken = '';

module.exports = {
  getAdminToken: async () => {
    if (adminToken) return adminToken;
    
    try {
      const response = await axios.post(
        `${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token`,
        new URLSearchParams({
          client_id: 'admin-cli',
          username: KEYCLOAK_ADMIN_USER,
          password: KEYCLOAK_ADMIN_PASSWORD,
          grant_type: 'password'
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      
      adminToken = response.data.access_token;
      return adminToken;
    } catch (error) {
      console.error('Failed to get admin token:', error.message);
      throw error;
    }
  }
};