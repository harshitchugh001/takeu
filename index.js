const express = require('express');
const cors = require('cors'); 
const port = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors());

app.use(express.json());


let bannerData = {
    description: '',
    link: '',
    timer: 0,
    isVisible: false,
};

// Fetch banner data
app.get('/api/banner', (req, res) => {
    res.json(bannerData);
});

// Update banner data
app.post('/api/banner/update', (req, res) => {
    const { description, link, timer, isVisible } = req.body;
    bannerData = { description, link, timer, isVisible };
    res.json({ message: 'Banner updated successfully', bannerData });
});

// Set banner timer
app.post('/api/banner/timer', (req, res) => {
    const { timer } = req.body;
    bannerData.timer = timer;
    res.json({ message: 'Timer updated successfully', timer });
});

// Toggle banner visibility
app.post('/api/banner/visibility', (req, res) => {
    const { isVisible } = req.body;
    bannerData.isVisible = isVisible;
    res.json({ message: 'Visibility updated successfully', isVisible });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});