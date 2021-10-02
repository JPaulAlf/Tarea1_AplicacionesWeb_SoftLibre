var jsonTexto= {"status":"ok"};

const express = require ('express');
const app= express();
app.use(express.json());

app.listen (3000,()=>{
    console.log('Server on port 3000');
});

app.get('/',(req, res)=>{
    res.json(jsonTexto);
});