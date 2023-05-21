import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createDrink } from "../../utilities/drinks-api";

export default function AddDrinkForm() {
  const [drink, setDrink] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDrink({ ...drink, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await createDrink(drink); // Call the createDrink function from drinks-api.js

      navigate("/drinks"); // Redirect to the home page after successful creation
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-drink">
      <h2>Add a Drink</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={drink.name}
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          name="ingredients"
          value={drink.ingredients}
          onChange={handleChange}
        />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          value={drink.instructions}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={drink.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={drink.location}
          onChange={handleChange}
        />
        <button type="submit">Add Drink</button>
      </form>
    </div>
  );
}
         