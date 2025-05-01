const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');
const keycloakRoutes = require('./keycloakRoutes');

router.get('/health', healthController.healthCheck);
router.use('/keycloak', keycloakRoutes);

module.exports = router;