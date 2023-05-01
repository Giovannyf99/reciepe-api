var express = require('express');
var router = express.Router();
const fs = require('fs')

const RECIPE_FILE = './api.json';

router.get('/', function(req, res, next) {
    fs.readFile(RECIPE_FILE, 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file');
            return;
        }
        res.json(JSON.parse(data));
    })
  
});

router.get('/:id', (req, res) => {
    fs.readFile(RECIPE_FILE, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file');
            return;
        }
        const recipes = JSON.parse(data)
        const recipe = recipes.find(recipe => parseInt(recipe.id) === parseInt(req.params.id));
        if (!recipe) {
            res.status(404).send('Name  found')
            return;
        }
        res.json(recipe)
    })
})




module.exports = router;
