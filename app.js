const express = require ("express");
const app = express();
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const Sign = require('./models/signup');


// connect to database
const dbUI ='mongodb+srv://Bafana:Bmhlahlo@rent.mgc3i.mongodb.net/Rent?retryWrites=true&w=majority';
mongoose.connect(dbUI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => app.listen(3000))  //console.log('connected to db'))
 .catch((err) => {
     console.log(err);})
const name = require ("lodash");
// express app

// listen for requests
app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));


app.use (morgan('tiny'));
app.get('/home',(req,res) => {
    res.render('index');
});
app.get('/', (req,res) => {
    res.redirect('/home');
});
app.get('/about',(req,res) => {
    
    res.render('about');

});
app.get('/login',(req,res) => {
    res.render('login');
});
app.get('/about us', (req,res) => { 
    res.redirect('/about');
});
app.get('about%20us', (req,res) => { 
    res.redirect('/about');
});
app.get('/about-us',(req,res) => {
    res.redirect('/about');

});
app.get('/contact',(req,res) => {
    res.render('contact');

});
app.get('/contact%20us',(req,res) => {
    res.redirect('/contact');
});
app.get('/rent',(req,res) => {
    res.render('index');

});
/*app.get('/12',(req,res) => {
    res.sendFile('./login.pug', {root:__dirname});

});*/
app.post('/signup', (res,req) =>{
    const signup = new Signup(req.body);

    signup.save()
     //.then((result) => )
    // console.log(req.body);
})
app.get('/signup',(req,res) => {
    res.render('signup');

});
app.use((req,res) => {
    res.status(404).render('404');
});