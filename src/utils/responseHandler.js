module.exports = {
    successResponse: (res, data, statusCode = 200) => {
      res.status(statusCode).json({
        success: true,
        data
      });
    },
  
    errorResponse: (res, error, statusCode = 500) => {
      res.status(statusCode).json({
        success: false,
        error: error.message || 'Internal Server Error',
        details: error.response?.data || null
      });
    }
  };