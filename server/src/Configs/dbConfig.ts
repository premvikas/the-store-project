require("dotenv").config();
console.log("process.env.MONGO_ENV", process.env.MONGO_ENV);
export const dbURI = `mongodb://${process.env.MONGO_ENV}:27017/local`;