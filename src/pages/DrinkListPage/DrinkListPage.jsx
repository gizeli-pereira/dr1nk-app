import ShowDrinkList from '../../components/ShowDrinkList/ShowDrinkList';
import { useState, useEffect } from 'react';
import { useGetUserID } from '../../hooks/useGetUserID';
import * as drinksAPI from '../../utilities/drinks-api';
import { Box, Container, Text } from '@chakra-ui/react';

export default function DrinkListPage({ user }) {
  const [drinks, setDrinks] = useState([]);
  const userID = useGetUserID();

  const fetchDrinks = async () => {
    try {
      const data = await drinksAPI.getAllDrinks();
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

  return (
    <Box>
      {drinks.map((drink, i) => {
        let drinkID = drink._id
        return (

          <ShowDrinkList user={user} userID={userID} setDrinks={setDrinks}
            drink={drink} drinkID={drinkID}
            handleDelete={handleDelete} key={i} />
        )
      })}

      <Container
          id='footer'
          align='center' 
          fontSize='lg'
          my={2}
          display='flex'
          >
          <Text fontSize='sm' p={3} mx={'auto'}>
            Please Dr1nk Responsibly
          </Text>
          <Text fontSize="sm" color="subtle" py={3} mx={'auto'}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </Text>
        </Container>
    </Box>
  );
}