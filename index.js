// Adding express to the project

const express = require ('express');
const app = express();
const mongoose = require ('mongoose')
const Post = require('./models/posts')

// conection to mongodb
const uri = 'mongodb://localhost:27017/crude';

// Testing for connection
if(mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true})){
    console.log("db connection success");
    app.listen(3000);

};


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
// app.use((req,res, next)=>{
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.method);
//     next();
// });

// Middle ware and static files.
app.use(express.static('public'));
// Parsing data through urls to the database
app.use(express.urlencoded({extended:true}));

// Dealing with html files and basic routing
app.get('/',async(req,res)=>{
    // const blogs = [
    //     {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
    //     {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
    //     {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
    //     {title:'Power of the mind', body:'Where your mind can lead you when you use it right'},
    // ]
    const blogs = await Post.find().sort({createdAt:-1});
    res.render('index',{title:'Home Page', blogs});
})

// adding post manually
app.get('/add-post',async(req,res)=>{
    const post = new Post({
        title:"Abra Cadabra",
        body:"Magical book on how to use the magic wand"
    });
    try{
        await post.save();
        res.send(post);

    }catch{
        (err)=>{
            console.log(err);
        }
    }
    
   
});
app.get('/getposts',async(req,res)=>{
    const items = await Post.find().sort({createdAt:-1});
    res.send(items);    
    
})

// app.post('/addpost',async(req,res)=>{
//     const items = await Post.findById()
//     res.send(items);    
    
// })
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
// posting data to the server
app.post('/create',async (req,res)=>{
    const postcreate = new Post(req.body);
    try{
        await postcreate.save();
        res.redirect('/');

    }catch{
        (err)=>{
            console.log(err);
        }
    }
    
    
})
// getting single post
app.get('/:id',async(req,res)=>{
    // same name with what was passed in the request
    const id = req.params.id
    const item = await Post.findById(id)
    res.render('single',{title:'Single item',item}); 
    
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



