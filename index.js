const express=require('express')

const app=express();

app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
 app.get('/contact',(req,res)=>{
    res.render('contact');
})
 app.get('/education',(req,res)=>{
     res.render('education');
})
 app.get('/experience',(req,res)=>{
     res.render('experience');
})
 app.get('/skills',(req,res)=>{
    res.render('skills');
 })
 app.get('/myProjects',(req,res)=>{
    res.render('myProjects')
})
app.listen(1500,()=>{
    console.log("Server running on port 1000............")
})