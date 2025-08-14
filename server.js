const express = require('express');
const authMiddleware = require('./middleware/auth');
const dashboardRoute = require('../../../dashboard');

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Home Page - No Auth Needed');
});
app.use('/dashboard', authMiddleware, dashboardRoute);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));