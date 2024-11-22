const { ZodError } = require('zod');

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Backend error';
  const extraDetails = err.extraDetails || 'No details';

 return  res.status(status).json({ message, extraDetails });
};

module.exports = errorHandler;
