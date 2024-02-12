const axios=require('axios')
const fs=require('fs');

var arr=[];

//client request for addition
axios('http://localhost:5000/add', {
    method: 'POST',
    data: {
        a: 1,
        b: 17,
    }
})
    .then((res) => {
        console.log(res.data)
    });

//client request for subtraction
axios('http://localhost:5000/sub', {
    method: 'POST',
    data: {
        a:45,
        b: 21
    }
})
    .then((res) =>{
        console.log(res.data)
    });

//client request for multiplication
axios('http://localhost:5000/mul',{
    method: 'POST',
    data: {
        a:23,
        b:11
    }
})
    .then((res)=>{
        console.log(res.data)
    });
//client request for division operation
axios({
    method: 'POST',
    url: 'http://localhost:5000/div',
    data: {
        a: 18,
        b: 9
    }
})
    .then((res)=>{
        console.log(res.data)
    });
//client request for squaring a number
axios.get('http://localhost:5000/sqr/12')
    .then((res)=>{
        console.log(res.data)
    });
