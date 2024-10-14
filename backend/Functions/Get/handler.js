const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

exports.getPortfolio = async (event) => {
  try {
    const { id } = event.pathParameters;

    const params = {
      TableName: "portfolio",
      Key: {
        id: id,
      },
    };

    const result = await db.get(params).promise();

    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Portfolio item not found",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Portfolio item fetched successfully",
        description: result.Item.description,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching portfolio item",
        error: error.message,
      }),
    };
  }
};
