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

// Get all information items
router.get('/', async (req, res) => {
    try {
        const info = await Information.find();
        console.log("retrieved all information");
    } catch (err) {
        res.status(500).json({err})
    }
});