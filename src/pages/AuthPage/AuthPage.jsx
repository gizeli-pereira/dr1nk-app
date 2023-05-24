import { Button, Heading } from '@chakra-ui/react'
import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className="AuthPage">
      <div>
        <Heading
          size='4xl'
          id='title-text'

        >Dr1nk
        </Heading>
        <br />
        <Button
          ml={6} mt={6} mb={6}
          bgColor='purple.500'
          color='white'
          borderRadius={20}
          onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'CLICK TO SIGN UP' : 'CLICK TO LOG IN'}</Button>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}