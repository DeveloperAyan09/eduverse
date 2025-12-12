const mongoose = require("mongoose");

const connectDB = async () => {

  try {
    let conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`DB CONNECTION SUCCESS: ${conn.connection.name}`);
  } catch (error) {
    console.error(`DB CONNECTION FAILED: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
