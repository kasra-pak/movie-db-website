import needle from "needle";

exports.handler = async function (event, context) {
  const keyName = process.env.API_KEY_NAME;
  const keyValue = process.env.API_KEY_VALUE;
  const baseURL = process.env.API_BASE_URL;
  const method = req.query.method;
  const query = req.query.q;

  const params = {
    [keyName]: keyValue,
    query: query,
  };

  needle.request("get", `${baseURL}${method}`, params, (err, resp) => {
    if (resp) {
      return {
        statusCode: 200,
        body: JSON.stringify(resp.body),
      };
    }

    if (err) {
      return {
        statusCode: 500,
        body: err,
      };
    }
  });
};
