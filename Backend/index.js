const express = require("express");
const app = express();
const { dbconnect } = require("./DB/connect.js");
const { User } = require("./DB/Models/user.js");
const cors = require("cors");

app.use(cors());

dbconnect();

app.get('/', async (req, res) => {
    const user = {
        email: "srivastavarishabh2001@gmail.com",
        password: "1234"
    }

    const findUser = await User.findOne(user);
    
    
    if(!findUser) new User(user).save();

    return res.sendFile("r:/Refactoring/Cohort1.0/Week-9/Backend/index.html");
})

app.listen(4000);