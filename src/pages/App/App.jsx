import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Home from '../Home/Home';
import NewDrinkPage from '../NewDrinkPage/NewDrinkPage';
import DrinkListPage from '../DrinkListPage/DrinkListPage';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <ChakraProvider className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            {/* <Home /> */}
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Home />} />
              <Route path="/drinks" element={<DrinkListPage />} />
              <Route path="/drinks/new" element={<NewDrinkPage user={user}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </ChakraProvider>
  );
}
