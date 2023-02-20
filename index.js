// Adding express to the project
import express from 'express';
const app = express();

// initializing express
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})
app.get('/about',(req,res)=>{
    res.send('<h1>About us</h1>');
})


// Listens to requests from the client (browser)
app.listen(3000);

