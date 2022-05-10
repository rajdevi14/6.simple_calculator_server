const {add}=require('./calculator')

//const { add, sub, mul, div } = require('./arithmetic.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

//app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())

app.get('/', (req,res)=>

{
res.send("hi");

});
app.post('/add', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = add(a, b);
    res.json({ result });
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server Started On PORT : " + PORT);
})