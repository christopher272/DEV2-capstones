const express = require('express');
const ingredientRouter = express.Router();
const Ingredient = require('../model/ingredient');


ingredientRouter.get('/', async (req, res, next) => {
    console.log(`we tried`)
    try {
        const ingredients = await Ingredient.find()
        return res.status(200).send(ingredients);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

ingredientRouter.post('/', async (req, res, next) => {
    try {
        const newIngredient = await Ingredient.create(req.body);
        const savedIngredients = await newIngredient.save();
        return res.status(201).send(savedIngredients);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

ingredientRouter.delete('/:ingredientId', async (req, res, next) => {
    try {
        const ingredientId = req.params.ingredientId;
        const deletedIngredient = await Ingredient.findByIdAndDelete(ingredientId);
        return res.status(200).send(`deleted ${deletedIngredient.name}`);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

ingredientRouter.put('/:ingredientId', async (req, res, next) => {
    try {
        const ingredientId = req.params.ingredientId;
        const updatedIngredient = await Ingredient.findByIdAndUpdate(ingredientId, req.body, { new: true });
        return res.status(200).send(updatedIngredient);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

ingredientRouter.get('/ingredients', async (req, res, next) => {
    try {
        const ingredients = await Ingredient.find()
        return res.status(200).send(ingredients);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

ingredientRouter.post('/ingredients', async (req, res, next) => {
    try {
        const newIngredient = await Ingredient.create(req.body);
        const savedIngredients = await newIngredient.save();
        return res.status(201).send(savedIngredients);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

ingredientRouter.delete('/ingredients/:ingredientId', async (req, res, next) => {
    try {
        const ingredientId = req.params.ingredientId;
        const deletedIngredient = await Ingredient.findByIdAndDelete(ingredientId);
        return res.status(200).send(`deleted ${deletedIngredient.name}`);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});

ingredientRouter.put('/ingredients/:ingredientId', async (req, res, next) => {
    try {
        const ingredientId = req.params.ingredientId;
        const updatedIngredient = await Ingredient.findByIdAndUpdate(ingredientId, req.body, { new: true });
        return res.status(200).send(updatedIngredient);
    } catch (err) {
        res.status(500)
        return next(err);
    }
});
module.exports = ingredientRouter;