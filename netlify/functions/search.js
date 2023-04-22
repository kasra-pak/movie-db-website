const needle = require("needle");

exports.handler = async function (event) {
  const keyName = process.env.API_KEY_NAME;
  const keyValue = process.env.API_KEY_VALUE;
  const baseURL = process.env.API_BASE_URL;

  const { searchTerm } = event.queryStringParameters;
  const url = `${baseURL}/search/multi?${keyName}=${keyValue}&query=${searchTerm}`;

  try {
    let response = await needle("get", url);
    const data = response.body;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
