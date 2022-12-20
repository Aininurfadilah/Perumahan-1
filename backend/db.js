const mongoose = require ("mongoose");

var mongoURL= "mongodb+srv://AgusTri43:AgusTri43@cluster0.rarukzt.mongodb.net/Perum"

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Sucess");
});

module.exports = mongoose;