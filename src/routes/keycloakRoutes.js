const express = require('express');
const router = express.Router();
const { proxyRequest } = require('../controllers/keycloakController');

// Use regex for route matching
router.all(/.*/, proxyRequest);

module.exports = router;