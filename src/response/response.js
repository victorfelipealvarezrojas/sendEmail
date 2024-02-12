const responseHttp = (sucess, message = null, statusCode = 200) => {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(
      {
        sucess,
        message,
      },
      null,
      2
    ),
  };
};

module.exports = responseHttp;
