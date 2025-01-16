const express = require('express');
const router = express.Router();
const Information = require('../models/Information');

// Add new info item
router.post('/', async (req, res) => {
    const { type, p1, p2 } = req.body;
   
    const newInfo = new Information({
        type,
        p1,
        p2,
    });

    try {
        const savedInfo = await newInfo.save();
        console.log("added new info");
        res.status(201).json(savedInfo);
    } catch (err) {
        res.status(500).json({ error: 'Failed to save info'});
    }
});

// Get all information items of certain type
router.get('/type/:type', async (req, res) => {
    const { type } = req.params;

    try {
        const info = await Information.find({ type });
        console.log("Retrieved all information");
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json({err: 'Failed to fetch media of the specified type'});
    }
});

// Delete a Information item
router.delete('/:id', async (req, res) => {
    try {
        await Information.findByIdAndDelete(req.params.id);
        console.log("deleted Information");
        res.status(200).json({ message: 'Information deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete media'});
    }
})

module.exports = router;