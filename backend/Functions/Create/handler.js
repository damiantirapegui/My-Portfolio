const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

exports.createPortfolio = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const id = uuidv4();
    const description = body.description;

    const params = {
      TableName: "portfolio",
      Item: {
        id: id,
        description: description,
      },
    };

    const response = await db.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Portfolio has been created succefully",
        data: params.Item,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error creating portfolio item",
        error: error.message,
      }),
    };
  }
};
