import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { useState } from 'react';

export default function ShowDrinkList({ user, setDrinks, drink, drinkID, drinks, userID, handleDelete }) {

    return (

        <div w={'80vw'}>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    w={"80%"}
                    ml={4}
                >

                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={drink.imageUrl}
                        alt='drink'

                    />
                    <Stack mt='6' ml='6' spacing='3'>
                        <CardBody w={'100%'}>
                            <Heading size='md'>{drink.name}</Heading>
                            <Text>
                                Ingredients: {drink.ingredients}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                Instructions: {drink.instructions}
                            </Text>
                            <Text>
                                You can find it here: {drink.location}
                            </Text>
                        </CardBody>
                        <CardFooter>

                            <ButtonGroup spacing='2'>
                                <Button
                                    ml={6} mt={6} mb={6}
                                    bgColor='purple.500'
                                    color='white'
                                    borderRadius={20}
                                    onClick={() => handleDelete(drink._id)}>Delete this drink!
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Stack>

                </Card> 
        </div>
    )
};