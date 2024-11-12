// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Sample API routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Sample data store (replace with a database in production)
let items = [];

// CRUD endpoints
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/api/items', (req, res) => {
    res.json(items);
});

app.put('/api/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    items = items.map(item => 
        item.id === id ? updatedItem : item
    );
    res.json(updatedItem);
});

app.delete('/api/items/:id', (req, res) => {
    const id = req.params.id;
    items = items.filter(item => item.id !== id);
    res.status(204).send();
});

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});