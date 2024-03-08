require ("dotenv").config();
const express=require('express');
const cors=require('cors');
require("./conn")
const router=require("./routes/router")

const app=express();
const PORT=4002;


app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT , ()=>{
    console.log("server startted");
})

