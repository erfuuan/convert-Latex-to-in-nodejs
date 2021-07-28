const express=require("express")
const app=express()
var bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const text=require("./routes/text")
app.get("/",(req,res,next)=>{
    res.send("Live")
})

app.use('/text',text)
var port=3000
app.listen(port, () => console.log(`Devserver live on http://localhost:${port}`));
