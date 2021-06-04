//https://bootstrapmade.com/demo/MyResume/
//https://bootstrapmade.com/demo/Kelly/


const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const port = process.env.PORT || 5000;
var urlencodedParser = bodyparser.urlencoded({ extended: false })


// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
  });

const Contact = mongoose.model('Contact', contactSchema);



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
app.get('/about', (req, res)=>{ 
    const params = { }
    res.status(200).render('about.pug', params);
})
app.get('/resume', (req, res)=>{ 
    const params = { }
    res.status(200).render('resume.pug', params);
})

app.get('/portfolio', (req, res)=>{ 
    const params = { }
    res.status(200).render('portfolio.pug', params);
})

app.get('/contact', (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
})

app.post('/contact', urlencodedParser,  (req, res)=>{ 
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.render('contact_success', {data: req.body});
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
    //res.status(200).render('contact.pug');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});




