const axios = require('axios');
const { KEYCLOAK_URL } = require('../config/keycloak');
const { getAdminToken } = require('../services/keycloakService');
const { successResponse, errorResponse } = require('../utils/responseHandler');

module.exports = {
  proxyRequest: async (req, res) => {
    try {
      // Get original path without base route
      const originalPath = req.originalUrl.replace('/keycloak', '');
      
      // Construct Keycloak URL
      const keycloakUrl = `${KEYCLOAK_URL}${originalPath}`;
      const token = await getAdminToken();

      console.log(`Proxying ${req.method} to: ${keycloakUrl}`);

      const response = await axios({
        method: req.method,
        url: keycloakUrl,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': req.headers['content-type'] || 'application/json'
        },
        data: req.body,
        validateStatus: () => true
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error('Proxy error:', error.message);
      errorResponse(res, error);
    }
  }
};