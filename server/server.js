const express=require('express');
const app=express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json())
//This is an express server
app.listen(5000,()=>{
    console.log('Server listening on port 5000...')
});
app.use(express.json());
app.post('/add',(req,res)=>{
    const { a, b} = req.body || {}
    res.send({ sum: a + b})
    console.log(a+b)
});

app.post('/sub',(req,res)=>{
    const { a, b }=req.body || {}
    res.send({dif: a - b })
});

app.post('/mul',(req,res)=>{
    const { a, b }=req.body || {}
    res.send({product: a*b})
});

app.post('/div',(req,res)=>{
    const {a,b}=req.body || {}
    res.send({quotient: a/b})
});

app.get('/sqr/:num',(req,res)=>{
    const k=req.params.num;
    res.send({square: k*k});
})