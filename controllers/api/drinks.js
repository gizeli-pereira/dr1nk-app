const Drink = require('../../models/drink');
const User = require('../../models/user');

module.exports = {
    getAllDrinks,
    create
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

async function create(req, res){
    const drink = new Drink({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      image: req.body.image,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      imageUrl: req.body.imageUrl,
      user: req.body.user,
    });
    console.log(drink);
  
    try {
      const result = await drink.save();
      res.status(201).json({
        createdDrink: {
          name: result.name,
          image: result.image,
          ingredients: result.ingredients,
          instructions: result.instructions,
          _id: result._id,
        },
      });
    } catch (err) {
      res.status(500).json(err);
    }
};