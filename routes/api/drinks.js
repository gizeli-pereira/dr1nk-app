const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', drinksCtrl.getAllDrinks);

router.post('/', ensureLoggedIn, drinksCtrl.createDrink);

router.get('/user', ensureLoggedIn, drinksCtrl.getUser);

router.get('/:id', ensureLoggedIn, drinksCtrl.getDrinkById);

router.put('/:id', ensureLoggedIn, drinksCtrl.updateDrink);

router.delete('/:id', ensureLoggedIn, drinksCtrl.deleteDrink);



// router.get('/:id/edit', ensureLoggedIn, drinksCtrl.edit);

// router.get('/:id', drinksCtrl.show);

module.exports = router;