const express = require('express');
const crystalsData = require('./crystals.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ data: 'Service is running!'});
});

app.get('/crystals', (req, res) => {
    try {
        
        res.status(200).json({ data: crystalsData });
    } catch (err){
        res.status(500).json({ error: err.message })
    };
});

app.get('/crystals/:id', (req, res) => {
    try {
        const { id } = req.params;

        const crystal = crystalsData.find((crystal) => crystal.id === id);

        if(crystal){
          res.status(200).json({ data: crystal })
        }else{
            res.status(404).json({error: `No crystal found with Id ${id}`})
        }

    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

module.exports = app;