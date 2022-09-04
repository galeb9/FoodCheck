const express = require('express');
const FoodItem = require('../models/foodItem');

const router = express.Router();


router.get('/', (req, res) => { // we get the list of our data (food items) and add it to .ejs
    FoodItem.find().sort({ createdAt: -1 })
        .then(data => {
            res.render('homeList', { title: 'Fridge list', list: data })
        })
        .catch(err => console.log(err))
});

router.post('/', (req, res) => {
    console.log(req.body)
    const newFoodItem = new FoodItem(req.body)

    newFoodItem.save()
        .then(data => {
            res.redirect('/list')
        })
        .catch(err => console.log("error: ", err))
})

// add new
router.get('/add', (req, res) => {
    res.render('addNew', { title: "Add new"})
})


// for each item
router.get('/:id', (req, res) => {
    const id = req.params.id
    FoodItem.findById(id)
        .then(data => {
            res.render('details', { item: data, title: data.name});
        })
        .catch(err => console.log(err));
})

// delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(FoodItem)
    FoodItem.findByIdAndDelete(id)
        .then(data => {
            res.json({ redirect: '/list'})
        })
        .catch(err => console.log(err)) 
})

// update
// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const item = FoodItem.findById(id)
//     console.log("Body: ", req.body)
//     Object.assign(item, req.body)

//     FoodItem.findByIdAndUpdate(id, req.body)
//         .catch(err => console.log("error: ", err))
// })


module.exports = router;