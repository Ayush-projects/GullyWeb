const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const Main = require('./Routes/Main.js')


app.set("view engine", "ejs")
app.use(express.json())



app.use("/assets", express.static("public/assets"))
app.use("/", Main)



a()

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Server is running on port:", PORT)
    }
})