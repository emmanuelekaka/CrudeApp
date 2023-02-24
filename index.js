// Adding express to the project

const express = require ('express');
const app = express();

// Setting a template engine to ejs
app.set('view engine', 'ejs');
// Below code is automatic unless if you want a custome name like myviews then u set the second parameter
// app.set('views', 'views');

// initializing express
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>');
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About us</h1>');
// })

// Dealing with html files and basic routing
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.get('/register',(req,res)=>{
    res.render('register');
})
app.get('/create',(req,res)=>{
    res.render('create');
})
// redirects in express
// app.get('/about-me',(req,res)=>{
//     res.redirect('/about');
// })
// default to 404
app.use((req, res)=>{
    res.status(404).render('404');
})

// Listens to requests from the client (browser)
app.listen(3000);

