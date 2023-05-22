import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, FormLabel, FormControl, Image, Input, Heading, Button, ButtonGroup, Divider, Textarea } from '@chakra-ui/react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDrink } from "../../utilities/drinks-api";

export default function AddDrinkForm() {
  const [drink, setDrink] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDrink({ ...drink, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await createDrink(drink); // Call the createDrink function from drinks-api.js

      navigate("/drinks"); // Redirect to the home page after successful creation
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-drink">
      <Heading size='xl' mb={6} pl={4}>Add a Drink</Heading>
      <FormControl pl={6} onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <Input
          type="text"
          placeholder='Ex: Margarita'
          id="name"
          name="name"
          value={drink.name}
          onChange={handleChange}
        />
        <FormLabel htmlFor="ingredients">Ingredients:</FormLabel>
        <Input
          type="text"
          placeholder='Ex: Vodka, tequila, ice...'
          name="ingredients"
          value={drink.ingredients}
          onChange={handleChange}
        />
        <FormLabel htmlFor="instructions">Instructions:</FormLabel>
        <Textarea
          size='md'
          name="instructions"
          placeholder='Ex: Mix in a cup...'
          id="instructions"
          value={drink.instructions}
          onChange={handleChange}
        ></Textarea>
        <FormLabel htmlFor="imageUrl">Image URL:</FormLabel>
        <Input
          type="text"
          placeholder='Ex: https://image...jpg'
          id="imageUrl"
          name="imageUrl"
          value={drink.imageUrl}
          onChange={handleChange}
        />
        <FormLabel htmlFor="location">Location:</FormLabel>
        <Input
          type="text"
          placeholder="Gigi's bar"
          id="location"
          name="location"
          value={drink.location}
          onChange={handleChange}
        />
        <Button  mt={4} colorScheme='purple' type="submit">Add Drink</Button>
      </FormControl>
    </div>
  );
}
         