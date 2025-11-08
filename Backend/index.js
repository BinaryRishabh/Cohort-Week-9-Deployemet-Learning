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

    res.send("<h1>Hello</h1>");
})

app.get('/name', (req, res) => {
    res.send(`
        <h1> I love you Glory. And 2 days to go for your birthday. </h1>
        <p> How are feeling? Are you excited! </p>
    `);
});

app.listen(4000);