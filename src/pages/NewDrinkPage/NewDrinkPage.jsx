import { Container, Text } from "@chakra-ui/react";
import AddDrinkForm from "../../components/AddDrinkForm/AddDrinkForm";

export default function NewDrinkPage({ user }) {
  return (
    <div>
      <AddDrinkForm user={user} />

      <Container
          id='footer'
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
};