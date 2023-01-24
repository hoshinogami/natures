//const fs = require('fs');
const express = require('express');
const morgan =require('morgan');
//导入路由操作
const tourRouter=require('./routes/tourRoutes');
const userRouter=require('./routes/userRoutes');

const app = express();
const tours=JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

//接收请求
app.get('/api/v1/tour',(req, res) => {
  res.status(200).json({data:tours});
})




const port =3000

app.listen(port,()=>{
  console.log("is running...")
});