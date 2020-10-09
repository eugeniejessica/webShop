const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const indexRouter = require("./routes/index")
// const usersRouter = require("./routes/users")

const app= express();

app.set("views", path.join(__dirname, "views")  )
app.set("view engine", "ejs")


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/", indexRouter);
// app.use("/users", usersRouter);





app.listen(3000, function(){
    console.log("Server open port 3000")
});