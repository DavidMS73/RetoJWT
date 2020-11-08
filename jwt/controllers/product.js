const { mongoUtils, dataBase } = require("../lib/utils/mongo.js");
const COLLECTION_NAME = "productos";
const { ObjectId } = require("mongodb");

async function getProducts() {
  const client = await mongoUtils.conn();
  const products = await client
    .db(dataBase)
    .collection(COLLECTION_NAME)
    .find({})
    .toArray()
    .finally(() => client.close());
  return products;
}

async function insertProduct(product) {
  return mongoUtils.conn().then((client) => {
    return client
      .db(dataBase)
      .collection(COLLECTION_NAME)
      .insertOne(product)
      .finally(() => client.close());
  });
}

async function updateProduct(body, productoId) {
  return mongoUtils.conn().then((client) => {
    return client
      .db(dataBase)
      .collection(COLLECTION_NAME)
      .updateOne(
        {
          _id: ObjectId(productoId),
        },
        {
          $set: {
            name: body.name,
            price: body.price,
            quantity: body.quantity,
            category: body.category,
          },
        }
      )
      .finally(() => client.close());
  });
}

module.exports = [getProducts, insertProduct, updateProduct];
