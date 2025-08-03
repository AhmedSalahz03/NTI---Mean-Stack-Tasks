const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

const protect = require('../middleware/auth');

router.use(protect); // Apply authentication middleware to all payment routes
router.get('/', paymentController.getAllPayments);
router.get('/:id', paymentController.getPaymentById);
router.post('/', paymentController.addPayment);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
