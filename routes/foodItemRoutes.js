const express = require('express');
const foodItemController = require('../controllers/foodItemController')

const router = express.Router();

router.get('/', foodItemController.foodItem_index);
router.post('/', foodItemController.foodItem_add_item)
router.get('/add', foodItemController.foodItem_add_get)
router.get('/:id', foodItemController.foodItem_details)
router.delete('/:id', foodItemController.foodItem_delete)

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