import ShowDrinkList from '../../components/ShowDrinkList/ShowDrinkList';
import { useState, useEffect } from 'react';
import { useGetUserID } from '../../hooks/useGetUserID';
import * as drinksAPI from '../../utilities/drinks-api';
import ShowListTest from '../../components/ShowDrinkList/ShowListTest';
import UpdateDrink from '../../components/UpdateDrink/UpdateDrink';



export default function DrinkListPage({ user }) {
  const [drinks, setDrinks] = useState([]);

  const userID = useGetUserID();
  const fetchDrinks = async () => {
      try {
        const data = await drinksAPI.getDrinks();
        setDrinks(data);
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    if (drinks.length === 0) {
      fetchDrinks();
    }
  }, [drinks, fetchDrinks]);

  const handleDelete = async (drinkId) => {
    try {
      await drinksAPI.deleteDrink(drinkId);
      setDrinks(drinks.filter((drink) => drink._id !== drinkId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (drinkId, payload) => {
    try {
      await drinksAPI.updateDrink(drinkId, {...payload});
      setDrinks((prevDrinks) =>
        prevDrinks.map((drink) =>
          drink._id === drinkId ? { ...drink } : drink
        )
      );
      console.log(drinkId)
      fetchDrinks()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {drinks.map((drink, i) => {
      return (
        <ShowListTest user={user} setDrinks={setDrinks} 
        drink={drink} handleUpdate={handleUpdate} 
        handleDelete={handleDelete} key={i}/>
        
      )
    })}
    </>
  );
}