import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react'


export default function ShowAPIList({ drink }) {

    const ingredients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5
      ];
      
      const hasNullIngredient = ingredients.some(ingredient => ingredient === null);
      
      if (hasNullIngredient) {
        console.log("Null ingredient found, stopping array.");
      } else {
        ingredients.forEach(ingredient => {
          // Process the ingredient
          console.log(ingredient);
        });
      }

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            w={"80%"}
            mx={5}
        >

            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={drink.strDrinkThumb}
                alt='#'
            />
            <Stack mt='6' spacing='3'>
                <CardBody w={'100%'}>
                    <Heading size='2xl'>{drink.strDrink}</Heading>
                    <Text
                        fontSize='2xl'
                    >
                        Ingredients: {ingredients + " " }
                    </Text>
                    <Divider my={2} />
                    <Text color='blue.600' fontSize='lg'>
                        Instructions: {drink.strInstructions}
                    </Text>
                    <Text>
                        You can find it here: {drink.location}
                    </Text>
                    
                </CardBody>


                <CardFooter>
                    <Text 
                        fontSize='sm'
                    
                    >Please drink responsibly</Text>
                </CardFooter>
            </Stack>

        </Card>
    )
};
