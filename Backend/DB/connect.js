const mongoose = require("mongoose");

dbconnect = async () => {
    await mongoose.connect("mongodb+srv://srivastavarishabh2001:Rishabhmongodb@cluster0.dcb6dz4.mongodb.net/", {dbName: "Week-9-Backend-deployment"});
}

dbconnect()
.then(() => {
    console.log("Database connected successfully!");
})
.catch(err => {
    console.log(err);
})

module.exports = { dbconnect };