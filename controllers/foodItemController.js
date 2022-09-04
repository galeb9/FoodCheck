const FoodItem = require('../models/foodItem');

const foodItem_index = (req, res) => {
    FoodItem.find().sort({ createdAt: -1 })
    .then(data => {
        res.render('homeList', { title: 'Fridge list', list: data });
    })
    .catch(err => console.log(err));
}

const foodItem_details = (req, res) => {
    const id = req.params.id;
    FoodItem.findById(id)
        .then(data => {
            res.render('details', { item: data, title: data.name});
        })
        .catch(err => console.log(err));
}

const foodItem_add_get = (req, res) => {
    res.render('addNew', { title: "Add new"});
}

const foodItem_add_item = (req, res) => {
    const newFoodItem = new FoodItem(req.body);

    newFoodItem.save()
        .then(data => {
            res.redirect('/list');
        })
        .catch(err => console.log("error: ", err));
}

const foodItem_delete = (req, res) => {
    const id = req.params.id;
    console.log(FoodItem)
    FoodItem.findByIdAndDelete(id)
        .then(data => {
            res.json({ redirect: '/list'});
        })
        .catch(err => console.log(err));
}

module.exports = {
    foodItem_index,
    foodItem_details,
    foodItem_add_get,
    foodItem_add_item,
    foodItem_delete
}