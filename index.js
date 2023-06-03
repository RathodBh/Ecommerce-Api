require("dotenv").config();
const app = require("express")();
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running ${process.env.URL}`)
})