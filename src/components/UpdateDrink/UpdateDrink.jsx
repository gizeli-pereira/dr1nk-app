import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDrink, updateDrink } from "../../utilities/drinks-api";
import * as drinksAPI from '../../utilities/drinks-api';
import { Button } from "@chakra-ui/react";
import { confirmAlert } from "react-confirm-alert";
import { useGetUserID } from "../../hooks/useGetUserID";


export default function UpdateDrink({ drinkOne, drinks, setDrinks, handleDelete, handleUpdate }) {
  const { userId } = useGetUserID();
  const { drinkId } = useParams();
  const navigate = useNavigate();

  // console.log(userId)


  const [drink, setDrink] = useState({...drinkOne})
  // console.log(drinkOne)

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDrink((prevDrink) => ({ ...prevDrink, [name]: value }));
  };

  return (
    <div className="update-drink">
      <h2>Edit this Drink here:</h2>
      {/* <p>{drink._id}</p> */}
      <form onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleUpdate(drinkId, {...drink, user: userId});
        }}
        >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={drink.name}
          placeholder={drink.name}
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          name="ingredients"
          value={drink.ingredients}
          onChange={handleChange}
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          name="instructions"
          id="instructions"
          value={drink.instructions}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={drink.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={drink.location}
          onChange={handleChange}
        />
        <Button type="submit">Submit Changes</Button>

      </form>
        <br />
      <Button onClick={() => handleDelete(drink._id)}>This delete is working!</Button>
    </div>
  );
}

