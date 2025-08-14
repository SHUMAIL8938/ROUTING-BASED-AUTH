const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: `Welcome to your dashboard, ${req.user?.id || 'guest'}!` });
});
module.exports = router;
