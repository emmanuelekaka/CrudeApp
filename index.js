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
app.use((req,res)=>{
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
});

// Dealing with html files and basic routing
app.get('/',(req,res)=>{
    const blogs = [
        {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
        {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
        {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
        {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
    ]
    res.render('index',{title:'Home Page', blogs});
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'});
})
app.get('/login',(req,res)=>{
    res.render('login',{title:'Login Page'});
})
app.get('/register',(req,res)=>{
    res.render('register',{title:'Register Page'});
})
app.get('/create',(req,res)=>{
    res.render('create',{title:'Create Blog Page'});
})
// redirects in express
// app.get('/about-me',(req,res)=>{
//     res.redirect('/about');
// })
// default to 404
app.use((req, res)=>{
    res.status(404).render('404',{title:'404 Page'});
})

// Listens to requests from the client (browser)
app.listen(3000);

