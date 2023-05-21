import ShowDrinkList from '../../components/ShowDrinkList/ShowDrinkList';
import { useState, useEffect } from 'react';
import { useGetUserID } from '../../hooks/useGetUserID';
import * as drinksAPI from '../../utilities/drinks-api';



export default function DrinkListPage() {
  const [drinks, setDrinks] = useState([]);
  const [savedDrinks, setSavedDrinks] = useState([]);

  const userID = useGetUserID();


  useEffect(() => {
    async function fetchDrinks() {
      try {
        const data = await drinksAPI.getDrinks();
        setDrinks(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDrinks();
  }, []);

  const handleDelete = async (drinkId) => {
    try {
      await drinksAPI.deleteDrink(drinkId);
      setDrinks(drinks.filter((drink) => drink._id !== drinkId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (drinkId, updatedDrink) => {
    try {
      await drinksAPI.updateDrink(drinkId, updatedDrink);
      setDrinks((prevDrinks) =>
        prevDrinks.map((drink) =>
          drink._id === drinkId ? { ...drink, ...updatedDrink } : drink
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <ShowDrinkList drinks={drinks} userID={userID} handleDelete={handleDelete}
        handleUpdate={handleUpdate}
/>
    </>
  );
}