const FoodItem = require('../models/foodItem')

// get
const get_all = async (req, res) => {
    FoodItem.find().sort({ createdAt: -1 })
    .then(data => {
        console.log(data)
        if(data) {
            res.send(data)
        }
    })
    .catch(err => console.log(err));
}

// post
const add_new_food = (req, res) => {
    const newFoodItem = new FoodItem(req.body);
    newFoodItem.save()
    .then(data => {
        res.status(201).send();
    })
    .catch(err => console.log("error: ", err));
}

// get single
const get_by_id = (req, res) => {
    const id = req.params.id;
    FoodItem.findById(id)
        .then(data => {
            res.status(201).send()
        })
}   

// delete
const delete_by_id = (req, res) => {
    const id = req.params.id;
    console.log(FoodItem)
    FoodItem.findByIdAndDelete(id)
        .then(data => {
            // res.json({ redirect: '/list'});
            res.status(201).send()
        })
        .catch(err => console.log(err));
}

module.exports = {
    get_all,
    add_new_food,
    get_by_id,
    delete_by_id
}