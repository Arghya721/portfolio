//https://bootstrapmade.com/demo/MyResume/
//https://bootstrapmade.com/demo/Kelly/


const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//Express Specific stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//PUG Specific Stuff
app.set('view engine', 'pug') //Set the template engine as pug
app.set('views',path.join(__dirname,'views')) //Set the views directory

app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug', params);
})




// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});