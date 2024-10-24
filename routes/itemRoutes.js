const express = require('express');
const { getAllItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/itemController');

const router = express.Router();

// Route to get all items
router.get('/', getAllItems);

// Route to get a single item by ID
router.get('/:id', getItem);

// Route to create a new item
router.post('/', createItem);

// Route to update an item by ID
router.put('/:id', updateItem);

// Route to delete an item by ID
router.delete('/:id', deleteItem);

module.exports = router;
