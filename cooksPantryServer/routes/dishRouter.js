const express = require('express');
const dishRouter = express.Router();
const Dish = require('../model/dish');


dishRouter.get('/', async (req, res, next) => {
    try {
        const dishes = await Dish.find()
        return res.status(200).send(dishes);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

dishRouter.post('/', async (req, res, next) => {
    try {
        const newdish = await Dish.create(req.body);
        const saveddishes = await newdish.save();
        return res.status(201).send(saveddishes);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

dishRouter.delete('/:dishId', async (req, res, next) => {
    try {
        const dishId = req.params.dishId;
        const deleteddish = await Dish.findByIdAndDelete(dishId);
        return res.status(200).send(`deleted ${deleteddish.name}`);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

dishRouter.put('/:dishId', async (req, res, next) => {
    try {
        const dishId = req.params.dishId;
        const updateddish = await Dish.findByIdAndUpdate(dishId, req.body, { new: true });
        return res.status(200).send(updateddish);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

dishRouter.get('/dishes', async (req, res, next) => {
    console.log(`we tried`)
    try {
        const dishes = await Dish.find()
        return res.status(200).send(dishes);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

dishRouter.post('/dishes', async (req, res, next) => {
    try {
        const newdish = await Dish.create(req.body);
        const saveddishes = await newdish.save();
        return res.status(201).send(saveddishes);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

dishRouter.put('/dishes/:dishId', async (req, res, next) => {
    try {
        const dishId = req.params.dishId;
        const updateddish = await Dish.findByIdAndUpdate(dishId, req.body, { new: true });
        return res.status(200).send(updateddish);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});



module.exports = dishRouter;