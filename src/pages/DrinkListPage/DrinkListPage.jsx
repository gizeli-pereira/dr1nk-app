import ShowDrinkList from '../../components/ShowDrinkList/ShowDrinkList';
import { useState, useEffect } from 'react';
import { useGetUserID } from '../../hooks/useGetUserID';
import * as drinksAPI from '../../utilities/drinks-api';
import ShowListTest from '../../components/ShowDrinkList/ShowListTest';
import UpdateDrink from '../../components/UpdateDrink/UpdateDrink';



export default function DrinkListPage({ user }) {
  const [drinks, setDrinks] = useState([]);

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

  // const handleDelete = async (drinkId) => {
  //   try {
  //     const response = await fetch(`${drinksAPI}/${drinkId}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     console.log(drinkId)
  //     if (response.ok) {
  //       // Display a success message or perform any additional actions
  //       console.log('Drink deleted successfully.');
  //       // You might also consider updating the drink list after deletion
  //     } else {
  //       // Display an error message if the deletion failed
  //       console.log('Failed to delete the drink.');
  //     }
  //   } catch (error) {
  //     // Handle any errors that occur during the deletion process
  //     console.log('An error occurred while deleting the drink:', error);
  //   }
  // };

  const handleUpdate = async (drinkId, updatedDrink) => {
    try {
      await drinksAPI.updateDrink(drinkId, updatedDrink);
      setDrinks((prevDrinks) =>
        prevDrinks.map((drink) =>
          drink._id === drinkId ? { ...drink, ...updatedDrink } : drink
        )
      );
      console.log(drinkId)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {drinks.map((drink, i) => {
      return (
        <ShowListTest user={user} setDrinks={setDrinks} drink={drink} handleUpdate={handleUpdate} handleDelete={handleDelete} key={i}/>
        
      )
    })}



    {/* <ShowDrinkList drinks={drinks} userID={userID} handleDelete={handleDelete}
        handleUpdate={handleUpdate}
/> */}
    </>
  );
}