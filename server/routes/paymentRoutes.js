const express = require('express');
const { handlePaymentCallback } = require('../controllers/paymentController');

const router = express.Router();

router.post('/payment-callback', handlePaymentCallback);

module.exports = router;
