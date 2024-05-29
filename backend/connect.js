// const mongoose = require("mongoose");

// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb://19pradeepkumarpk:Student@123@cluster0.ngmax4u.mongodb.net/e-commerce"
//     );
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// module.exports = connectToDatabase;

const mongoose = require("mongoose");
const mongoURI =
  "mongodb://me:pradeep@ac-o1t8upk-shard-00-00.xlhw79w.mongodb.net:27017,ac-o1t8upk-shard-00-01.xlhw79w.mongodb.net:27017,ac-o1t8upk-shard-00-02.xlhw79w.mongodb.net:27017/?replicaSet=atlas-mqeotn-shard-0&ssl=true&authSource=admin";

const connect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connect;
