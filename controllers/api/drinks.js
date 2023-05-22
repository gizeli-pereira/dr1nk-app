const Drink = require('../../models/drink');
const User = require('../../models/user');

module.exports = {
    getAllDrinks,
    createDrink,
    deleteDrink,
    getDrinkById,
    updateDrink
};

async function getAllDrinks(req, res) {
    try {
        const drinks = await Drink.find().populate('user');
        res.json(drinks);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve drinks' });
      }
  };

// Controller function to create a drink
async function createDrink(req, res) {
    try {
      const { name, ingredients, instructions, imageUrl, location } = req.body;
      const userId = req.user._id;

      const newDrink = new Drink({
        name,
        ingredients,
        instructions,
        imageUrl,
        location,
        user: userId
      });
  
      const savedDrink = await newDrink.save();
  
      res.status(201).json(savedDrink);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create drink' });
    }
  };

 // Controller function to delete a drink
async function deleteDrink(req, res) {
    try {
      const drinkId = req.params.id;
  
      // Find the drink by ID
      const drink = await Drink.findByIdAndDelete(drinkId);
  
      if (!drink) {
        return res.status(404).json({ error: 'Drink not found' });
      }
  
      res.json({ message: 'Drink deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete drink' });
    }
};

// Controller function to get a drink by ID
async function getDrinkById(req, res) {
  try {
    const drinkId = req.params.id;

    const drink = await Drink.findById(drinkId).populate('user');

    if (!drink) {
      return res.status(404).json({ error: 'Drink not found' });
    }

    res.json(drink);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get drink' });
  }
}

// Controller function to update a drink
async function updateDrink(req, res) {
    // console.log("req", req.body)
    try {
        
      const { name, ingredients, instructions, imageUrl, location, _id } = req.body;
      const drinkId = _id;
        // console.log("drinkId", drinkId); 
      // Find the drink by ID"
      const drink = await Drink.findByIdAndUpdate(drinkId, {
        name, 
        ingredients,
        instructions,
        imageUrl,
        location,
      }, {new: true});
      // console.log('drink', drink)
      if (!drink) {
        return res.status(404).json({ error: 'Drink not found' });
      }
  
      res.json(drink);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update drink' });
    }
  };