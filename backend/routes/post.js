const express = require('express');
const db = require('../database/index');
const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

router.get('/:id', async (req, res, next) => {

    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

router.put('/:id', async (req, res, next) => {

    try {
        let results = await db.updateOne(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

router.delete('/:id', async (req, res, next) => {

    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

router.post('/', async (req, res, next) => {

    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

module.exports = router;