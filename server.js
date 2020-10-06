const express = require('express');
const connectDB = require('./config/db');

const app=express();
//connect Database
connectDB();

//init Middelware
app.use(express.json({extened:false}));

const PORT = process.env.PORT||5000;

app.get('/',(req,res)=>res.send('Api Running'));


// Define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));



app.listen(PORT,()=>{console.log(`Server started on Port ${PORT}`)});