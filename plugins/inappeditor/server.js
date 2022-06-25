const express = require("express")
const app = express()

app.use(express.static('app'))
app.get("/", (req, res) => { return res.send("hello") })
app.listen(3001, () => {
    console.log("Editor is available at 3001")
})