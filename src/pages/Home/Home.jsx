import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ShowAPIList from "../../components/ShowDrinkList/ShowAPIList";
import { Button, StatArrow } from "@chakra-ui/react";
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
      <h1>Want to have a drink?</h1>
    <Search />

    {data.map((drink, i) => {
      return (
        <ShowAPIList key={i} drink={drink}/>
      )
    })}
      <Button 
      m={8}
      bgColor='purple.500'
      color='white'
      borderRadius={20}
      onClick={fetchCocktail} >Get Another Cocktail</Button>
    </div>

  );
}