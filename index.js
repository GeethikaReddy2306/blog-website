const express=require('express');
const app=express();
const port=3000;
const path = require("path");
app.set('view engine', 'ejs');
app.set( "views",path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
let post=[{
        name:'geethika',
        post:'i am a full stack developer',
        id:1
},
{
        name:'kavya',
        post:'i am an influncer',
        id:2
},
{
        name:'rakesh',
        post:'i am a  editor',
        id:3
}
]
app.get('/',(req,res)=>{
        res.render('index',{post})
})

app.get('/posts',(req,res)=>{
       
       res.render('newpost',{post})
})
app.post('/posts',(req,res)=>{
         const { name, content } = req.body;
         const newPost = {
        name: name,
        post: content,
        id: post.length + 1
    };

    post.push(newPost);
      
        res.redirect('/')
})
app.get('/viewpost:/id',(req,res)=>{
        res.render('fullpost',{post})
        
})
app.listen(port,()=>{
        console.log("port is listning")
});