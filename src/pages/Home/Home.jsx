import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, FormLabel, FormControl, Image, Input, Heading, Button, ButtonGroup, Divider, Textarea, Container } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ShowAPIList from "../../components/ShowAPIList/ShowAPIList";
import Search from "../../components/SearchBar/Search";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/random.php`;

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

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <Text textAlign={'center'} fontSize={32} fontWeight={'bold'}>Want to have a drink?</Text>
      <br />
      {/* <Search /> */}

      {data.map((drink, i) => {
        return (
          <ShowAPIList key={i} drink={drink} />
        )
      })}
      <Button
        ml={500} mt={6} mb={6}
        bgColor='purple.500'
        color='white'
        borderRadius={20}
        onClick={fetchCocktail} >Get Another Cocktail</Button>

        <Container
          id='footer-main'
          align='center' 
          fontSize='lg'
          my={2}
          display='flex'
          >
          <Text as='b' fontSize='sm' p={3} mx={'auto'}>
            Please Dr1nk Responsibly
          </Text>
          <Text fontSize="sm" color="subtle" py={3} mx={'auto'}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </Text>
        </Container>
    </div>
    
    

  );
}