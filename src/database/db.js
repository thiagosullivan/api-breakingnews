const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
