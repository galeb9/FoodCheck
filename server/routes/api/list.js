const express = require('express');
const FoodItem = require('../../models/foodItem')

const router = express.Router();

// get posts
router.get('/', async (req, res) => {
    FoodItem.find().sort({ createdAt: -1 })
        .then(data => {
            console.log(data)
            if(data) {
                res.send(data)
            }
        })
        .catch(err => console.log(err));
}) 

// add list item
router.post('/', (req, res) => {
    const newFoodItem = new FoodItem(req.body);
    newFoodItem.save()
    .then(data => {
        res.status(201).send();
    })
    .catch(err => console.log("error: ", err));

})

// delete list item
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(FoodItem)
    FoodItem.findByIdAndDelete(id)
        .then(data => {
            // res.json({ redirect: '/list'});
            res.status(201).send()
        })
        .catch(err => console.log(err));
})


module.exports = router;
