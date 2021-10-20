const axios = require('axios')

exports.handler = async function (event, context) {
  console.log(event)
  console.log(context)
  try {
    const { chamber } = event.queryStringParameters
    const response = await axios.get(`https://api.propublica.org/congress/v1/117/${chamber}/members.json`, {
      headers: {'x-api-key': process.env.PROPUBLICA_API_KEY}
    })
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString()
    }
  }
}