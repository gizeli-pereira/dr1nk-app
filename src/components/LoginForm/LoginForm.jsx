import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Card,
} from '@chakra-ui/react'
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      console.log(user);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <Card 
        className="form-container"
        p={8}
        my={6}
        bgGradient='linear(to-r, pink.200, purple.200)'
        sm='200px'
        >
        <FormControl
        >
          <form autoComplete="off" onSubmit={handleSubmit}>
            <FormLabel>Email</FormLabel>
            <Input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <FormLabel mt={3} >Password</FormLabel>
            <Input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <br />
            <Button
              ml={15} mt={6} mb={6}
              bgColor='purple.500'
              color='white'
              borderRadius={20}
              type="submit">LOG IN</Button>
          </form>
        </FormControl>
      </Card>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
