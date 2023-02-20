// Adding express to the project
import express from 'express';
const app = express();

// initializing express
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.listen(3000);

