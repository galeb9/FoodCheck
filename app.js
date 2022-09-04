const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const foodItemRoutes = require('./routes/foodItemRoutes')


// express app
const app = express()

// connect to mongoDB
const dbURI = "mongodb+srv://galeb9:ZnanjeJeMoc6@foodcheck.zbjtfcd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000) // so it loads if data
        console.log("connected to db")
    } )
    .catch(err => console.log(err))


// register view engine
app.set('view engine', 'ejs');
app.set('views', 'ejsPages'); // if you do not want to put in views (default) folder but in a custom one (ejsPages) 

// middleware & static files (images, styles)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true})) // for form data (puts in object -> name of input : value of input)
app.use(express.json());

// morgan middleware
app.use(morgan('dev'))






// for getting pages
app.get('/', (req, res) => {
    res.render('index', { title: "Home page" })
});

// food Item Routes (first parameter takes care of all /list)
app.use('/list', foodItemRoutes)


// not found
app.use((req, res) => {
    res.status(404).render('404', { title: 'Not found' })
});







// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', { root: __dirname })
// });

// app.get('/list', (req, res) => {
//     res.sendFile('./views/storeList.html', { root: __dirname })
// });

// redirect
// app.get('/store-list', (req, res) => {
//     res.redirect('/list')
// });

// app.get('/:notfound', (req, res) => {
//     res.sendFile('./views/404.html', { root: __dirname })
// });

