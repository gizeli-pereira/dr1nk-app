import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { Box, Container, Flex, ButtonGroup, Button, HStack } from '@chakra-ui/react'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Flex justify="space-between" flex="1">
              <Link to="/">Home</Link>
              &nbsp; | &nbsp;
              <Link to="/drinks">Your Drink List</Link>
              &nbsp; | &nbsp;
              <Link to="/drinks/new">Add New Drink</Link>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Box ml={6}>
              <span>Welcome, {user.name}!</span>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Link color={'purple'} to="" onClick={handleLogOut}>Log Out</Link>
              </Box>
            </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}