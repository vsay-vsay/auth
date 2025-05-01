const express = require('express');
const cors = require('cors');
const config = require('./src/config/keycloak');
const routes = require('./src/routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  });
});

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Keycloak Gateway running on http://localhost:${PORT}`);
  console.log(`Proxying to Keycloak at ${config.KEYCLOAK_URL}`);
});