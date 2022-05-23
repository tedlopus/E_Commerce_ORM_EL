// Require express and the api route folder
const router = require('express').Router();
const apiRoutes = require('./api');

// Use api routes with the give file path name
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;