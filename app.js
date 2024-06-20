const express = require('express');
const homeRouter = require('./router/home')

const app = express();
app.use(homeRouter)
app.listen(8000,()=>{
    console.log("Server is listening on 8000");
})