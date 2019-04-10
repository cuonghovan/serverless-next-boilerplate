module.exports.getMessage = async event => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "Hello, World!",
      input: event,
    }),
  };
};
