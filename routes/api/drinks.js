const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', drinksCtrl.getAllDrinks);

router.post('/', ensureLoggedIn, drinksCtrl.create);

// router.get('/new', ensureLoggedIn, drinksCtrl.new);

// router.delete('/:id', ensureLoggedIn, drinksCtrl.delete);

// router.put('/:id', ensureLoggedIn, drinksCtrl.update);


// router.get('/:id/edit', ensureLoggedIn, drinksCtrl.edit);

// router.get('/:id', drinksCtrl.show);

module.exports = router;