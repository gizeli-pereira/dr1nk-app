import { ChakraProvider, Container, Text, Flex, Stack, StackDivider } from '@chakra-ui/react'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Home from '../Home/Home';
import NewDrinkPage from '../NewDrinkPage/NewDrinkPage';
import DrinkListPage from '../DrinkListPage/DrinkListPage';
import NavBar from '../../components/NavBar/NavBar';
import UpdatePage from '../UpdatePage/UpdatePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [drinks, setDrinks] = useState([]);

  return (
    <ChakraProvider className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<Home />} />
            <Route path="/drinks" element={<DrinkListPage user={user} />} />
            <Route path="/drinks/new" element={<NewDrinkPage user={user} />} />
            <Route path="/drinks/:id" element={<UpdatePage user={user} drinks={drinks} setDrinks={setDrinks} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      
      
    </ChakraProvider>
  );
}
