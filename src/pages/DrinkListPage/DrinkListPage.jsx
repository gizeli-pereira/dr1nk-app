import { checkToken }from '../../utilities/users-service';
import ShowDrinkList from '../../components/ShowDrinkList/ShowDrinkList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useGetUserID } from '../../hooks/useGetUserID';
import * as drinksAPI from '../../utilities/drinks-api';



export default function DrinkListPage() {
  const [drinks, setDrinks] = useState([]);
  const [savedDrinks, setSavedDrinks] = useState([]);

  const userID = useGetUserID();


  useEffect(function() {
    async function getDrinks() {
      const data = await drinksAPI.getDrinks();
      setDrinks(data);
    }
    getDrinks();
  }, []);

  // async function handleCheckToken() {
  //   const expDate = await checkToken();
  //   console.log(expDate);
  // }

  return (
    <>
    <ShowDrinkList drinks={drinks} userID={userID} />
    {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
    </>
  );
}