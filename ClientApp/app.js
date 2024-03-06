const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const public = path.join(__dirname,'public');

app.use(express.static(public));
app.use(cors({
    origin:"*"
}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(public,"index.html"));
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})