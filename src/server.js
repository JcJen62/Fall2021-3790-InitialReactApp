const express = require('express')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/congress', (req, res) => {
  const chamber = req.query.chamber
  axios.get(`https://api.propublica.org/congress/v1/117/${chamber}/members.json`, {
    headers: { 'x-api-key': process.env.PROPUBLICA_API_KEY}
  })
    .then((response) => res.json(response.data))
  .catch((err) => res.status(500).json({type: 'error', message: err.message }))
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))