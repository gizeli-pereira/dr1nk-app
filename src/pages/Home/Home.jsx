import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, FormLabel, FormControl, Image, Input, Heading, Button, ButtonGroup, Divider, Textarea } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ShowAPIList from "../../components/ShowDrinkList/ShowAPIList";
import Search from "../../components/SearchBar/Search";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

  const fetchCocktail = useCallback(() => {
    setLoading(true);
    axios.get(cocktailUrl).then(res => {
      console.log(res.data)
      setData(res.data.drinks)
    }).catch(e => console.log(e))
    .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchCocktail();
  }, [fetchCocktail]);

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <Text textAlign={'center'} fontSize={32} fontWeight={'bold'}>Want to have a drink?</Text>
    <Search />

    {data.map((drink, i) => {
      return (
        <ShowAPIList key={i} drink={drink}/>
      )
    })}
      <Button 
      ml={500} mt={6} mb={6}
      bgColor='purple.500'
      color='white'
      borderRadius={20}
      onClick={fetchCocktail} >Get Another Cocktail</Button>
    </div>

  );
}