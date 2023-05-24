import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDrink, updateDrink } from "../../utilities/drinks-api";
import * as drinksAPI from '../../utilities/drinks-api';
import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, FormLabel, FormControl, Image, Input, Heading, Button, ButtonGroup, Divider, Textarea } from '@chakra-ui/react'
import { confirmAlert } from "react-confirm-alert";
import { useGetUserID } from "../../hooks/useGetUserID";


export default function UpdateDrink({ drinkOne, drinks, setDrinks, handleDelete, handleUpdate }) {
  const { userId } = useGetUserID();
  const { drinkId } = useParams();
  const navigate = useNavigate();

  // console.log(drinkOne)
  const [drink, setDrink] = useState({ ...drinkOne })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDrink((prevDrink) => ({ ...prevDrink, [name]: value }));
  };

  return (
    <div className="update-drink">
      <Heading as='h2' size='md'>Edit this Drink here:</Heading>
      <form onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleUpdate(drinkId, { ...drink, user: userId });
      }}
      >
        <FormLabel htmlFor="name">Name:</FormLabel>
        <Input
          mb={6} mr={6}
          type="text"
          id="name"
          name="name"
          value={drink.name}
          placeholder={drink.name}
          onChange={handleChange}
        />
        <FormLabel htmlFor="ingredients">Ingredients:</FormLabel>
        <Input
          mb={6} mr={6}
          type="text"
          name="ingredients"
          value={drink.ingredients}
          onChange={handleChange}
        />
        <FormLabel htmlFor="instructions">Instructions:</FormLabel>
        <Textarea
          mb={6} mr={6}
          name="instructions"
          id="instructions"
          value={drink.instructions}
          onChange={handleChange}
        ></Textarea>
        <FormLabel htmlFor="imageUrl">Image URL:</FormLabel>
        <Input
          mb={6} mr={6}
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={drink.imageUrl}
          onChange={handleChange}
        />
        <FormLabel htmlFor="location">Location:</FormLabel>
        <Input
          mb={6} mr={6}
          type="text"
          id="location"
          name="location"
          value={drink.location}
          onChange={handleChange}
        />
        <br />
        <Button type="submit" >Submit Changes</Button>
      </form>
      <br />
      <Button onClick={() => handleDelete(drink._id)}>This delete is working!</Button>
    </div>
  );
}

