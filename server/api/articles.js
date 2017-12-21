const router = require('express').Router();
const key = require('../../secrets').newsApi;
const axios = require('axios');
const CircularJSON = require('circular-json')

module.exports = router;

router.get('/techCrunchNews', (req, res, next) => {
  axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`)
    .then(headlines => res.send(CircularJSON.stringify(headlines.data)))
    .catch(next);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('There was an Express error.');
});
