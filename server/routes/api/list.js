const express = require('express');
const foodItemController = require('../../controllers/foodItemController')
const router = express.Router();

// get food items
router.get('/', foodItemController.get_all);

// add new food item
router.post('/', foodItemController.add_new_food)

// get single food item
router.post('/:id', foodItemController.get_by_id)

// delete food item
router.delete('/:id', foodItemController.delete_by_id)


module.exports = router;
