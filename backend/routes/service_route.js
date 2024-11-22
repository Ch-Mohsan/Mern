const express = require('express');
const router = express.Router();
const services = require('../controles/service_control');

// Define the route correctly
router.get('/service', services);
//router.route('/servixe').get(services)

module.exports = router;
