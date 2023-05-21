const Drink = require('../../models/drink');
const User = require('../../models/user');

module.exports = {
    getAllDrinks,
    createDrink,
    deleteDrink
};

async function getAllDrinks(req, res) {
    try {
      const result = await Drink.find({});
      res.status(200).json(result);
      console.log('drinks', result)
    } catch (err) {
      res.status(500).json(err);
    }
  };

  async function createDrink(req, res) {
    try {
      const { name, ingredients, instructions, imageUrl, location } = req.body;
      const userId = req.user.id; // Assuming user authentication is implemented and user ID is available in the request
  
      // Create a new drink instance
      const newDrink = new Drink({
        name,
        ingredients,
        instructions,
        imageUrl,
        location,
        user: userId
      });
  
      // Save the drink to the database
      const savedDrink = await newDrink.save();
  
      res.status(201).json(savedDrink);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create drink' });
    }
  };

 async function deleteDrink(req, res) {
    try {
      const drinkId = req.params.id;
  
      // Find the drink by ID
      const drink = await Drink.findById(drinkId);
  
      if (!drink) {
        return res.status(404).json({ error: 'Drink not found' });
      }
  
      // Delete the drink
      await drink.remove();
  
      res.json({ message: 'Drink deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete drink' });
    }
  };