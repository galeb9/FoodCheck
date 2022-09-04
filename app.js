const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const FoodItem = require('./models/foodItem');
const { render } = require('ejs');

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

// mongooose and mongo sandbox routes


// for getting pages
app.get('/', (req, res) => {
    res.render('index', { title: "Home page" })
});


app.get('/list', (req, res) => { // we get the list of our data (food items) and add it to .ejs
    FoodItem.find().sort({ createdAt: -1 })
        .then(data => {
            res.render('homeList', { title: 'Fridge list', list: data })
        })
        .catch(err => console.log(err))
});

app.post('/list', (req, res) => {
    console.log(req.body)
    const newFoodItem = new FoodItem(req.body)

    newFoodItem.save()
        .then(data => {
            res.redirect('/list')
        })
        .catch(err => console.log("error: ", err))
})

// add new
app.get('/list/add', (req, res) => {
    res.render('addNew', { title: "Add new"})
})


// for each item
app.get('/list/:id', (req, res) => {
    const id = req.params.id
    FoodItem.findById(id)
        .then(data => {
            res.render('details', { item: data, title: data.name});
        })
        .catch(err => console.log(err));
})

// delete
app.delete('/list/:id', (req, res) => {
    const id = req.params.id;
    console.log(FoodItem)
    FoodItem.findByIdAndDelete(id)
        .then(data => {
            res.json({ redirect: '/list'})
        })
        .catch(err => console.log(err)) 
})

// update
// app.put('/list/:id', (req, res) => {
//     const id = req.params.id;
//     const item = FoodItem.findById(id)
//     console.log("Body: ", req.body)
//     Object.assign(item, req.body)

//     FoodItem.findByIdAndUpdate(id, req.body)
//         .catch(err => console.log("error: ", err))
// })




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

