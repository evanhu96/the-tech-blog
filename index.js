const express = require("express")
const app = express()

PORT = 5000

app.get('/',(req,res)=>{
    res.json({
        hey:"guys",
        welcome:"back"
    })
})

app.listen(PORT)