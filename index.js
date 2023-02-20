// Adding express to the project

const express = require ('express');
const app = express();

// initializing express
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>');
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About us</h1>');
// })

// Dealing with html files and basic routing
app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
})
app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
})
// redirects in express
app.get('/about-me',(req,res)=>{
    res.redirect('/about');
})
// default to 404
app.use((req, res)=>{
    res.sendFile('./views/404.html',{root:__dirname});
})

// Listens to requests from the client (browser)
app.listen(3000);

