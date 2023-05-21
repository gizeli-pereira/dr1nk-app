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

  console.log(userId)

//   const [drink, setDrink] = useState({
//     name: '',
//     ingredients: "",
//     instructions: "",
//     imageUrl: "",
//     location: "",
//   });

    const [drink, setDrink] = useState({...drinkOne})

    

    console.log(drinkOne)
    // console.log(testone)


    // console.log(drinks)

//   useEffect(() => {
//     const fetchDrink = async () => {
//       try {
//         const fetchedDrink = await getDrink(drinkId);
//         console.log(drinkId)
//         setDrink(fetchedDrink);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchDrink();
//   }, [drinkId]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDrink((prevDrink) => ({ ...prevDrink, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await updateDrink(drinkId, drink);
      navigate("/drinks");
    } catch (error) {
      console.error(error);
    }
  };

  // const handleUpdate = async (drinkId) => {
  //   try {
  //     await drinksAPI.updateDrink(drinkId, {...drink, user: userId});
  //     setDrinks((prevDrinks) =>
  //       prevDrinks.map((drink) =>
  //         drink._id === drinkId ? { ...drink } : drink
  //       )
  //     );
  //     console.log(drinkId)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

//   const handleDelete = async (drinkId) => {
//     console.log('delete drinkId', drinkId)
//     try {
//       await drinksAPI.deleteDrink(drinkId);
//       console.log(drinkId)
//       setDrinks(drinks.filter((drink) => drink._id !== drinkId));
//     } catch (error) {
//       console.error(error);
//     }
//   };

const handleDeleteTwo = async (drinkId) => {
    try {
      const response = await fetch(`${drinksAPI}/${drinkId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(drinkId)
      if (response.ok) {
        // Display a success message or perform any additional actions
        console.log('Drink deleted successfully.');
        // You might also consider updating the drink list after deletion
      } else {
        // Display an error message if the deletion failed
        console.log('Failed to delete the drink.');
      }
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.log('An error occurred while deleting the drink:', error);
    }
  };

  

  return (
    <div className="update-drink">
      <h2>Update Drink</h2>
      <p>{drink._id}</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleUpdate(drinkId, {...drink, user: userId});
        }}
        >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={drink.name}
          placeholder={drink.name}
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
        <button type="submit">Update Drink</button>

      </form>

      <Button onClick={() => handleDeleteTwo(drink._id)}>Delete</Button>
    </div>
  );
}

