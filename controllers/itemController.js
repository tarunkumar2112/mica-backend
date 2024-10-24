let items = [];  // This is the in-memory "database" for now
let idCounter = 1;  // Simple way to assign unique IDs

// Get all items
const getAllItems = (req, res) => {
    res.json(items);
};

// Get a single item by ID
const getItem = (req, res) => {
    const { id } = req.params;
    const item = items.find(item => item.id === parseInt(id));

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
};

// Create a new item
const createItem = (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }

    const newItem = {
        id: idCounter++,
        name,
        description
    };

    items.push(newItem);
    res.status(201).json(newItem);
};

// Update an existing item
const updateItem = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    const itemIndex = items.findIndex(item => item.id === parseInt(id));

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    if (name) items[itemIndex].name = name;
    if (description) items[itemIndex].description = description;

    res.json(items[itemIndex]);
};

// Delete an item
const deleteItem = (req, res) => {
    const { id } = req.params;
    const itemIndex = items.findIndex(item => item.id === parseInt(id));

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    items.splice(itemIndex, 1);
    res.status(204).send();  // No content response
};

module.exports = {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
};
