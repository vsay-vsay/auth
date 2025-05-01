const { successResponse } = require('../utils/responseHandler');

module.exports = {
  healthCheck: (req, res) => {
    successResponse(res, { status: 'ok' });
  }
};