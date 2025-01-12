const express = require('express');
const router = express.Router();
const Media = require('../models/Media');

// Add a new media item
router.post('/', async (req, res) => {
    const { title, type, url, isHorizontal } = req.body;

    const newMedia = new Media({
        title,
        type,
        url,
        isHorizontal,
    });

    try {
        const savedMedia = await newMedia.save();
        console.log("added new media");
        res.status(201).json(savedMedia);
    } catch (err) {
        res.status(500).json({ error: 'Failed to save media'});
    }
});

// Get all media items
router.get('/', async (req, res) => {
    try {
        const media = await Media.find();
        console.log("retrieved all media");
        res.status(200).json(media);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch media'});
    }
});

// Delete a media item
router.delete('/:id', async (req, res) => {
    try {
        await Media.findByIdAndDelete(req.params.id);
        console.log("deleted media");
        res.status(200).json({ message: 'Media deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete media'});
    }
});

module.exports = router;